import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Kontak = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-dots" />
        </div>
        <div className="container-church relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Kontak & Lokasi
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Hubungi kami atau kunjungi gereja kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Informasi Kontak</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                    <p className="text-muted-foreground">
                      Jl. Sibulele, Kelurahan Balige I<br />
                      Kecamatan Balige, Kabupaten Toba<br />
                      Sumatera Utara, 22312
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telepon / WhatsApp</h3>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:gpdi.sibulele@gmail.com"
                      className="text-primary hover:underline"
                    >
                      gpdi.sibulele@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Jam Operasional Sekretariat</h3>
                    <p className="text-muted-foreground">
                      Senin - Jumat: 09:00 - 16:00 WIB<br />
                      Sabtu: 09:00 - 12:00 WIB<br />
                      Minggu: Setelah ibadah
                    </p>
                  </div>
                </div>
              </div>

              {/* Social & WhatsApp Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang GPdI Jemaat Sibulele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="cta" size="lg" className="w-full">
                    <MessageCircle size={20} />
                    Chat via WhatsApp
                  </Button>
                </a>
                <a
                  href="https://facebook.com/gpdi.sibulele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    <Facebook size={20} />
                    Facebook
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Lokasi Kami</h2>
              <div className="rounded-xl overflow-hidden shadow-card h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4894321234567!2d99.0603!3d2.3401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjAnMjQuNCJOIDk5wrAwMyczdHJlZXQ!5e0!3m2!1sen!2sid!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GPdI Sibulele Location"
                />
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                * Peta ini menunjukkan lokasi perkiraan. Silakan gunakan navigasi Google Maps untuk petunjuk arah yang lebih akurat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontak;
