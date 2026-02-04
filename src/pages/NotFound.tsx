import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary p-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <span className="text-primary font-bold text-5xl">404</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-muted-foreground mb-8">
          Maaf, halaman yang Anda cari tidak ditemukan. Mungkin halaman telah dipindahkan 
          atau alamat yang dimasukkan salah.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              <Home size={20} />
              Ke Beranda
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft size={20} />
            Kembali
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
