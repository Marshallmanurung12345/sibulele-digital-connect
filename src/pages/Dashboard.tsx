import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, Users, Home, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { user, role, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [familyData, setFamilyData] = useState<any>(null);
  const [familyMembers, setFamilyMembers] = useState<any[]>([]);
  const [allFamilies, setAllFamilies] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user || !role) return;

    const fetchData = async () => {
      if (role === "admin") {
        const { data } = await supabase.from("keluarga").select("*");
        setAllFamilies(data || []);
      } else if (role === "kk" && profile?.id_keluarga) {
        const [famRes, memRes] = await Promise.all([
          supabase.from("keluarga").select("*").eq("id_keluarga", profile.id_keluarga).single(),
          supabase.from("anggota_keluarga").select("*").eq("id_keluarga", profile.id_keluarga),
        ]);
        setFamilyData(famRes.data);
        setFamilyMembers(memRes.data || []);
      }
    };
    fetchData();
  }, [user, role, profile]);

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-background border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Portal Jemaat</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {role === "admin" ? <Shield size={12} /> : <User size={12} />}
                {role === "admin" ? "Administrator" : "Kepala Keluarga"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {profile?.display_name || user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut size={16} />
              Keluar
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Selamat Datang, {profile?.display_name || "Pengguna"}!
          </h1>
          <p className="text-muted-foreground mb-8">
            {role === "admin" 
              ? "Anda masuk sebagai Administrator. Anda dapat mengelola data jemaat."
              : "Anda masuk sebagai Kepala Keluarga. Berikut data keluarga Anda."}
          </p>

          {/* Admin View */}
          {role === "admin" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background rounded-xl p-6 border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-primary" size={24} />
                    <h3 className="font-semibold text-foreground">Total Keluarga</h3>
                  </div>
                  <p className="text-3xl font-bold text-primary">{allFamilies.length}</p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="text-primary" size={24} />
                    <h3 className="font-semibold text-foreground">Keluarga Aktif</h3>
                  </div>
                  <p className="text-3xl font-bold text-primary">
                    {allFamilies.filter(f => f.status_keluarga === "aktif").length}
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="text-church-red" size={24} />
                    <h3 className="font-semibold text-foreground">Role Anda</h3>
                  </div>
                  <p className="text-lg font-bold text-church-red">Administrator</p>
                </div>
              </div>

              <div className="bg-background rounded-xl border border-border shadow-soft overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Daftar Keluarga Jemaat</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">ID</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Kepala Keluarga</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Alamat</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">No HP</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {allFamilies.map((fam) => (
                        <tr key={fam.id_keluarga} className="hover:bg-secondary/30">
                          <td className="px-6 py-4 text-sm font-mono text-foreground">{fam.id_keluarga}</td>
                          <td className="px-6 py-4 text-sm text-foreground">{fam.nama_kepala_keluarga}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{fam.alamat}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{fam.no_hp_kk}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              fam.status_keluarga === "aktif" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-red-100 text-red-800"
                            }`}>
                              {fam.status_keluarga}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* KK View */}
          {role === "kk" && (
            <div className="space-y-6">
              {familyData && (
                <div className="bg-background rounded-xl border border-border shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Home size={20} className="text-primary" />
                    Data Keluarga
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">ID Keluarga</p>
                      <p className="font-medium text-foreground">{familyData.id_keluarga}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Kepala Keluarga</p>
                      <p className="font-medium text-foreground">{familyData.nama_kepala_keluarga}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Alamat</p>
                      <p className="font-medium text-foreground">{familyData.alamat}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pekerjaan</p>
                      <p className="font-medium text-foreground">{familyData.pekerjaan_kk}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">No HP</p>
                      <p className="font-medium text-foreground">{familyData.no_hp_kk}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        familyData.status_keluarga === "aktif" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {familyData.status_keluarga}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-background rounded-xl border border-border shadow-soft overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Users size={20} className="text-primary" />
                    Anggota Keluarga
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Nama</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Hubungan</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Pekerjaan</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Tgl Lahir</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {familyMembers.map((mem) => (
                        <tr key={mem.id_anggota} className="hover:bg-secondary/30">
                          <td className="px-6 py-4 text-sm font-medium text-foreground">{mem.nama}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground capitalize">{mem.hubungan}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{mem.pekerjaan}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{mem.tanggal_lahir}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              mem.status_jemaat === "aktif" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-red-100 text-red-800"
                            }`}>
                              {mem.status_jemaat}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
