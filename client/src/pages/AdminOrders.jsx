// // import { useEffect, useState } from "react";
// import { useEffect, useState, useCallback } from "react";
// import { Package, RefreshCw, ShoppingBag } from "lucide-react";

// function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//  const fetchOrders = useCallback(async () => {
//   try {
//     setLoading(true);
//     setErrorMessage("");

//     const response = await fetch(
//       "http://localhost:5000/api/orders"
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(
//         data.message || "Failed to fetch orders"
//       );
//     }

//     setOrders(data.orders || []);
//   } catch (error) {
//     console.error("Failed to fetch orders:", error);
//     setErrorMessage(
//       error.message || "Unable to load orders"
//     );
//   } finally {
//     setLoading(false);
//   }
// }, []);





// const updateOrderStatus = async (orderId, orderStatus) => {
//   try {
//     setErrorMessage("");

//     const response = await fetch(
//     //   `http://localhost:5000/api/orders/${orderId}/status`,
//        `http://localhost:5000/api/orders/${orderId}/status`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           orderStatus,
//         }),
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(
//         data.message || "Failed to update order status"
//       );
//     }

//     setOrders((currentOrders) =>
//       currentOrders.map((order) =>
//         order._id === orderId
//           ? data.order
//           : order
//       )
//     );
//   } catch (error) {
//     console.error("Failed to update order status:", error);

//     setErrorMessage(
//       error.message || "Unable to update order status"
//     );
//   }
// };








//   useEffect(() => {
//   const timer = setTimeout(() => {
//     fetchOrders();
//   }, 0);

//   return () => clearTimeout(timer);
// }, [fetchOrders]);;
//   return (
//     <div className="min-h-screen bg-[#fffaf5]">
//       {/* HEADER */}
//       <div className="border-b border-[#ead9cb] bg-white">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4a260f] text-white">
//               <Package size={21} />
//             </div>

//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a56236]">
//                 Kamboj Dairy & Bakery
//               </p>

//               <h1 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                 Orders Dashboard
//               </h1>
//             </div>
//           </div>

//           <button
//             onClick={fetchOrders}
//             className="flex items-center gap-2 rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-2.5 text-sm font-bold text-[#69402a] transition hover:bg-[#f7eee5]"
//           >
//             <RefreshCw size={16} />
//             Refresh
//           </button>
//         </div>
//       </div>

//       <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* TITLE */}
//         <div className="mb-8">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Order Management
//           </p>

//           <h2 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
//             Customer Orders
//           </h2>

//           <p className="mt-2 text-sm text-[#806556]">
//             View and manage all customer orders.
//           </p>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <div className="rounded-2xl border border-[#ead9cb] bg-white p-8 text-center">
//             <p className="text-sm font-semibold text-[#806556]">
//               Loading orders...
//             </p>
//           </div>
//         )}

//         {/* ERROR */}
//         {!loading && errorMessage && (
//           <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
//             <p className="text-sm font-semibold text-red-600">
//               {errorMessage}
//             </p>
//           </div>
//         )}

//         {/* EMPTY */}
//         {!loading &&
//           !errorMessage &&
//           orders.length === 0 && (
//             <div className="rounded-2xl border border-[#ead9cb] bg-white p-10 text-center">
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
//                 <ShoppingBag size={28} />
//               </div>

//               <h3 className="mt-5 text-xl font-bold text-[#4a2c1b]">
//                 No Orders Yet
//               </h3>

//               <p className="mt-2 text-sm text-[#806556]">
//                 Customer orders will appear here.
//               </p>
//             </div>
//           )}

//         {/* ORDERS */}
//         {!loading &&
//           !errorMessage &&
//           orders.length > 0 && (
//             <div className="grid gap-5">
//               {orders.map((order) => (
//                 <div
//                   key={order._id}
//                   className="rounded-2xl border border-[#ead9cb] bg-white p-5 shadow-sm sm:p-6"
//                 >
//                   <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    
//                     {/* CUSTOMER + ORDER */}
//                     <div className="flex-1">
//                       <div className="flex flex-wrap items-center gap-3">
//                         <h3 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                           {order.customer?.name}
//                         </h3>

//                         <span className="rounded-full bg-[#f7eee5] px-3 py-1 text-xs font-bold text-[#8a4f29]">
//                           {order.orderStatus}
//                         </span>
//                       </div>

//                       <p className="mt-2 text-sm text-[#806556]">
//                         Order ID: {order._id}
//                       </p>

//                       <div className="mt-5 grid gap-4 sm:grid-cols-2">
//                         <div>
//                           <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                             Phone
//                           </p>

//                           <p className="mt-1 text-sm font-semibold text-[#4a2c1b]">
//                             {order.customer?.phone}
//                           </p>
//                         </div>

//                         <div>
//                           <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                             Payment
//                           </p>

//                           <p className="mt-1 text-sm font-semibold text-[#4a2c1b]">
//                             {order.paymentMethod}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="mt-4">
//                         <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                           Delivery Address
//                         </p>

//                         <p className="mt-1 text-sm leading-6 text-[#4a2c1b]">
//                           {order.customer?.address}
//                         </p>
//                       </div>
//                     </div>

//                     {/* AMOUNT */}
//                     <div className="rounded-xl bg-[#4a260f] p-5 text-center text-white lg:min-w-[170px]">
//                       <p className="text-xs font-semibold uppercase tracking-wider text-[#d8c0ae]">
//                         Order Total
//                       </p>

//                       <p className="mt-2 text-3xl font-bold text-[#efc08e]">
//                         ₹{order.totalAmount}
//                       </p>

//                       <p className="mt-2 text-xs text-[#d8c0ae]">
//                         {new Date(
//                           order.createdAt
//                         ).toLocaleDateString("en-IN")}
//                       </p>
//                     </div>
//                   </div>

//                   {/* ITEMS */}
//                   <div className="mt-6 border-t border-[#ead9cb] pt-5">
//                     <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a56236]">
//                       Ordered Products
//                     </p>

//                     <div className="mt-4 space-y-3">
//                       {order.items?.map((item) => (
//                         <div
//                           key={item._id}
//                           className="flex items-center justify-between gap-4 rounded-xl bg-[#fffaf5] p-3"
//                         >
//                           <div className="flex items-center gap-3">
//                             {item.image ? (
//                               <img
//                                 src={item.image}
//                                 alt={item.productName}
//                                 className="h-12 w-12 rounded-lg object-cover"
//                               />
//                             ) : (
//                               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ead7c7]">
//                                 🥛
//                               </div>
//                             )}

//                             <div>
//                               <p className="text-sm font-bold text-[#4a2c1b]">
//                                 {item.productName}
//                               </p>

//                               <p className="mt-1 text-xs text-[#806556]">
//                                 ₹{item.price} × {item.quantity}
//                               </p>
//                             </div>
//                           </div>

//                           <p className="text-sm font-bold text-[#4a260f]">
//                             ₹{item.price * item.quantity}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//       </main>
//     </div>
//   );
// }

// export default AdminOrders;


































// import { useEffect, useState, useCallback } from "react";
// import { Package, RefreshCw, ShoppingBag } from "lucide-react";

// function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   const fetchOrders = useCallback(async () => {
//     try {
//       setLoading(true);
//       setErrorMessage("");

//       const response = await fetch(
//         "http://localhost:5000/api/orders"
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to fetch orders"
//         );
//       }

//       setOrders(data.orders || []);
//     } catch (error) {
//       console.error("Failed to fetch orders:", error);

//       setErrorMessage(
//         error.message || "Unable to load orders"
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   const updateOrderStatus = async (orderId, orderStatus) => {
//     try {
//       setErrorMessage("");

//       const response = await fetch(
//         `http://localhost:5000/api/orders/${orderId}/status`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             orderStatus,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to update order status"
//         );
//       }

//       setOrders((currentOrders) =>
//         currentOrders.map((order) =>
//           order._id === orderId
//             ? data.order
//             : order
//         )
//       );
//     } catch (error) {
//       console.error(
//         "Failed to update order status:",
//         error
//       );

//       setErrorMessage(
//         error.message || "Unable to update order status"
//       );
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchOrders();
//     }, 0);

//     return () => clearTimeout(timer);
//   }, [fetchOrders]);

//   return (
//     <div className="min-h-screen bg-[#fffaf5]">
//       {/* HEADER */}
//       <div className="border-b border-[#ead9cb] bg-white">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4a260f] text-white">
//               <Package size={21} />
//             </div>

//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a56236]">
//                 Kamboj Dairy & Bakery
//               </p>

//               <h1 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                 Orders Dashboard
//               </h1>
//             </div>
//           </div>

//           <button
//             onClick={fetchOrders}
//             className="flex items-center gap-2 rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-2.5 text-sm font-bold text-[#69402a] transition hover:bg-[#f7eee5]"
//           >
//             <RefreshCw size={16} />
//             Refresh
//           </button>
//         </div>
//       </div>

//       <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* TITLE */}
//         <div className="mb-8">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Order Management
//           </p>

//           <h2 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
//             Customer Orders
//           </h2>

//           <p className="mt-2 text-sm text-[#806556]">
//             View and manage all customer orders.
//           </p>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <div className="rounded-2xl border border-[#ead9cb] bg-white p-8 text-center">
//             <p className="text-sm font-semibold text-[#806556]">
//               Loading orders...
//             </p>
//           </div>
//         )}

//         {/* ERROR */}
//         {!loading && errorMessage && (
//           <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
//             <p className="text-sm font-semibold text-red-600">
//               {errorMessage}
//             </p>
//           </div>
//         )}

//         {/* EMPTY */}
//         {!loading &&
//           !errorMessage &&
//           orders.length === 0 && (
//             <div className="rounded-2xl border border-[#ead9cb] bg-white p-10 text-center">
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
//                 <ShoppingBag size={28} />
//               </div>

//               <h3 className="mt-5 text-xl font-bold text-[#4a2c1b]">
//                 No Orders Yet
//               </h3>

//               <p className="mt-2 text-sm text-[#806556]">
//                 Customer orders will appear here.
//               </p>
//             </div>
//           )}

//         {/* ORDERS */}
//         {!loading &&
//           !errorMessage &&
//           orders.length > 0 && (
//             <div className="grid gap-5">
//               {orders.map((order) => (
//                 <div
//                   key={order._id}
//                   className="rounded-2xl border border-[#ead9cb] bg-white p-5 shadow-sm sm:p-6"
//                 >
//                   <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
//                     {/* CUSTOMER + ORDER */}
//                     <div className="flex-1">
//                       <div className="flex flex-wrap items-center gap-3">
//                         <h3 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                           {order.customer?.name}
//                         </h3>

//                         <span className="rounded-full bg-[#f7eee5] px-3 py-1 text-xs font-bold text-[#8a4f29]">
//                           {order.orderStatus}
//                         </span>
//                       </div>

//                       <p className="mt-2 text-sm text-[#806556]">
//                         Order ID: {order._id}
//                       </p>

//                       <div className="mt-5 grid gap-4 sm:grid-cols-2">
//                         <div>
//                           <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                             Phone
//                           </p>

//                           <p className="mt-1 text-sm font-semibold text-[#4a2c1b]">
//                             {order.customer?.phone}
//                           </p>
//                         </div>

//                         <div>
//                           <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                             Payment
//                           </p>

//                           <p className="mt-1 text-sm font-semibold text-[#4a2c1b]">
//                             {order.paymentMethod}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="mt-4">
//                         <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                           Delivery Address
//                         </p>

//                         <p className="mt-1 text-sm leading-6 text-[#4a2c1b]">
//                           {order.customer?.address}
//                         </p>
//                       </div>
//                     </div>

//                     {/* AMOUNT */}
//                     <div className="rounded-xl bg-[#4a260f] p-5 text-center text-white lg:min-w-[170px]">
//                       <p className="text-xs font-semibold uppercase tracking-wider text-[#d8c0ae]">
//                         Order Total
//                       </p>

//                       <p className="mt-2 text-3xl font-bold text-[#efc08e]">
//                         ₹{order.totalAmount}
//                       </p>

//                       <p className="mt-2 text-xs text-[#d8c0ae]">
//                         {new Date(
//                           order.createdAt
//                         ).toLocaleDateString("en-IN")}
//                       </p>
//                     </div>
//                   </div>

//                   {/* STATUS UPDATE */}
//                   <div className="mt-5 border-t border-[#ead9cb] pt-5">
//                     <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                       Update Order Status
//                     </p>

//                     <select
//                       value={order.orderStatus}
//                       onChange={(e) =>
//                         updateOrderStatus(
//                           order._id,
//                           e.target.value
//                         )
//                       }
//                       className="rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm font-semibold text-[#4a2c1b] outline-none focus:border-[#8a4f29]"
//                     >
//                       <option value="Pending">
//                         Pending
//                       </option>

//                       <option value="Confirmed">
//                         Confirmed
//                       </option>

//                       <option value="Processing">
//                         Processing
//                       </option>

//                       <option value="Out for Delivery">
//                         Out for Delivery
//                       </option>

//                       <option value="Delivered">
//                         Delivered
//                       </option>

//                       <option value="Cancelled">
//                         Cancelled
//                       </option>
//                     </select>
//                   </div>

//                   {/* ITEMS */}
//                   <div className="mt-6 border-t border-[#ead9cb] pt-5">
//                     <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a56236]">
//                       Ordered Products
//                     </p>

//                     <div className="mt-4 space-y-3">
//                       {order.items?.map((item) => (
//                         <div
//                           key={item._id}
//                           className="flex items-center justify-between gap-4 rounded-xl bg-[#fffaf5] p-3"
//                         >
//                           <div className="flex items-center gap-3">
//                             {item.image ? (
//                               <img
//                                 src={item.image}
//                                 alt={item.productName}
//                                 className="h-12 w-12 rounded-lg object-cover"
//                               />
//                             ) : (
//                               <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ead7c7]">
//                                 🥛
//                               </div>
//                             )}

//                             <div>
//                               <p className="text-sm font-bold text-[#4a2c1b]">
//                                 {item.productName}
//                               </p>

//                               <p className="mt-1 text-xs text-[#806556]">
//                                 ₹{item.price} × {item.quantity}
//                               </p>
//                             </div>
//                           </div>

//                           <p className="text-sm font-bold text-[#4a260f]">
//                             ₹{item.price * item.quantity}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//       </main>
//     </div>
//   );
// }

// export default AdminOrders;

























import { useEffect, useState, useCallback } from "react";
import { Package, RefreshCw, ShoppingBag } from "lucide-react";

// const API_URL = "http://localhost:5000/api/orders";
const API_URL = `${import.meta.env.VITE_API_URL}/api/orders`;
// fetch(`${import.meta.env.VITE_API_URL}/api/orders`)

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Admin token not found. Please login again.");
      }

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch orders"
        );
      }

      setOrders(data.orders || []);
    } catch (error) {
      console.error("Failed to fetch orders:", error);

      setErrorMessage(
        error.message || "Unable to load orders"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const updateOrderStatus = async (orderId, orderStatus) => {
    try {
      setErrorMessage("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        throw new Error("Admin token not found. Please login again.");
      }

      const response = await fetch(
        `${API_URL}/${orderId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            orderStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update order status"
        );
      }

      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order._id === orderId ? data.order : order
        )
      );
    } catch (error) {
      console.error(
        "Failed to update order status:",
        error
      );

      setErrorMessage(
        error.message || "Unable to update order status"
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchOrders();
    }, 0);

    return () => clearTimeout(timer);
  }, [fetchOrders]);

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      {/* HEADER */}
      <div className="border-b border-[#ead9cb] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4a260f] text-white">
              <Package size={21} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a56236]">
                Kamboj Dairy & Bakery
              </p>

              <h1 className="font-serif text-xl font-bold text-[#4a2c1b]">
                Orders Dashboard
              </h1>
            </div>
          </div>

          <button
            onClick={fetchOrders}
            className="flex items-center gap-2 rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-2.5 text-sm font-bold text-[#69402a] transition hover:bg-[#f7eee5]"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            Order Management
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
            Customer Orders
          </h2>

          <p className="mt-2 text-sm text-[#806556]">
            View and manage all customer orders.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="rounded-2xl border border-[#ead9cb] bg-white p-8 text-center">
            <p className="text-sm font-semibold text-[#806556]">
              Loading orders...
            </p>
          </div>
        )}

        {/* ERROR */}
        {!loading && errorMessage && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
            <p className="text-sm font-semibold text-red-600">
              {errorMessage}
            </p>
          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          !errorMessage &&
          orders.length === 0 && (
            <div className="rounded-2xl border border-[#ead9cb] bg-white p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
                <ShoppingBag size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#4a2c1b]">
                No Orders Yet
              </h3>

              <p className="mt-2 text-sm text-[#806556]">
                Customer orders will appear here.
              </p>
            </div>
          )}

        {/* ORDERS */}
        {!loading &&
          !errorMessage &&
          orders.length > 0 && (
            <div className="grid gap-5">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="rounded-2xl border border-[#ead9cb] bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    {/* CUSTOMER + ORDER */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-serif text-xl font-bold text-[#4a2c1b]">
                          {order.customer?.name}
                        </h3>

                        <span className="rounded-full bg-[#f7eee5] px-3 py-1 text-xs font-bold text-[#8a4f29]">
                          {order.orderStatus}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-[#806556]">
                        Order ID: {order._id}
                      </p>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
                            Phone
                          </p>

                          <p className="mt-1 text-sm font-semibold text-[#4a2c1b]">
                            {order.customer?.phone}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
                            Payment
                          </p>

                          <p className="mt-1 text-sm font-semibold text-[#4a2c1b]">
                            {order.paymentMethod}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#a56236]">
                          Delivery Address
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#4a2c1b]">
                          {order.customer?.address}
                        </p>
                      </div>
                    </div>

                    {/* AMOUNT */}
                    <div className="rounded-xl bg-[#4a260f] p-5 text-center text-white lg:min-w-[170px]">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#d8c0ae]">
                        Order Total
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#efc08e]">
                        ₹{order.totalAmount}
                      </p>

                      <p className="mt-2 text-xs text-[#d8c0ae]">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* STATUS UPDATE */}
                  <div className="mt-5 border-t border-[#ead9cb] pt-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#a56236]">
                      Update Order Status
                    </p>

                    <select
                      value={order.orderStatus}
                      onChange={(e) =>
                        updateOrderStatus(
                          order._id,
                          e.target.value
                        )
                      }
                      className="rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm font-semibold text-[#4a2c1b] outline-none focus:border-[#8a4f29]"
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Preparing">
                        Preparing
                      </option>

                      <option value="Out for Delivery">
                        Out for Delivery
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>
                    </select>
                  </div>

                  {/* ITEMS */}
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
                          <div className="flex items-center gap-3">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.productName}
                                className="h-12 w-12 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ead7c7]">
                                🥛
                              </div>
                            )}

                            <div>
                              <p className="text-sm font-bold text-[#4a2c1b]">
                                {item.productName}
                              </p>

                              <p className="mt-1 text-xs text-[#806556]">
                                ₹{item.price} × {item.quantity}
                              </p>
                            </div>
                          </div>

                          <p className="text-sm font-bold text-[#4a260f]">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </main>
    </div>
  );
}

export default AdminOrders;