import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroChurch from "@/assets/hero-church.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be implemented with Lovable Cloud backend later
    console.log("Login attempt:", { username, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={heroChurch}
          alt="GPdI Sibulele"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 flex flex-col justify-center items-center text-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-primary-foreground flex items-center justify-center mx-auto mb-6">
              <span className="text-primary font-bold text-3xl">G</span>
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground mb-4">
              GPdI Jemaat Sibulele
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-md mx-auto">
              Portal Jemaat untuk mengakses informasi dan layanan gereja secara eksklusif
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Kembali ke Beranda
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-2xl">G</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">GPdI Jemaat Sibulele</h1>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-2">Login Jemaat</h2>
            <p className="text-muted-foreground mb-8">
              Masukkan nomor HP dan password untuk mengakses portal jemaat
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Nomor HP (Username)</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    id="username"
                    type="text"
                    placeholder="08xxxxxxxxxx"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Masuk
              </Button>
            </form>

            <div className="mt-8 p-4 bg-secondary rounded-xl">
              <h3 className="font-medium text-foreground text-sm mb-2">Belum punya akun?</h3>
              <p className="text-muted-foreground text-sm">
                Akun jemaat hanya dapat dibuat oleh Admin/Pendeta gereja. 
                Silakan hubungi sekretariat gereja untuk mendaftarkan keluarga Anda.
              </p>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://wa.me/6281234567890?text=Halo, saya lupa password akun jemaat GPdI Sibulele"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Lupa password? Hubungi Admin
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
