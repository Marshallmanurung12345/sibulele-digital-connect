
-- 1. Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'kk');

-- 2. Create keluarga table
CREATE TABLE public.keluarga (
  id_keluarga TEXT PRIMARY KEY,
  nama_kepala_keluarga TEXT NOT NULL,
  alamat TEXT,
  pekerjaan_kk TEXT,
  tempat_lahir TEXT,
  tanggal_lahir DATE,
  no_hp_kk TEXT,
  status_keluarga TEXT NOT NULL DEFAULT 'aktif',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Create anggota_keluarga table
CREATE TABLE public.anggota_keluarga (
  id_anggota TEXT PRIMARY KEY,
  id_keluarga TEXT NOT NULL REFERENCES public.keluarga(id_keluarga) ON DELETE CASCADE,
  nama TEXT NOT NULL,
  hubungan TEXT NOT NULL,
  pekerjaan TEXT,
  tempat_lahir TEXT,
  tanggal_lahir DATE,
  status_jemaat TEXT NOT NULL DEFAULT 'aktif',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  id_keluarga TEXT REFERENCES public.keluarga(id_keluarga) ON DELETE SET NULL,
  display_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- 6. Enable RLS on all tables
ALTER TABLE public.keluarga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anggota_keluarga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 7. Helper function: has_role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 8. Helper function: get_family_id_for_user
CREATE OR REPLACE FUNCTION public.get_family_id_for_user(_user_id UUID)
RETURNS TEXT
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id_keluarga FROM public.profiles
  WHERE user_id = _user_id
  LIMIT 1
$$;

-- 9. RLS Policies for keluarga
CREATE POLICY "Admin full access keluarga" ON public.keluarga
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "KK can view own family" ON public.keluarga
  FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'kk')
    AND id_keluarga = public.get_family_id_for_user(auth.uid())
  );

-- 10. RLS Policies for anggota_keluarga
CREATE POLICY "Admin full access anggota" ON public.anggota_keluarga
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "KK can view own family members" ON public.anggota_keluarga
  FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'kk')
    AND id_keluarga = public.get_family_id_for_user(auth.uid())
  );

-- 11. RLS Policies for profiles
CREATE POLICY "Admin full access profiles" ON public.profiles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE TO authenticated
  USING (user_id = auth.uid());

-- 12. RLS Policies for user_roles
CREATE POLICY "Admin full access roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

-- 13. Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'display_name');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 14. Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_keluarga_updated_at BEFORE UPDATE ON public.keluarga FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_anggota_updated_at BEFORE UPDATE ON public.anggota_keluarga FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
