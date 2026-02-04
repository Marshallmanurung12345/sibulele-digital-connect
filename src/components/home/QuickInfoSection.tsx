import { Calendar, Users, Heart, Music } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Calendar,
    title: "Ibadah Reguler",
    description: "Ibadah Minggu, Doa Puasa, dan pertemuan rohani lainnya",
  },
  {
    icon: Users,
    title: "Persekutuan",
    description: "Komunitas yang saling mendukung dan bertumbuh bersama",
  },
  {
    icon: Heart,
    title: "Pelayanan Kasih",
    description: "Melayani sesama dengan kasih Kristus yang nyata",
  },
  {
    icon: Music,
    title: "Pujian & Penyembahan",
    description: "Memuji dan menyembah Tuhan dengan segenap hati",
  },
];

const QuickInfoSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-church">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-card hover-lift text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoSection;
