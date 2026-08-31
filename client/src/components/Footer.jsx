import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#3b200f] text-[#f8eadc]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl font-bold text-white">
                Kamboj
                <span className="text-[#e7b178]">
                  {" "}Dairy & Bakery
                </span>
              </h2>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#d7bdab]">
              Fresh dairy products, delicious cakes and bakery favorites —
              made with quality, freshness and love.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6d4730] text-sm font-bold transition hover:bg-[#e7b178] hover:text-[#3b200f]"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/kamboj_bakery?igsi=MW40bnU3OWFieGczOA%3D%3D&utm_source=qr"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6d4730] text-sm font-bold transition hover:bg-[#e7b178] hover:text-[#3b200f]"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6d4730] text-sm font-bold transition hover:bg-[#e7b178] hover:text-[#3b200f]"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#e7b178]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <Link
                  to="/order"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  Custom Cake
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CATEGORIES ================= */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#e7b178]">
              Categories
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#products"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  Cakes
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  Dairy Products
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  Pastries
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-[#d7bdab] transition hover:text-white"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#e7b178]">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#e7b178]"
                />

                <p className="text-sm leading-6 text-[#d7bdab]">
                  Kalsiya Road, Chhutmalpur,
<br />
Saharanpur
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={17}
                  className="shrink-0 text-[#e7b178]"
                />

                <a
                  href="tel:+919999999999"
                  className="text-sm text-[#d7bdab] transition hover:text-white"
                >
                  7037555623
                       &  9411693337
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={17}
                  className="shrink-0 text-[#e7b178]"
                />

                <a
                  href="mailto:hello@kambojdairy.com"
                  className="text-sm text-[#d7bdab] transition hover:text-white"
                >
                   kambozaryan007@gmail.com
                </a>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-3">
                <Clock
                  size={17}
                  className="shrink-0 text-[#e7b178]"
                />

                <p className="text-sm text-[#d7bdab]">
                  Mon - Sun: 6:00 AM - 11:00 PM
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[#5b3825]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">

          <p className="text-center text-xs text-[#bfa493] sm:text-left">
            © {new Date().getFullYear()} Kamboj Dairy & Bakery. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              to="/privacy"
              className="text-xs text-[#bfa493] transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-[#bfa493] transition hover:text-white"
            >
              Terms
            </Link>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7b178] text-[#3b200f] transition hover:-translate-y-1 hover:bg-[#f2c998]"
            >
              <ArrowUp size={16} />
            </button>

          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;