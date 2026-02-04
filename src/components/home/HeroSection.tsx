import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="GPdI Jemaat Sibulele worship service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-church relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-church-red text-church-red-foreground text-sm font-medium rounded-full mb-6">
              Selamat Datang di
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Gereja Pantekosta di Indonesia
            <span className="block text-gold mt-2">Jemaat Sibulele</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-primary-foreground/20"
          >
            <p className="text-lg md:text-xl text-primary-foreground/90 italic leading-relaxed">
              "Karena di dalam Dialah tersembunyi segala harta hikmat dan pengetahuan."
            </p>
            <p className="text-primary-foreground/70 mt-2 text-sm">— Kolose 2:3</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link to="/tentang">
              <Button variant="hero" size="lg" className="group">
                Tentang Kami
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/jadwal">
              <Button variant="hero-outline" size="lg">
                <Calendar size={18} />
                Jadwal Ibadah
              </Button>
            </Link>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <div className="w-12 h-12 rounded-full bg-church-red flex items-center justify-center shrink-0">
                <Calendar className="text-church-red-foreground" size={24} />
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Ibadah Minggu</p>
                <p className="text-primary-foreground/70 text-sm">Setiap Minggu, 09:00 WIB</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shrink-0">
                <MapPin className="text-gold-foreground" size={24} />
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Lokasi</p>
                <p className="text-primary-foreground/70 text-sm">Jl. Sibulele, Balige, Toba</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
