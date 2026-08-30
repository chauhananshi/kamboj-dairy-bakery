import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import CustomCake from "../components/CustomCake";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#fffaf5]">
        {/* HERO */}
        <section className="bg-[#f7eee5]">
          <div className="mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-2">
            
            {/* LEFT CONTENT */}
            <div className="flex min-h-[480px] flex-col justify-center px-6 py-14 sm:px-10 lg:min-h-[500px] lg:px-14">
              <h1 className="font-serif text-4xl font-bold leading-tight text-[#4a2c1b] sm:text-5xl lg:text-6xl">
                Freshly Baked,
                <span className="mt-1 block font-serif italic">
                  Made with Love.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#684d3c] sm:text-base">
                Delicious cakes, pastries and 100% fresh dairy products
                delivered fresh to your doorstep.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/order"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#4a260f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#6a3b1f]"
                >
                  Order Now
                  <ShoppingBag size={17} />
                </Link>

                <a
                  href="#products"
                  className="flex items-center justify-center gap-2 rounded-md border border-[#bda998] px-7 py-3.5 text-sm font-semibold text-[#4a260f] transition hover:bg-[#f0dfd0]"
                >
                  Explore Menu
                  <ArrowRight size={17} />
                </a>
              </div>

              {/* Rating */}
              <div className="mt-9 flex items-center gap-3">
                <div className="flex items-center gap-1 text-[#c2773d]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-[#6a4c39]">
                  <span className="font-bold text-[#4a2c1b]">4.9</span>
                  <span className="mx-1">•</span>
                  Loved by 500+ customers
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[460px] lg:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=90"
                alt="Chocolate cake with dairy products"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#3b1d0a]/15 to-transparent"></div>

              {/* Rating Bubble */}
              <div className="absolute right-6 top-6 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#fffaf5]/95 shadow-xl sm:right-10 sm:top-12 sm:h-24 sm:w-24">
                <div className="flex items-center gap-1 text-[#c2773d]">
                  <Star size={17} fill="currentColor" />
                  <span className="text-lg font-bold text-[#4a2c1b]">
                    4.9
                  </span>
                </div>
                <span className="mt-1 text-[10px] text-[#725440]">
                  500+ Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE STRIP */}
        <section className="border-y border-[#eadfd4] bg-[#fffaf5]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {[
              ["✦", "100% Fresh", "Premium Quality"],
              ["🚚", "Fast Delivery", "On Time"],
              ["♢", "Hygienic & Safe", "Carefully Packed"],
              ["▣", "Secure Payment", "Safe & Easy"],
            ].map(([icon, title, subtitle]) => (
              <div
                key={title}
                className="flex items-center gap-3 border-b border-[#eadfd4] px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:px-7"
              >
                <span className="text-xl text-[#9a572f]">{icon}</span>

                <div>
                  <p className="text-xs font-bold text-[#4a2c1b]">
                    {title}
                  </p>
                  <p className="mt-1 text-[10px] text-[#806556]">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <Categories />

        {/* PRODUCTS */}
        <section id="products">
          <BestSellers />
        </section>


        <CustomCake />
        <WhyChooseUs />
        <Footer />
      </main>
    </>
  );
}

export default Home;