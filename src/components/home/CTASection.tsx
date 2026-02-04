import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import churchExterior from "@/assets/church-exterior.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={churchExterior}
          alt="GPdI Sibulele Church"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="container-church relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Mari Beribadah Bersama Kami
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Gereja kami terbuka untuk siapa saja yang ingin mengenal Kristus lebih dalam. 
            Datanglah dan rasakan kehangatan persekutuan keluarga GPdI Sibulele.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontak">
              <Button variant="hero" size="lg" className="bg-church-red hover:bg-church-red/90">
                <MapPin size={20} />
                Kunjungi Kami
              </Button>
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang GPdI Jemaat Sibulele"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero-outline" size="lg">
                <MessageCircle size={20} />
                Hubungi via WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
