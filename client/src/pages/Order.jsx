import Header from "../components/Header";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  PackageSearch,
} from "lucide-react";

function Order() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fffaf5]">
        {/* HERO */}
        <section className="border-b border-[#ead9cb] bg-[#fffaf5] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
              Kamboj Dairy & Bakery
            </p>

            <h1 className="mt-3 font-serif text-4xl font-bold text-[#4a2c1b] sm:text-5xl">
              Order & Contact
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#806556] sm:text-base">
              Fresh dairy products, delicious bakery items and special
              treats — order online or contact us for any help.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4a260f] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#6a3b1f]"
              >
                <ShoppingBag size={18} />
                Start Shopping
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/track-order"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d9c4b3] bg-white px-6 py-3.5 text-sm font-bold text-[#69402a] transition hover:bg-[#f7eee5]"
              >
                <PackageSearch size={18} />
                Track Your Order
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="px-4 py-12 sm:px-6 lg:px-8" id="contact">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-3">

              {/* PHONE */}
              <div className="rounded-2xl border border-[#ead9cb] bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
                  <Phone size={24} />
                </div>

                <h2 className="mt-5 font-serif text-xl font-bold text-[#4a2c1b]">
                  Call Us
                </h2>

                <p className="mt-2 text-sm text-[#806556]">
                  Have questions about your order?
                </p>

                <a
                  href="tel:+919876543210"
                  className="mt-4 inline-block text-sm font-bold text-[#8a4f29] hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* LOCATION */}
              <div className="rounded-2xl border border-[#ead9cb] bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
                  <MapPin size={24} />
                </div>

                <h2 className="mt-5 font-serif text-xl font-bold text-[#4a2c1b]">
                  Visit Us
                </h2>

                <p className="mt-2 text-sm text-[#806556]">
                  Kamboj Dairy & Bakery
                </p>

                <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
                  Dehradun, Uttarakhand
                </p>
              </div>

              {/* TIMINGS */}
              <div className="rounded-2xl border border-[#ead9cb] bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
                  <Clock size={24} />
                </div>

                <h2 className="mt-5 font-serif text-xl font-bold text-[#4a2c1b]">
                  Store Hours
                </h2>

                <p className="mt-2 text-sm text-[#806556]">
                  Monday - Sunday
                </p>

                <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
                  8:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ORDER SECTION */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-[#4a260f] px-6 py-10 text-center text-white sm:px-10">
              <ShoppingBag
                size={32}
                className="mx-auto text-[#efc08e]"
              />

              <h2 className="mt-4 font-serif text-3xl font-bold">
                Ready to place your order?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#d8c0ae]">
                Browse our fresh bakery and dairy products, add your
                favorites to the cart and complete your order online.
              </p>

              <Link
                to="/#products"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#4a260f] transition hover:bg-[#f7eee5]"
              >
                Browse Products
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Order;