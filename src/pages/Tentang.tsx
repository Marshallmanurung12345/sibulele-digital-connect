import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { History, Target, BookOpen, Users } from "lucide-react";
import pastorImage from "@/assets/pastor.jpg";
import churchExterior from "@/assets/church-exterior.jpg";

const Tentang = () => {
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
              Tentang Kami
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Mengenal lebih dekat Gereja Pantekosta di Indonesia Jemaat Sibulele
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <History className="text-primary" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sejarah Gereja</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GPdI Jemaat Sibulele berdiri pada tahun 1985 di desa Sibulele, Balige, 
                Kabupaten Toba, Sumatera Utara. Bermula dari kebangunan rohani di kalangan 
                masyarakat Batak Toba yang rindu akan kuasa Roh Kudus.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dengan berjalannya waktu, jemaat terus bertumbuh dan berkembang. 
                Gedung gereja yang semula sederhana, kini telah diperbaharui dan 
                dapat menampung ratusan jemaat setiap minggu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hingga kini, GPdI Jemaat Sibulele terus melayani masyarakat sekitar 
                dengan berbagai program pelayanan dan kegiatan rohani yang mendukung 
                pertumbuhan iman jemaat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={churchExterior}
                alt="GPdI Sibulele Church"
                className="rounded-2xl shadow-elevated w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-church">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={24} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Visi & Misi</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-card border-t-4 border-primary"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Visi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi gereja yang hidup dalam kuasa Roh Kudus, bertumbuh dalam 
                iman, kasih, dan pengharapan, serta menjadi berkat bagi bangsa 
                Indonesia dan dunia.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-card border-t-4 border-church-red"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Misi</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-church-red">•</span>
                  Memberitakan Injil keselamatan kepada segala bangsa
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-church-red">•</span>
                  Membina jemaat dalam pengenalan akan Tuhan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-church-red">•</span>
                  Mengembangkan pelayanan kasih kepada sesama
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-church-red">•</span>
                  Membangun generasi yang takut akan Tuhan
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faith Statement */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Pengakuan Iman GPdI</h2>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">1.</strong> Kami percaya bahwa Alkitab adalah Firman Allah yang diilhamkan.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">2.</strong> Kami percaya kepada Allah yang Esa, yang kekal dan berdaulat atas segala sesuatu.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">3.</strong> Kami percaya kepada Tuhan Yesus Kristus sebagai Juruselamat dan Tuhan.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">4.</strong> Kami percaya kepada Roh Kudus dan karunia-karunia-Nya.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">5.</strong> Kami percaya akan kedatangan Kristus yang kedua kali.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-secondary">
        <div className="container-church">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Struktur Pelayanan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Para hamba Tuhan yang melayani di GPdI Jemaat Sibulele
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-card text-center"
            >
              <img
                src={pastorImage}
                alt="Pendeta"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground">Pdt. Mangapul Situmorang</h3>
                <p className="text-muted-foreground text-sm">Gembala Jemaat</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-card text-center"
            >
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <Users className="text-muted-foreground" size={48} />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground">Majelis Gereja</h3>
                <p className="text-muted-foreground text-sm">Badan Pengurus Harian</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-card text-center"
            >
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <Users className="text-muted-foreground" size={48} />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground">Koordinator Pelayanan</h3>
                <p className="text-muted-foreground text-sm">Bidang-bidang Pelayanan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tentang;
