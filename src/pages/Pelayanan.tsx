import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Users, Music, BookOpen, Baby, UserCheck } from "lucide-react";
import sundaySchool from "@/assets/sunday-school.jpg";
import youthGroup from "@/assets/youth-group.jpg";
import womensFellowship from "@/assets/womens-fellowship.jpg";
import worshipBand from "@/assets/worship-band.jpg";

const ministries = [
  {
    title: "Pelayanan Sekolah Minggu",
    icon: Baby,
    image: sundaySchool,
    description: "Membina anak-anak dalam pengenalan akan Tuhan sejak dini melalui pembelajaran yang kreatif dan menyenangkan.",
    activities: [
      "Kelas Sekolah Minggu setiap hari Minggu",
      "Perayaan Natal dan Paskah Anak",
      "Kamp Anak-anak",
      "Lomba dan kreativitas anak",
    ],
  },
  {
    title: "Pelayanan Pemuda & Remaja",
    icon: Users,
    image: youthGroup,
    description: "Membangun generasi muda yang kuat dalam iman dan siap menjadi pemimpin masa depan gereja.",
    activities: [
      "Ibadah Pemuda setiap Sabtu",
      "Retreat Pemuda tahunan",
      "Tim Praise & Worship",
      "Kegiatan outreach dan misi",
    ],
  },
  {
    title: "Pelayanan Wanita",
    icon: Heart,
    image: womensFellowship,
    description: "Persekutuan kaum wanita yang saling menguatkan dalam kasih dan pelayanan.",
    activities: [
      "Persekutuan doa wanita",
      "Pelayanan sosial dan diakonia",
      "Seminar kewanitaan",
      "Kunjungan kasih ke jemaat",
    ],
  },
  {
    title: "Pelayanan Musik",
    icon: Music,
    image: worshipBand,
    description: "Melayani dalam pujian dan penyembahan untuk kemuliaan nama Tuhan.",
    activities: [
      "Tim Praise & Worship",
      "Paduan Suara Gereja",
      "Latihan musik rutin",
      "Pelayanan musik pada acara khusus",
    ],
  },
  {
    title: "Pelayanan Pria",
    icon: UserCheck,
    image: null,
    description: "Membangun pria-pria Kristen yang bertanggung jawab dan menjadi teladan dalam keluarga dan masyarakat.",
    activities: [
      "Persekutuan pria",
      "Sharing dan diskusi firman",
      "Kegiatan olahraga bersama",
      "Bakti sosial",
    ],
  },
  {
    title: "Pelayanan Firman",
    icon: BookOpen,
    image: null,
    description: "Mendalami dan mengajarkan Firman Tuhan untuk pertumbuhan rohani jemaat.",
    activities: [
      "Pemahaman Alkitab (PA)",
      "Kelas Baptisan & Katekisasi",
      "Seminar dan lokakarya",
      "Perpustakaan rohani",
    ],
  },
];

const Pelayanan = () => {
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
              Pelayanan
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Berbagai bentuk pelayanan di GPdI Jemaat Sibulele
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover-lift"
              >
                {ministry.image ? (
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-secondary flex items-center justify-center">
                    <ministry.icon className="text-muted-foreground" size={64} />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ministry.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{ministry.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{ministry.description}</p>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Kegiatan:</h4>
                    <ul className="space-y-1">
                      {ministry.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-church-red" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-church">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ingin Bergabung?
            </h2>
            <p className="text-muted-foreground mb-6">
              Kami selalu terbuka untuk menerima anggota baru dalam setiap bidang pelayanan. 
              Hubungi koordinator pelayanan atau sekretariat gereja untuk informasi lebih lanjut.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo, saya ingin bergabung dalam pelayanan GPdI Jemaat Sibulele"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pelayanan;
