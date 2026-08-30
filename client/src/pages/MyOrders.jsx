// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Package,
//   Search,
//   Phone,
//   MapPin,
//   CalendarDays,
//   ShoppingBag,
// } from "lucide-react";

// function MyOrders() {
//   const [orderId, setOrderId] = useState("");
//   const [phone, setPhone] = useState("");
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     if (!orderId.trim() || !phone.trim()) {
//       setErrorMessage("Please enter your Order ID and mobile number.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setErrorMessage("");
//       setOrder(null);

//       // const response = await fetch(
//       //   `http://localhost:5000/api/orders/${orderId.trim()}`
//       // );




//       const response = await fetch(
//       `http://localhost:5000/api/orders/track/${orderId.trim()}/${phone.trim()}`
//       );

//      const data = await response.json();
//       // const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Order not found"
//         );
//       }

//       // if (data.order.customer.phone !== phone.trim()) {
//       //   throw new Error(
//       //     "This mobile number does not match the order."
//       //   );
//       // }

//       setOrder(data.order);
//     } catch (error) {
//       setErrorMessage(
//         error.message || "Unable to find your order."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fffaf5]">
//       {/* HEADER */}
//       <div className="border-b border-[#ead9cb] bg-white">
//         <div className="mx-auto flex max-w-7xl items-center px-4 py-5 sm:px-6 lg:px-8">
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-sm font-semibold text-[#69402a] transition hover:text-[#4a260f]"
//           >
//             <ArrowLeft size={18} />
//             Back to Home
//           </Link>
//         </div>
//       </div>

//       <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
//         {/* TITLE */}
//         <div className="text-center">
//           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
//             <Package size={30} />
//           </div>

//           <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Order Tracking
//           </p>

//           <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
//             Track Your Order
//           </h1>

//           <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#806556]">
//             Enter your order ID and mobile number to view your order details.
//           </p>
//         </div>

//         {/* SEARCH FORM */}
//         <form
//           onSubmit={handleSearch}
//           className="mt-8 rounded-2xl border border-[#ead9cb] bg-white p-5 shadow-sm sm:p-7"
//         >
//           <div className="grid gap-5 sm:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                 Order ID
//               </label>

//               <input
//                 type="text"
//                 value={orderId}
//                 onChange={(e) => setOrderId(e.target.value)}
//                 placeholder="Enter Order ID"
//                 required
//                 className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                 Mobile Number
//               </label>

//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="10 digit mobile number"
//                 pattern="[6-9][0-9]{9}"
//                 maxLength="10"
//                 required
//                 className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4a260f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#6a3b1f] disabled:cursor-not-allowed disabled:opacity-70"
//           >
//             <Search size={18} />
//             {loading ? "Searching..." : "Track Order"}
//           </button>
//         </form>

//         {/* ERROR */}
//         {errorMessage && (
//           <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center">
//             <p className="text-sm font-semibold text-red-600">
//               {errorMessage}
//             </p>
//           </div>
//         )}

//         {/* ORDER DETAILS */}
//         {order && (
//           <div className="mt-8 space-y-6">
//             <div className="rounded-2xl border border-[#ead9cb] bg-white p-6 shadow-sm">
//               <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                     Order Status
//                   </p>

//                   <h2 className="mt-2 font-serif text-2xl font-bold text-[#4a2c1b]">
//                     {order.orderStatus}
//                   </h2>
//                 </div>

//                 <div className="rounded-xl bg-[#4a260f] px-5 py-4 text-white">
//                   <p className="text-xs text-[#d8c0ae]">
//                     Total Amount
//                   </p>

//                   <p className="mt-1 text-2xl font-bold text-[#efc08e]">
//                     ₹{order.totalAmount}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 grid gap-4 border-t border-[#ead9cb] pt-5 sm:grid-cols-3">
//                 <div>
//                   <div className="flex items-center gap-2 text-[#a56236]">
//                     <Phone size={16} />
//                     <span className="text-xs font-bold uppercase">
//                       Phone
//                     </span>
//                   </div>

//                   <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
//                     {order.customer?.phone}
//                   </p>
//                 </div>

//                 <div>
//                   <div className="flex items-center gap-2 text-[#a56236]">
//                     <CalendarDays size={16} />
//                     <span className="text-xs font-bold uppercase">
//                       Order Date
//                     </span>
//                   </div>

//                   <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
//                     {new Date(
//                       order.createdAt
//                     ).toLocaleDateString("en-IN")}
//                   </p>
//                 </div>

//                 <div>
//                   <div className="flex items-center gap-2 text-[#a56236]">
//                     <MapPin size={16} />
//                     <span className="text-xs font-bold uppercase">
//                       Payment
//                     </span>
//                   </div>

//                   <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
//                     {order.paymentMethod}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* PRODUCTS */}
//             <div className="rounded-2xl border border-[#ead9cb] bg-white p-6 shadow-sm">
//               <div className="flex items-center gap-2">
//                 <ShoppingBag size={20} className="text-[#8a4f29]" />

//                 <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                   Your Products
//                 </h2>
//               </div>

//               <div className="mt-5 space-y-3">
//                 {order.items?.map((item) => (
//                   <div
//                     key={item._id}
//                     className="flex items-center justify-between gap-4 rounded-xl bg-[#fffaf5] p-3"
//                   >
//                     <div className="flex items-center gap-3">
//                       {item.image && (
//                         <img
//                           src={item.image}
//                           alt={item.productName}
//                           className="h-14 w-14 rounded-lg object-cover"
//                         />
//                       )}

//                       <div>
//                         <p className="text-sm font-bold text-[#4a2c1b]">
//                           {item.productName}
//                         </p>

//                         <p className="mt-1 text-xs text-[#806556]">
//                           ₹{item.price} × {item.quantity}
//                         </p>
//                       </div>
//                     </div>

//                     <p className="text-sm font-bold text-[#4a260f]">
//                       ₹{item.price * item.quantity}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default MyOrders;






















import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  Phone,
  MapPin,
  CalendarDays,
  ShoppingBag,
} from "lucide-react";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMyOrders = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const customerToken = localStorage.getItem("customerToken");

      if (!customerToken) {
        throw new Error("Please login to view your orders.");
      }

      const response = await fetch(
        // "http://localhost:5000/api/orders/my-orders",
        `${import.meta.env.VITE_API_URL}/api/orders/my-orders`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${customerToken}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch your orders"
        );
      }

      setOrders(data.orders || []);
    } catch (error) {
      console.error("Failed to fetch my orders:", error);

      setErrorMessage(
        error.message || "Unable to load your orders."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMyOrders();
  }, [fetchMyOrders]);

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      {/* HEADER */}
      <div className="border-b border-[#ead9cb] bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-[#69402a] transition hover:text-[#4a260f]"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
            <Package size={30} />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            My Account
          </p>

          <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
            My Orders
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#806556]">
            View your recent orders and track their status.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="mt-8 rounded-2xl border border-[#ead9cb] bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-semibold text-[#806556]">
              Loading your orders...
            </p>
          </div>
        )}

        {/* ERROR */}
        {!loading && errorMessage && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-sm font-semibold text-red-600">
              {errorMessage}
            </p>

            {!localStorage.getItem("customerToken") && (
              <Link
                to="/login"
                className="mt-4 inline-block rounded-xl bg-[#4a260f] px-5 py-3 text-sm font-bold text-white"
              >
                Login
              </Link>
            )}
          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          !errorMessage &&
          orders.length === 0 && (
            <div className="mt-8 rounded-2xl border border-[#ead9cb] bg-white p-10 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
                <ShoppingBag size={28} />
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#4a2c1b]">
                No Orders Yet
              </h2>

              <p className="mt-2 text-sm text-[#806556]">
                Your orders will appear here after you place an order.
              </p>

              <Link
                to="/"
                className="mt-5 inline-block rounded-xl bg-[#4a260f] px-5 py-3 text-sm font-bold text-white"
              >
                Start Shopping
              </Link>
            </div>
          )}

        {/* ORDERS */}
        {!loading &&
          !errorMessage &&
          orders.length > 0 && (
            <div className="mt-8 space-y-6">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="rounded-2xl border border-[#ead9cb] bg-white p-6 shadow-sm"
                >
                  {/* ORDER HEADER */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
                        Order ID
                      </p>

                      <p className="mt-1 break-all text-sm font-bold text-[#4a2c1b]">
                        #{order._id}
                      </p>
                    </div>

                    <div className="rounded-full bg-[#f7eee5] px-4 py-2 text-sm font-bold text-[#8a4f29]">
                      {order.orderStatus}
                    </div>
                  </div>

                  {/* ORDER INFO */}
                  <div className="mt-6 grid gap-5 border-t border-[#ead9cb] pt-5 sm:grid-cols-3">
                    <div>
                      <div className="flex items-center gap-2 text-[#a56236]">
                        <Phone size={16} />

                        <span className="text-xs font-bold uppercase">
                          Phone
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
                        {order.customer?.phone}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#a56236]">
                        <CalendarDays size={16} />

                        <span className="text-xs font-bold uppercase">
                          Order Date
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString("en-IN")}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#a56236]">
                        <ShoppingBag size={16} />

                        <span className="text-xs font-bold uppercase">
                          Payment
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-[#4a2c1b]">
                        {order.paymentMethod}
                      </p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="mt-5">
                    <div className="flex items-center gap-2 text-[#a56236]">
                      <MapPin size={16} />

                      <span className="text-xs font-bold uppercase tracking-wider">
                        Delivery Address
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#4a2c1b]">
                      {order.customer?.address}
                    </p>
                  </div>

                  {/* PRODUCTS */}
                  <div className="mt-6 border-t border-[#ead9cb] pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a56236]">
                      Ordered Products
                    </p>

                    <div className="mt-4 space-y-3">
                      {order.items?.map((item) => (
                        <div
                          key={item._id}
                          className="flex items-center justify-between gap-4 rounded-xl bg-[#fffaf5] p-3"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.productName}
                                className="h-14 w-14 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#ead7c7] text-2xl">
                                🥛
                              </div>
                            )}

                            <div className="min-w-0">
                              <p className="truncate text-sm font-bold text-[#4a2c1b]">
                                {item.productName}
                              </p>

                              <p className="mt-1 text-xs text-[#806556]">
                                ₹{item.price} × {item.quantity}
                              </p>
                            </div>
                          </div>

                          <p className="shrink-0 text-sm font-bold text-[#4a260f]">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TOTAL */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#ead9cb] pt-5">
                    <span className="text-sm font-semibold text-[#806556]">
                      Order Total
                    </span>

                    <span className="text-2xl font-bold text-[#4a260f]">
                      ₹{order.totalAmount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
      </main>
    </div>
  );
}

export default MyOrders;