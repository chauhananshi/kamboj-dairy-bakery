import {
  BadgeCheck,
  Heart,
  Truck,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Fresh & Quality",
    text: "Made with carefully selected ingredients and fresh dairy products.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    text: "Every cake and bakery item is prepared with care.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Get your favorite products delivered to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    text: "Prepared and packed with proper hygiene and care.",
  },
];

function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#f7eee5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
              Why Choose Us
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#4a2c1b] sm:text-4xl lg:text-5xl">
              Freshness You Can
              <span className="block italic text-[#8a4f29]">
                Taste & Trust.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#806556] sm:text-base">
              At Kamboj Dairy & Bakery, we believe good food brings people
              together. From fresh dairy products to delicious cakes, every
              product is prepared with quality, freshness and care.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#fffaf5] p-5">
                <p className="font-serif text-3xl font-bold text-[#8a4f29]">
                  500+
                </p>
                <p className="mt-1 text-xs text-[#806556]">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-xl bg-[#fffaf5] p-5">
                <p className="font-serif text-3xl font-bold text-[#8a4f29]">
                  100%
                </p>
                <p className="mt-1 text-xs text-[#806556]">
                  Fresh Products
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[#e6d6c8] bg-[#fffaf5] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1dfd0] text-[#8a4f29]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#4a2c1b]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#806556]">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;