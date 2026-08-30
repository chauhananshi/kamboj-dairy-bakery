import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { useCart } from "../context/useCart";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
  } = useCart();

  const deliveryCharge = cartTotal >= 500 || cartTotal === 0 ? 0 : 40;
  const finalTotal = cartTotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-[#fffaf5]">

      {/* HEADER */}
      <div className="border-b border-[#ead9cb] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#69402a] transition hover:text-[#4a260f]"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#8a4f29]" />
            <span className="font-serif text-lg font-bold text-[#4a2c1b]">
              Your Cart
            </span>
          </div>
        </div>
      </div>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
              <ShoppingBag size={34} />
            </div>

            <h1 className="mt-6 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
              Your Cart is Empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#806556]">
              Looks like you haven't added anything to your cart yet.
              Explore our fresh cakes, dairy products and bakery favorites.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#4a260f] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#6a3b1f]"
            >
              Start Shopping
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      ) : (
        /* CART CONTENT */
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

          {/* TITLE */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
              Freshly Selected
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h1 className="font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
                  Shopping Cart
                </h1>

                <p className="mt-2 text-sm text-[#806556]">
                  {cartItems.length}{" "}
                  {cartItems.length === 1 ? "product" : "products"} in your cart
                </p>
              </div>

              <button
                onClick={clearCart}
                className="flex w-fit items-center gap-2 text-sm font-semibold text-[#9b5b3a] transition hover:text-red-600"
              >
                <Trash2 size={16} />
                Clear Cart
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* PRODUCTS */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#ead9cb] bg-white p-4 shadow-sm sm:p-5"
                >
                  <div className="flex gap-4">

                    {/* IMAGE */}
                    <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f3e2d3] sm:h-32 sm:w-28">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">

                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#a56236]">
                              {item.category}
                            </p>

                            <h2 className="mt-1 truncate text-sm font-bold text-[#4a2c1b] sm:text-base">
                              {item.name}
                            </h2>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="shrink-0 text-[#a98b79] transition hover:text-red-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <p className="mt-2 text-base font-bold text-[#4a260f]">
                          ₹{item.price}
                        </p>
                      </div>

                      {/* QUANTITY */}
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center overflow-hidden rounded-lg border border-[#decbbd]">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, "decrease")
                            }
                            className="flex h-9 w-9 items-center justify-center text-[#69402a] transition hover:bg-[#f7eee5]"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="flex h-9 min-w-9 items-center justify-center border-x border-[#decbbd] px-2 text-sm font-bold text-[#4a2c1b]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, "increase")
                            }
                            className="flex h-9 w-9 items-center justify-center text-[#69402a] transition hover:bg-[#f7eee5]"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        <p className="text-sm font-bold text-[#4a2c1b]">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-2xl bg-[#4a260f] p-6 text-white shadow-xl sm:p-7">

                <h2 className="font-serif text-2xl font-bold">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#d9c2b0]">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      ₹{cartTotal}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#d9c2b0]">
                      Delivery
                    </span>

                    <span className="font-semibold">
                      {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                    </span>
                  </div>

                  <div className="border-t border-white/15 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-[#efc08e]">
                        ₹{finalTotal}
                      </span>
                    </div>
                  </div>

                </div>

                {cartTotal < 500 && cartTotal > 0 && (
                  <div className="mt-5 rounded-xl bg-white/10 p-3 text-xs leading-5 text-[#f0d9c5]">
                    Add ₹{500 - cartTotal} more to get
                    <span className="font-bold text-[#efc08e]">
                      {" "}FREE delivery.
                    </span>
                  </div>
                )}

                <Link
                  to="/checkout"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#efc08e] px-5 py-3.5 text-sm font-bold text-[#4a260f] transition hover:bg-[#f6d0a6]"
                >
                  Proceed to Checkout
                  <ArrowRight size={17} />
                </Link>

                <p className="mt-4 text-center text-[11px] text-[#cdb4a2]">
                  Fresh products • Secure ordering • Fast delivery
                </p>

              </div>
            </div>

          </div>
        </main>
      )}
    </div>
  );
}

export default Cart;