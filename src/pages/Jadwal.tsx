import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const scheduleData = [
  {
    category: "Ibadah Umum",
    items: [
      {
        title: "Ibadah Minggu",
        day: "Setiap Minggu",
        time: "09:00 - 11:00 WIB",
        location: "Gedung Utama GPdI Sibulele",
        description: "Ibadah umum untuk seluruh jemaat dan masyarakat. Semua kalangan usia dipersilakan hadir.",
      },
      {
        title: "Ibadah Doa Puasa",
        day: "Setiap Rabu",
        time: "18:00 - 20:00 WIB",
        location: "Gedung Utama / Rumah Rayon",
        description: "Ibadah doa dan puasa bersama. Dilaksanakan secara bergilir di masing-masing rayon.",
      },
    ],
  },
  {
    category: "Ibadah Kategorial",
    items: [
      {
        title: "Ibadah Pemuda & Remaja",
        day: "Setiap Sabtu",
        time: "17:00 - 19:00 WIB",
        location: "Ruang Pemuda",
        description: "Ibadah khusus untuk pemuda dan remaja dengan pujian kontemporer dan sharing firman.",
      },
      {
        title: "Sekolah Minggu",
        day: "Setiap Minggu",
        time: "09:00 - 10:30 WIB",
        location: "Ruang Sekolah Minggu",
        description: "Kelas Sekolah Minggu untuk anak-anak usia 3-12 tahun dengan kurikulum yang menyenangkan.",
      },
      {
        title: "Persekutuan Wanita",
        day: "Setiap Kamis (Minggu I & III)",
        time: "15:00 - 17:00 WIB",
        location: "Gedung Utama",
        description: "Persekutuan khusus untuk kaum wanita dengan berbagi firman dan kegiatan sosial.",
      },
      {
        title: "Persekutuan Pria",
        day: "Setiap Sabtu (Minggu II & IV)",
        time: "17:00 - 19:00 WIB",
        location: "Gedung Utama",
        description: "Persekutuan khusus untuk kaum pria dengan pembahasan firman dan fellowship.",
      },
    ],
  },
];

const Jadwal = () => {
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
              Jadwal Ibadah
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Bergabunglah bersama kami dalam ibadah dan persekutuan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="section-padding bg-background">
        <div className="container-church">
          {scheduleData.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Calendar className="text-primary-foreground" size={20} />
                </div>
                {category.category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-xl p-6 shadow-card hover-lift border-l-4 border-primary"
                  >
                    <h3 className="font-semibold text-lg text-foreground mb-4">{item.title}</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-primary shrink-0" size={18} />
                        <span className="text-muted-foreground text-sm">{item.day}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="text-primary shrink-0" size={18} />
                        <span className="text-muted-foreground text-sm">{item.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="text-primary shrink-0" size={18} />
                        <span className="text-muted-foreground text-sm">{item.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-xl p-8 mt-12"
          >
            <h3 className="font-semibold text-lg text-foreground mb-4">Informasi Tambahan</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Semua jadwal dapat berubah pada hari-hari khusus (Natal, Paskah, dll)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Harap hadir 15 menit sebelum ibadah dimulai
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Tersedia parkir yang memadai di area gereja
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Untuk informasi lebih lanjut, silakan hubungi sekretariat gereja
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Jadwal;
