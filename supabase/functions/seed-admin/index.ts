import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { action, email, password, display_name, role, id_keluarga } = await req.json();

    if (action === "seed") {
      // Create admin user
      const { data: adminUser, error: adminError } = await supabaseAdmin.auth.admin.createUser({
        email: "admin@gpdi-sibulele.com",
        password: "admin123",
        email_confirm: true,
        user_metadata: { display_name: "Admin GPdI Sibulele" },
      });

      if (adminError && !adminError.message.includes("already been registered")) {
        throw adminError;
      }

      if (adminUser?.user) {
        await supabaseAdmin.from("user_roles").upsert({
          user_id: adminUser.user.id,
          role: "admin",
        }, { onConflict: "user_id,role" });
      }

      // Create sample keluarga
      await supabaseAdmin.from("keluarga").upsert({
        id_keluarga: "KLG-001",
        nama_kepala_keluarga: "Bapak Tulus Simanullang",
        alamat: "Jl. Sibulele No. 10, Balige",
        pekerjaan_kk: "Petani",
        tempat_lahir: "Balige",
        tanggal_lahir: "1975-05-15",
        no_hp_kk: "081234567890",
        status_keluarga: "aktif",
      }, { onConflict: "id_keluarga" });

      // Create KK user
      const { data: kkUser, error: kkError } = await supabaseAdmin.auth.admin.createUser({
        email: "081234567890@gpdi.local",
        password: "jemaat123",
        email_confirm: true,
        user_metadata: { display_name: "Bapak Tulus Simanullang" },
      });

      if (kkError && !kkError.message.includes("already been registered")) {
        throw kkError;
      }

      if (kkUser?.user) {
        await supabaseAdmin.from("user_roles").upsert({
          user_id: kkUser.user.id,
          role: "kk",
        }, { onConflict: "user_id,role" });

        await supabaseAdmin.from("profiles").update({
          id_keluarga: "KLG-001",
        }).eq("user_id", kkUser.user.id);
      }

      // Create sample anggota keluarga
      await supabaseAdmin.from("anggota_keluarga").upsert([
        {
          id_anggota: "ANG-001",
          id_keluarga: "KLG-001",
          nama: "Bapak Tulus Simanullang",
          hubungan: "kepala",
          pekerjaan: "Petani",
          tempat_lahir: "Balige",
          tanggal_lahir: "1975-05-15",
          status_jemaat: "aktif",
        },
        {
          id_anggota: "ANG-002",
          id_keluarga: "KLG-001",
          nama: "Ibu Maria Simanullang",
          hubungan: "istri",
          pekerjaan: "Ibu Rumah Tangga",
          tempat_lahir: "Porsea",
          tanggal_lahir: "1978-08-20",
          status_jemaat: "aktif",
        },
        {
          id_anggota: "ANG-003",
          id_keluarga: "KLG-001",
          nama: "Rina Simanullang",
          hubungan: "anak",
          pekerjaan: "Mahasiswa",
          tempat_lahir: "Balige",
          tanggal_lahir: "2000-03-10",
          status_jemaat: "aktif",
        },
      ], { onConflict: "id_anggota" });

      return new Response(
        JSON.stringify({
          success: true,
          message: "Seed data created. Admin: admin@gpdi-sibulele.com / admin123, KK: 081234567890 / jemaat123",
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Action: create-user (for admin to create users)
    if (action === "create-user") {
      // Verify caller is admin
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) throw new Error("Not authenticated");
      
      const { data: { user: caller } } = await supabaseAdmin.auth.getUser(authHeader.replace("Bearer ", ""));
      if (!caller) throw new Error("Invalid token");

      const { data: callerRoles } = await supabaseAdmin.from("user_roles").select("role").eq("user_id", caller.id);
      const isAdmin = callerRoles?.some(r => r.role === "admin");
      if (!isAdmin) throw new Error("Only admins can create users");

      const userEmail = role === "kk" ? `${email}@gpdi.local` : email;
      
      const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email: userEmail,
        password,
        email_confirm: true,
        user_metadata: { display_name },
      });

      if (createError) throw createError;

      await supabaseAdmin.from("user_roles").insert({
        user_id: newUser.user.id,
        role,
      });

      if (id_keluarga) {
        await supabaseAdmin.from("profiles").update({
          id_keluarga,
        }).eq("user_id", newUser.user.id);
      }

      return new Response(
        JSON.stringify({ success: true, user_id: newUser.user.id }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
