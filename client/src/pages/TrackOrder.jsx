import { useState } from "react";
import { Search, Package, Truck, CheckCircle2, Clock } from "lucide-react";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const trackOrder = async (e) => {
    e.preventDefault();

    if (!orderId.trim() || !phone.trim()) {
      setErrorMessage("Please enter Order ID and phone number");
      setOrder(null);
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");
      setOrder(null);

      // const response = await fetch(
      //   `http://localhost:5000/api/orders/track/${orderId.trim()}/${phone.trim()}`
      // );


      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/orders/track/${orderId.trim()}/${phone.trim()}`
);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Order not found");
      }

      setOrder(data.order);
    } catch (error) {
      setErrorMessage(error.message || "Unable to track order");
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = [
    "Pending",
    "Confirmed",
    "Preparing",
    "Out for Delivery",
    "Delivered",
  ];

  const currentStep = order
    ? statusSteps.indexOf(order.orderStatus)
    : -1;

  const getStatusIcon = (status) => {
    if (status === "Pending") return <Clock size={18} />;
    if (status === "Out for Delivery") return <Truck size={18} />;
    if (status === "Delivered") return <CheckCircle2 size={18} />;
    return <Package size={18} />;
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] py-12 px-4">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4a260f] text-white">
            <Package size={30} />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            Kamboj Dairy & Bakery
          </p>

          <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
            Track Your Order
          </h1>

          <p className="mt-3 text-sm text-[#806556]">
            Enter your Order ID and phone number to check your order status.
          </p>
        </div>

        {/* TRACK FORM */}
        <form
          onSubmit={trackOrder}
          className="mt-10 rounded-2xl border border-[#ead9cb] bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-bold text-[#4a2c1b]">
                Order ID
              </label>

              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your Order ID"
                className="mt-2 w-full rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none focus:border-[#8a4f29]"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#4a2c1b]">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none focus:border-[#8a4f29]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4a260f] px-5 py-3.5 font-bold text-white transition hover:bg-[#663516] disabled:opacity-60"
          >
            <Search size={19} />

            {loading ? "Tracking Order..." : "Track Order"}
          </button>

          {errorMessage && (
            <p className="mt-4 text-center text-sm font-semibold text-red-600">
              {errorMessage}
            </p>
          )}
        </form>

        {/* ORDER RESULT */}
        {order && (
          <div className="mt-8 rounded-2xl border border-[#ead9cb] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 border-b border-[#ead9cb] pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
                  Order ID
                </p>

                <p className="mt-2 break-all text-sm font-semibold text-[#4a2c1b]">
                  {order._id}
                </p>
              </div>

              <div className="rounded-xl bg-[#f7eee5] px-5 py-3">
                <p className="text-xs font-bold text-[#8a4f29]">
                  Current Status
                </p>

                <p className="mt-1 font-bold text-[#4a260f]">
                  {order.orderStatus}
                </p>
              </div>
            </div>

            {/* STATUS TRACKER */}
            <div className="mt-8">
              <h2 className="text-lg font-bold text-[#4a2c1b]">
                Order Progress
              </h2>

              <div className="mt-6 space-y-4">
                {statusSteps.map((status, index) => {
                  const completed = index <= currentStep;

                  return (
                    <div
                      key={status}
                      className={`flex items-center gap-4 ${
                        completed
                          ? "text-[#4a260f]"
                          : "text-[#b8a99f]"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                          completed
                            ? "bg-[#4a260f] text-white"
                            : "bg-[#f0e8e2]"
                        }`}
                      >
                        {getStatusIcon(status)}
                      </div>

                      <p className="font-semibold">{status}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="mt-8 border-t border-[#ead9cb] pt-6">
              <h2 className="text-lg font-bold text-[#4a2c1b]">
                Your Products
              </h2>

              <div className="mt-4 space-y-3">
                {order.items?.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between rounded-xl bg-[#fffaf5] p-4"
                  >
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.productName}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                      )}

                      <div>
                        <p className="font-semibold text-[#4a2c1b]">
                          {item.productName}
                        </p>

                        <p className="text-sm text-[#806556]">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="font-bold text-[#4a260f]">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-between border-t border-[#ead9cb] pt-5">
                <span className="font-bold text-[#4a2c1b]">
                  Total Amount
                </span>

                <span className="text-xl font-bold text-[#4a260f]">
                  ₹{order.totalAmount}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackOrder;