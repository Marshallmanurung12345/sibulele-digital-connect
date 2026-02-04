import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import pastorImage from "@/assets/pastor.jpg";

const WelcomeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-church">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl -rotate-3" />
              <img
                src={pastorImage}
                alt="Pendeta GPdI Sibulele"
                className="relative rounded-2xl shadow-elevated w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Salam dari Gembala
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Selamat Datang di
              <span className="text-primary block">Keluarga GPdI Sibulele</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shalom dan salam sejahtera dalam nama Tuhan Yesus Kristus. Kami bersyukur 
              Anda mengunjungi website kami. GPdI Jemaat Sibulele adalah tempat di mana 
              iman bertumbuh, kasih dipraktikkan, dan harapan diperbaharui.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kami mengundang Anda untuk bergabung bersama kami dalam ibadah dan 
              persekutuan. Bersama-sama kita bertumbuh dalam iman dan menjadi berkat 
              bagi sesama.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-church-red rounded-full" />
              <div>
                <p className="font-semibold text-foreground">Pdt. Mangapul Situmorang</p>
                <p className="text-sm text-muted-foreground">Gembala Jemaat</p>
              </div>
            </div>
            <Link to="/tentang">
              <Button variant="default" className="group">
                Lebih Lanjut
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
