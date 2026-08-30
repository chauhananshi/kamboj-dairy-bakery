import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function CustomCake() {
  return (
    <section className="bg-[#fffaf5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#4a260f] lg:grid-cols-2">
          
          {/* Image */}
          <div className="relative min-h-[350px] lg:min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90"
              alt="Custom designed cake"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#4a260f]/40" />

            <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-4 py-3 shadow-lg sm:bottom-8 sm:left-8">
              <p className="text-xs font-bold text-[#4a260f]">
                Made Just For You
              </p>
              <p className="mt-1 text-[11px] text-[#806556]">
                Your idea • Our creativity
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div className="flex items-center gap-2 text-[#e7b178]">
              <Sparkles size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Custom Cake
              </span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Design Your
              <span className="block italic text-[#efc08e]">
                Dream Cake.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#e6cdb9] sm:text-base">
              Birthday, anniversary, wedding or any special celebration —
              share your idea with us and we will create a delicious cake
              specially made for your moment.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <span className="block text-lg">🎂</span>
                <p className="mt-2 font-semibold">Custom Design</p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <span className="block text-lg">✨</span>
                <p className="mt-2 font-semibold">Premium Quality</p>
              </div>
            </div>

            <Link
              to="/order"
              className="mt-8 flex w-fit items-center gap-2 rounded-md bg-[#efc08e] px-6 py-3.5 text-sm font-bold text-[#4a260f] transition hover:-translate-y-0.5 hover:bg-[#f6d0a6]"
            >
              Create Your Cake
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCake;