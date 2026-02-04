import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-church section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">G</span>
              </div>
              <div>
                <p className="font-semibold">GPdI Jemaat</p>
                <p className="text-sm text-primary-foreground/70">Sibulele-Balige</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Gereja Pantekosta di Indonesia Jemaat Sibulele melayani dengan kasih 
              untuk pertumbuhan iman dan kesaksian Kristus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              {[
                { name: "Tentang Kami", href: "/tentang" },
                { name: "Jadwal Ibadah", href: "/jadwal" },
                { name: "Pelayanan", href: "/pelayanan" },
                { name: "Galeri", href: "/galeri" },
                { name: "Kontak", href: "/kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Jl. Sibulele, Balige<br />
                  Kabupaten Toba, Sumatera Utara
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span className="text-sm text-primary-foreground/80">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span className="text-sm text-primary-foreground/80">gpdi.sibulele@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-semibold mb-4">Jadwal Ibadah</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Ibadah Minggu</p>
                  <p className="text-sm text-primary-foreground/80">Pukul 09:00 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Doa Puasa</p>
                  <p className="text-sm text-primary-foreground/80">Rabu, 18:00 WIB</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} GPdI Jemaat Sibulele-Balige. Segala Kemuliaan bagi Tuhan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
