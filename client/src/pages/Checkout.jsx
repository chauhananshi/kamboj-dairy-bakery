// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   Phone,
//   User,
//   CalendarDays,
//   CreditCard,
//   ShoppingBag,
// } from "lucide-react";
// import { useCart } from "../context/useCart";

// function Checkout() {
//   const navigate = useNavigate();

//   const { cartItems, cartTotal, clearCart } = useCart();

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//     deliveryDate: "",
//     paymentMethod: "Cash on Delivery",
//   });

//   const [isPlaced, setIsPlaced] = useState(false);
//   const [orderId, setOrderId] = useState("");
//   // const [orderId, setOrderId] = useState("");
//   const [placedTotal, setPlacedTotal] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const deliveryCharge =
//     cartTotal === 0 ? 0 : cartTotal >= 500 ? 0 : 40;

//   const finalTotal = cartTotal + deliveryCharge;

//   const today = new Date().toISOString().split("T")[0];

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (cartItems.length === 0) {
//   //     return;
//   //   }

//   //   const newOrderId = `KDB${Date.now().toString().slice(-6)}`;

//   //   setOrderId(newOrderId);
//   //   setIsPlaced(true);
//   //   clearCart();
//   // };




// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (cartItems.length === 0) {
//     return;
//   }

//   setIsSubmitting(true);
//   setErrorMessage("");

//   try {
//     const orderData = {
//       customer: {
//         name: formData.name,
//         phone: formData.phone,
//         address: `${formData.address}, ${formData.city} - ${formData.pincode}`,
//       },

//       items: cartItems.map((item) => ({
//         productName: item.name,
//         price: Number(item.price),
//         quantity: Number(item.quantity),
//         image: item.image || "",
//       })),

//       totalAmount: Number(finalTotal),
//       paymentMethod: formData.paymentMethod,
//     };

//     const response = await fetch(
//       "http://localhost:5000/api/orders",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(
//         data.message || "Failed to place order"
//       );
//     }

//     setOrderId(data.order._id);
//     setPlacedTotal(finalTotal);
//     setIsPlaced(true);
    
//     clearCart();
//   } catch (error) {
//     console.error("Order failed:", error);
//     setErrorMessage(
//       error.message || "Something went wrong. Please try again."
//     );
//   } finally {
//     setIsSubmitting(false);
//   }
// };











//   if (isPlaced) {
//     return (
//       <div className="min-h-screen bg-[#fffaf5]">
//         <div className="flex min-h-screen items-center justify-center px-4 py-12">
//           <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">
//             <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf5e7] text-[#4f7d42]">
//               <CheckCircle2 size={42} />
//             </div>

//             <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//               Order Confirmed
//             </p>

//             <h1 className="mt-3 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
//               Thank You, {formData.name}!
//             </h1>

//             <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#806556]">
//               Your order has been placed successfully. We will contact you
//               shortly to confirm your delivery details.
//             </p>

//             <div className="mt-7 rounded-2xl bg-[#f7eee5] p-5 text-left">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-[#806556]">
//                   Order ID
//                 </span>

//                 <span className="font-bold text-[#4a260f]">
//                   #{orderId}
//                 </span>
//               </div>

//               <div className="mt-3 flex items-center justify-between">
//                 <span className="text-sm text-[#806556]">
//                   Delivery Date
//                 </span>

//                 <span className="font-semibold text-[#4a2c1b]">
//                   {formData.deliveryDate}
//                 </span>
//               </div>

//               <div className="mt-3 flex items-center justify-between border-t border-[#dfcfc0] pt-3">
//                 <span className="font-semibold text-[#4a2c1b]">
//                   Total Paid
//                 </span>

//                 <span className="text-lg font-bold text-[#8a4f29]">
//                   {/* ₹{finalTotal} */}
//                    ₹{placedTotal}
//                 </span>
//               </div>
//             </div>

//             <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
//               <Link
//                 to="/"
//                 className="rounded-xl border border-[#d9c4b3] px-6 py-3 text-sm font-bold text-[#69402a] transition hover:bg-[#f7eee5]"
//               >
//                 Back to Home
//               </Link>

//               <button
//                 onClick={() => navigate("/")}
//                 className="rounded-xl bg-[#4a260f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6a3b1f]"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4">
//         <div className="text-center">
//           <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
//             <ShoppingBag size={34} />
//           </div>

//           <h1 className="mt-6 font-serif text-3xl font-bold text-[#4a2c1b]">
//             Your Cart is Empty
//           </h1>

//           <p className="mt-3 text-sm text-[#806556]">
//             Add some delicious products before checking out.
//           </p>

//           <Link
//             to="/"
//             className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#4a260f] px-6 py-3.5 text-sm font-bold text-white"
//           >
//             Start Shopping
//             <ArrowRight size={17} />
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#fffaf5]">
//       {/* TOP BAR */}
//       <div className="border-b border-[#ead9cb] bg-white">
//         <div className="mx-auto flex max-w-7xl items-center px-4 py-5 sm:px-6 lg:px-8">
//           <Link
//             to="/cart"
//             className="flex items-center gap-2 text-sm font-semibold text-[#69402a] transition hover:text-[#4a260f]"
//           >
//             <ArrowLeft size={18} />
//             Back to Cart
//           </Link>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
//         <div className="mb-8">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Almost There
//           </p>

//           <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
//             Complete Your Order
//           </h1>

//           <p className="mt-2 text-sm text-[#806556]">
//             Enter your delivery details and place your order.
//           </p>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
//           {/* FORM */}
//           <form
//             onSubmit={handleSubmit}
//             className="rounded-2xl border border-[#ead9cb] bg-white p-5 shadow-sm sm:p-7"
//           >
//             {/* PERSONAL DETAILS */}
//             <div>
//               <div className="flex items-center gap-2">
//                 <User size={19} className="text-[#8a4f29]" />

//                 <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                   Personal Details
//                 </h2>
//               </div>

//               <div className="mt-5 grid gap-5 sm:grid-cols-2">
//                 {/* NAME */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                     Full Name
//                   </label>

//                   <div className="relative">
//                     <User
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a98b79]"
//                     />

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Enter your name"
//                       required
//                       className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] py-3 pl-10 pr-4 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//                     />
//                   </div>
//                 </div>

//                 {/* PHONE */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                     Mobile Number
//                   </label>

//                   <div className="relative">
//                     <Phone
//                       size={17}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a98b79]"
//                     />

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="10 digit mobile number"
//                       pattern="[6-9][0-9]{9}"
//                       maxLength="10"
//                       required
//                       className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] py-3 pl-10 pr-4 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* DELIVERY ADDRESS */}
//             <div className="mt-9 border-t border-[#ead9cb] pt-8">
//               <div className="flex items-center gap-2">
//                 <MapPin size={19} className="text-[#8a4f29]" />

//                 <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                   Delivery Address
//                 </h2>
//               </div>

//               <div className="mt-5 space-y-5">
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                     Full Address
//                   </label>

//                   <textarea
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     placeholder="House no., street, area..."
//                     rows={4}
//                     required
//                     className="w-full resize-none rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//                   />
//                 </div>

//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                       City
//                     </label>

//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       placeholder="Enter city"
//                       required
//                       className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                       Pincode
//                     </label>

//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       placeholder="6 digit pincode"
//                       pattern="[0-9]{6}"
//                       maxLength="6"
//                       required
//                       className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* DELIVERY DATE */}
//             <div className="mt-9 border-t border-[#ead9cb] pt-8">
//               <div className="flex items-center gap-2">
//                 <CalendarDays size={19} className="text-[#8a4f29]" />

//                 <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                   Delivery Date
//                 </h2>
//               </div>

//               <div className="mt-5 max-w-sm">
//                 <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
//                   Select Date
//                 </label>

//                 <input
//                   type="date"
//                   name="deliveryDate"
//                   value={formData.deliveryDate}
//                   onChange={handleChange}
//                   min={today}
//                   required
//                   className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//                 />
//               </div>
//             </div>

//             {/* PAYMENT */}
//             <div className="mt-9 border-t border-[#ead9cb] pt-8">
//               <div className="flex items-center gap-2">
//                 <CreditCard size={19} className="text-[#8a4f29]" />

//                 <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
//                   Payment Method
//                 </h2>
//               </div>

//               <div className="mt-5 grid gap-3 sm:grid-cols-2">
//                 <label
//                   className={`cursor-pointer rounded-xl border p-4 transition ${
//                     formData.paymentMethod === "Cash on Delivery"
//                       ? "border-[#8a4f29] bg-[#f7eee5]"
//                       : "border-[#ddcbbd] bg-white hover:bg-[#fffaf5]"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Cash on Delivery"
//                     checked={formData.paymentMethod === "Cash on Delivery"}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />

//                   <div className="flex items-center gap-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ead7c7] text-[#8a4f29]">
//                       💵
//                     </div>

//                     <div>
//                       <p className="text-sm font-bold text-[#4a2c1b]">
//                         Cash on Delivery
//                       </p>

//                       <p className="mt-1 text-xs text-[#806556]">
//                         Pay when your order arrives
//                       </p>
//                     </div>
//                   </div>
//                 </label>

//                 <label
//                   className={`cursor-pointer rounded-xl border p-4 transition ${
//                     formData.paymentMethod === "Online Payment"
//                       ? "border-[#8a4f29] bg-[#f7eee5]"
//                       : "border-[#ddcbbd] bg-white hover:bg-[#fffaf5]"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Online Payment"
//                     checked={formData.paymentMethod === "Online Payment"}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />

//                   <div className="flex items-center gap-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ead7c7] text-[#8a4f29]">
//                       💳
//                     </div>

//                     <div>
//                       <p className="text-sm font-bold text-[#4a2c1b]">
//                         Online Payment
//                       </p>

//                       <p className="mt-1 text-xs text-[#806556]">
//                         Online payment integration later
//                       </p>
//                     </div>
//                   </div>
//                 </label>
//               </div>
//             </div>

//             {/* SUBMIT */}
//             {/* <button
//               type="submit"
//               className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4a260f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#6a3b1f]"
//             >
//               Place Order
//               <ArrowRight size={18} />
//             </button>  */}







//                <button
//   type="submit"
//   disabled={isSubmitting}
//   className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4a260f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#6a3b1f] disabled:cursor-not-allowed disabled:opacity-70"
// >
//   {isSubmitting ? "Placing Order..." : "Place Order"}
//   <ArrowRight size={18} />
// </button>



// {errorMessage && (
//   <p className="mt-3 text-center text-sm font-semibold text-red-600">
//     {errorMessage}
//   </p>
// )}













//           </form>

//           {/* ORDER SUMMARY */}
//           <aside className="lg:sticky lg:top-6 lg:self-start">
//             <div className="rounded-2xl bg-[#4a260f] p-6 text-white shadow-xl sm:p-7">
//               <div className="flex items-center gap-2">
//                 <ShoppingBag size={20} className="text-[#efc08e]" />

//                 <h2 className="font-serif text-2xl font-bold">
//                   Your Order
//                 </h2>
//               </div>

//               <div className="mt-6 space-y-4">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex gap-3 border-b border-white/10 pb-4"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-16 w-16 rounded-lg object-cover"
//                     />

//                     <div className="min-w-0 flex-1">
//                       <p className="truncate text-sm font-semibold">
//                         {item.name}
//                       </p>

//                       <p className="mt-1 text-xs text-[#cdb5a4]">
//                         ₹{item.price} × {item.quantity}
//                       </p>
//                     </div>

//                     <p className="text-sm font-bold text-[#efc08e]">
//                       ₹{item.price * item.quantity}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6 space-y-4 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-[#d8c0ae]">
//                     Subtotal
//                   </span>

//                   <span className="font-semibold">
//                     ₹{cartTotal}
//                   </span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span className="text-[#d8c0ae]">
//                     Delivery
//                   </span>

//                   <span className="font-semibold">
//                     {deliveryCharge === 0
//                       ? "FREE"
//                       : `₹${deliveryCharge}`}
//                   </span>
//                 </div>

//                 <div className="border-t border-white/15 pt-4">
//                   <div className="flex items-center justify-between">
//                     <span className="font-semibold">
//                       Total
//                     </span>

//                     <span className="text-2xl font-bold text-[#efc08e]">
//                       ₹{finalTotal}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {cartTotal < 500 && (
//                 <p className="mt-5 rounded-xl bg-white/10 p-3 text-xs leading-5 text-[#e6d1c0]">
//                   Add ₹{500 - cartTotal} more to get
//                   <span className="font-bold text-[#efc08e]">
//                     {" "}FREE delivery.
//                   </span>
//                 </p>
//               )}
//             </div>
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Checkout;





















import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  User,
  CalendarDays,
  CreditCard,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "../context/useCart";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    deliveryDate: "",
    paymentMethod: "Cash on Delivery",
  });

  const [isPlaced, setIsPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [placedTotal, setPlacedTotal] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deliveryCharge =
    cartTotal === 0 ? 0 : cartTotal >= 500 ? 0 : 40;

  const finalTotal = cartTotal + deliveryCharge;

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const customerToken = localStorage.getItem("customerToken");

      const orderData = {
        customer: {
          name: formData.name,
          phone: formData.phone,
          address: `${formData.address}, ${formData.city} - ${formData.pincode}`,
        },

        items: cartItems.map((item) => ({
          productName: item.name,
          price: Number(item.price),
          quantity: Number(item.quantity),
          image: item.image || "",
        })),

        totalAmount: Number(finalTotal),
        paymentMethod: formData.paymentMethod,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      // Send customer token only when customer is logged in
      if (customerToken) {
        headers.Authorization = `Bearer ${customerToken}`;
      }

      // const response = await fetch(
      //   "http://localhost:5000/api/orders",
      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/orders`,
        {
          method: "POST",
          headers,
          body: JSON.stringify(orderData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to place order"
        );
      }

      setOrderId(data.order._id);
      setPlacedTotal(finalTotal);
      setIsPlaced(true);

      clearCart();
    } catch (error) {
      console.error("Order failed:", error);

      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isPlaced) {
    return (
      <div className="min-h-screen bg-[#fffaf5]">
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
          <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf5e7] text-[#4f7d42]">
              <CheckCircle2 size={42} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
              Order Confirmed
            </p>

            <h1 className="mt-3 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
              Thank You, {formData.name}!
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#806556]">
              Your order has been placed successfully. We will contact you
              shortly to confirm your delivery details.
            </p>

            <div className="mt-7 rounded-2xl bg-[#f7eee5] p-5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#806556]">
                  Order ID
                </span>

                <span className="font-bold text-[#4a260f]">
                  #{orderId}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-[#806556]">
                  Delivery Date
                </span>

                <span className="font-semibold text-[#4a2c1b]">
                  {formData.deliveryDate}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[#dfcfc0] pt-3">
                <span className="font-semibold text-[#4a2c1b]">
                  Total Paid
                </span>

                <span className="text-lg font-bold text-[#8a4f29]">
                  ₹{placedTotal}
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/"
                className="rounded-xl border border-[#d9c4b3] px-6 py-3 text-sm font-bold text-[#69402a] transition hover:bg-[#f7eee5]"
              >
                Back to Home
              </Link>

              <button
                onClick={() => navigate("/")}
                className="rounded-xl bg-[#4a260f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6a3b1f]"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f3e2d3] text-[#8a4f29]">
            <ShoppingBag size={34} />
          </div>

          <h1 className="mt-6 font-serif text-3xl font-bold text-[#4a2c1b]">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm text-[#806556]">
            Add some delicious products before checking out.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#4a260f] px-6 py-3.5 text-sm font-bold text-white"
          >
            Start Shopping
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      {/* TOP BAR */}
      <div className="border-b border-[#ead9cb] bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-5 sm:px-6 lg:px-8">
          <Link
            to="/cart"
            className="flex items-center gap-2 text-sm font-semibold text-[#69402a] transition hover:text-[#4a260f]"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            Almost There
          </p>

          <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
            Complete Your Order
          </h1>

          <p className="mt-2 text-sm text-[#806556]">
            Enter your delivery details and place your order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#ead9cb] bg-white p-5 shadow-sm sm:p-7"
          >
            {/* PERSONAL DETAILS */}
            <div>
              <div className="flex items-center gap-2">
                <User size={19} className="text-[#8a4f29]" />

                <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
                  Personal Details
                </h2>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a98b79]"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] py-3 pl-10 pr-4 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                    Mobile Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a98b79]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10 digit mobile number"
                      pattern="[6-9][0-9]{9}"
                      maxLength="10"
                      required
                      className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] py-3 pl-10 pr-4 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* DELIVERY ADDRESS */}
            <div className="mt-9 border-t border-[#ead9cb] pt-8">
              <div className="flex items-center gap-2">
                <MapPin size={19} className="text-[#8a4f29]" />

                <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
                  Delivery Address
                </h2>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                    Full Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House no., street, area..."
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                      className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="6 digit pincode"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      required
                      className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#b39b8b] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* DELIVERY DATE */}
            <div className="mt-9 border-t border-[#ead9cb] pt-8">
              <div className="flex items-center gap-2">
                <CalendarDays size={19} className="text-[#8a4f29]" />

                <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
                  Delivery Date
                </h2>
              </div>

              <div className="mt-5 max-w-sm">
                <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                  Select Date
                </label>

                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  min={today}
                  required
                  className="w-full rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none transition focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
                />
              </div>
            </div>

            {/* PAYMENT */}
            <div className="mt-9 border-t border-[#ead9cb] pt-8">
              <div className="flex items-center gap-2">
                <CreditCard size={19} className="text-[#8a4f29]" />

                <h2 className="font-serif text-xl font-bold text-[#4a2c1b]">
                  Payment Method
                </h2>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label
                  className={`cursor-pointer rounded-xl border p-4 transition ${
                    formData.paymentMethod === "Cash on Delivery"
                      ? "border-[#8a4f29] bg-[#f7eee5]"
                      : "border-[#ddcbbd] bg-white hover:bg-[#fffaf5]"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={
                      formData.paymentMethod === "Cash on Delivery"
                    }
                    onChange={handleChange}
                    className="sr-only"
                  />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ead7c7] text-[#8a4f29]">
                      💵
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#4a2c1b]">
                        Cash on Delivery
                      </p>

                      <p className="mt-1 text-xs text-[#806556]">
                        Pay when your order arrives
                      </p>
                    </div>
                  </div>
                </label>

                <label
                  className={`cursor-pointer rounded-xl border p-4 transition ${
                    formData.paymentMethod === "Online Payment"
                      ? "border-[#8a4f29] bg-[#f7eee5]"
                      : "border-[#ddcbbd] bg-white hover:bg-[#fffaf5]"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Online Payment"
                    checked={
                      formData.paymentMethod === "Online Payment"
                    }
                    onChange={handleChange}
                    className="sr-only"
                  />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ead7c7] text-[#8a4f29]">
                      💳
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#4a2c1b]">
                        Online Payment
                      </p>

                      <p className="mt-1 text-xs text-[#806556]">
                        Online payment integration later
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4a260f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#6a3b1f] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
              <ArrowRight size={18} />
            </button>

            {errorMessage && (
              <p className="mt-3 text-center text-sm font-semibold text-red-600">
                {errorMessage}
              </p>
            )}
          </form>

          {/* ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl bg-[#4a260f] p-6 text-white shadow-xl sm:p-7">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#efc08e]" />

                <h2 className="font-serif text-2xl font-bold">
                  Your Order
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 border-b border-white/10 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-[#cdb5a4]">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm font-bold text-[#efc08e]">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#d8c0ae]">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ₹{cartTotal}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#d8c0ae]">
                    Delivery
                  </span>

                  <span className="font-semibold">
                    {deliveryCharge === 0
                      ? "FREE"
                      : `₹${deliveryCharge}`}
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

              {cartTotal < 500 && (
                <p className="mt-5 rounded-xl bg-white/10 p-3 text-xs leading-5 text-[#e6d1c0]">
                  Add ₹{500 - cartTotal} more to get
                  <span className="font-bold text-[#efc08e]">
                    {" "}
                    FREE delivery.
                  </span>
                </p>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Checkout;