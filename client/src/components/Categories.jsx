import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Fresh Cakes",
    subtitle: "Sweet celebrations",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Pastries",
    subtitle: "Freshly baked",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Fresh Milk",
    subtitle: "Pure & healthy",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Dairy Products",
    subtitle: "Fresh every day",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Cookies",
    subtitle: "Baked with love",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Special Combos",
    subtitle: "More to enjoy",
    image:
      "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=800&q=85",
  },
];

function Categories() {
  return (
    <section className="bg-[#fffaf5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-9 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
              Explore Our Menu
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl lg:text-5xl">
              Shop by Category
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#806556] sm:text-base">
              Fresh bakery delights and pure dairy products for every occasion.
            </p>
          </div>

          <Link
            to="/order"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#8a4f29]"
          >
            View All Products
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/order"
              className="group relative overflow-hidden rounded-xl bg-[#f0e4da]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {category.name}
                </h3>

                <p className="mt-1 text-[10px] text-white/80 sm:text-xs">
                  {category.subtitle}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#4a2c1b] opacity-0 transition duration-300 group-hover:opacity-100">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;