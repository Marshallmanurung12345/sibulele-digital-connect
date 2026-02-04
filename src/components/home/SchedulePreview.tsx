import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const schedules = [
  {
    title: "Ibadah Minggu",
    day: "Setiap Minggu",
    time: "09:00 - 11:00 WIB",
    description: "Ibadah umum untuk seluruh jemaat dan masyarakat",
  },
  {
    title: "Ibadah Doa Puasa",
    day: "Setiap Rabu",
    time: "18:00 - 20:00 WIB",
    description: "Ibadah doa dan puasa bersama per rayon",
  },
  {
    title: "Ibadah Pemuda",
    day: "Setiap Sabtu",
    time: "17:00 - 19:00 WIB",
    description: "Ibadah khusus pemuda dan remaja gereja",
  },
];

const SchedulePreview = () => {
  return (
    <section className="section-padding bg-secondary bg-pattern-dots">
      <div className="container-church">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Jadwal Ibadah
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jadwal Kegiatan Gereja
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah bersama kami dalam ibadah dan persekutuan. 
            Pintu gereja selalu terbuka untuk Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {schedules.map((schedule, index) => (
            <motion.div
              key={schedule.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-card hover-lift border-t-4 border-primary"
            >
              <h3 className="font-semibold text-lg text-foreground mb-4">{schedule.title}</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary shrink-0" size={18} />
                  <span className="text-muted-foreground text-sm">{schedule.day}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary shrink-0" size={18} />
                  <span className="text-muted-foreground text-sm">{schedule.time}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{schedule.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/jadwal">
            <Button variant="default" className="group">
              Lihat Semua Jadwal
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchedulePreview;
