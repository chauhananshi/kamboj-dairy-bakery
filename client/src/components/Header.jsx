// import { Link, NavLink } from "react-router-dom";
// import {
//   ShoppingCart,
//   Search,
//   UserRound,
//   Phone,
//   Menu,
//   X,
//   CakeSlice,
// } from "lucide-react";
// import { useState } from "react";
// import { useCart } from "../context/useCart";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { cartCount } = useCart();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/#products" },
//     { name: "Cakes", path: "/#products" },
//     { name: "Dairy Products", path: "/#products" },
//     { name: "Combos", path: "/#products" },
//     { name: "About Us", path: "/#about" },
//     { name: "Contact", path: "/order" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-[#fffaf5] shadow-sm">
//       {/* TOP BAR */}
//       <div className="bg-gradient-to-r from-[#3f210f] via-[#5a3117] to-[#3f210f] text-white">
//         <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[10px] sm:px-6 sm:text-xs lg:px-8">
//           <p className="flex items-center gap-1 font-medium">
//             <CakeSlice size={13} />
//             Free Delivery on Orders Above ₹499
//           </p>

//           <div className="hidden items-center gap-5 sm:flex">
//             <span>⌂ Track Order</span>
//             <span className="flex items-center gap-1">
//               <Phone size={12} />
//               +91 98765 43210
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <div className="border-b border-[#eadfd4] bg-[#fffaf5]">
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6b89e] bg-[#fff7f0] text-[#7a431e]">
//               <CakeSlice size={23} />
//             </div>

//             <div className="leading-tight">
//               <h1 className="font-serif text-lg font-bold text-[#75421f] sm:text-xl">
//                 Kamboj Dairy
//               </h1>
//               <p className="text-[10px] font-medium text-[#6b4a37] sm:text-xs">
//                 Bakery & Dairy
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden items-center gap-5 lg:flex">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `text-xs font-medium transition ${
//                     isActive
//                       ? "text-[#9a572f]"
//                       : "text-[#4b3426] hover:text-[#9a572f]"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             <button
//               className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//               aria-label="Search"
//             >
//               <Search size={19} />
//             </button>

//             <button
//               className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//               aria-label="Account"
//             >
//               <UserRound size={19} />
//             </button>

//             <button
//               className="relative rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
//               aria-label="Cart"
//             >
//               <ShoppingCart size={20} />

//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b26b36] text-[10px] font-bold text-white">
//                   {cartCount}
//                 </span>
//               )}
//             </button>

//             <Link
//               to="/order"
//               className="hidden rounded-md bg-[#4a260f] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6a3b1f] sm:block"
//             >
//               Order Now
//             </Link>

//             {/* MOBILE MENU */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="rounded-lg p-2 text-[#4b3426] lg:hidden"
//               aria-label="Menu"
//             >
//               {mobileOpen ? <X size={23} /> : <Menu size={23} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE NAV */}
//       {mobileOpen && (
//         <div className="border-b border-[#eadfd4] bg-[#fffaf5] px-5 py-5 shadow-lg lg:hidden">
//           <nav className="flex flex-col gap-1">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className="rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             <Link
//               to="/order"
//               onClick={() => setMobileOpen(false)}
//               className="mt-3 rounded-lg bg-[#4a260f] px-5 py-3 text-center text-sm font-semibold text-white"
//             >
//               Order Now
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }



































// import { Link, NavLink } from "react-router-dom";
// import {
//   ShoppingCart,
//   Search,
//   UserRound,
//   Phone,
//   Menu,
//   X,
//   CakeSlice,
// } from "lucide-react";
// import { useState } from "react";
// import { useCart } from "../context/useCart";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const { cartCount } = useCart();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/#products" },
//     { name: "Cakes", path: "/#products" },
//     { name: "Dairy Products", path: "/#products" },
//     { name: "Combos", path: "/#products" },
//     { name: "About Us", path: "/#about" },
//     { name: "Contact", path: "/order" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-[#fffaf5] shadow-sm">
//       {/* TOP BAR */}
//       <div className="bg-gradient-to-r from-[#3f210f] via-[#5a3117] to-[#3f210f] text-white">
//         <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[10px] sm:px-6 sm:text-xs lg:px-8">
//           <p className="flex items-center gap-1 font-medium">
//             <CakeSlice size={13} />
//             Free Delivery on Orders Above ₹499
//           </p>

//           {/* <div className="hidden items-center gap-5 sm:flex">
//             <span>⌂ Track Order</span>

//             <span className="flex items-center gap-1">
//               <Phone size={12} />
//               +91 98765 43210
//             </span>
//           </div>
//         </div>
//       </div> */}






//      <div className="hidden items-center gap-5 sm:flex">
//   <Link
//     to="/track-order"
//     className="cursor-pointer transition hover:text-[#f0c8a5]"
//   >
//     ⌂ Track Order
//   </Link>

//   <span className="flex items-center gap-1">
//     <Phone size={12} />
//     +91 98765 43210
//   </span>
// </div>





//       {/* MAIN NAVBAR */}
//       <div className="border-b border-[#eadfd4] bg-[#fffaf5]">
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6b89e] bg-[#fff7f0] text-[#7a431e]">
//               <CakeSlice size={23} />
//             </div>

//             <div className="leading-tight">
//               <h1 className="font-serif text-lg font-bold text-[#75421f] sm:text-xl">
//                 Kamboj Dairy
//               </h1>

//               <p className="text-[10px] font-medium text-[#6b4a37] sm:text-xs">
//                 Bakery & Dairy
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden items-center gap-5 lg:flex">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `text-xs font-medium transition ${
//                     isActive
//                       ? "text-[#9a572f]"
//                       : "text-[#4b3426] hover:text-[#9a572f]"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             {/* SEARCH */}
//             <button
//               className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//               aria-label="Search"
//             >
//               <Search size={19} />
//             </button>

//             {/* ACCOUNT */}
//             <button
//               className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//               aria-label="Account"
//             >
//               <UserRound size={19} />
//             </button>

//             {/* CART */}
//             <Link
//               to="/cart"
//               className="relative rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
//               aria-label="Cart"
//             >
//               <ShoppingCart size={20} />

//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b26b36] text-[10px] font-bold text-white">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* ORDER NOW */}
//             <Link
//               to="/order"
//               className="hidden rounded-md bg-[#4a260f] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6a3b1f] sm:block"
//             >
//               Order Now
//             </Link>

//             {/* MOBILE MENU */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="rounded-lg p-2 text-[#4b3426] lg:hidden"
//               aria-label="Menu"
//             >
//               {mobileOpen ? <X size={23} /> : <Menu size={23} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE NAV */}
//       {mobileOpen && (
//         <div className="border-b border-[#eadfd4] bg-[#fffaf5] px-5 py-5 shadow-lg lg:hidden">
//           <nav className="flex flex-col gap-1">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className="rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             {/* MOBILE CART */}
//             <Link
//               to="/cart"
//               onClick={() => setMobileOpen(false)}
//               className="mt-2 flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
//             >
//               <span className="flex items-center gap-2">
//                 <ShoppingCart size={18} />
//                 Cart
//               </span>

//               {cartCount > 0 && (
//                 <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b26b36] px-1.5 text-[10px] font-bold text-white">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* MOBILE ORDER */}
//             <Link
//               to="/order"
//               onClick={() => setMobileOpen(false)}
//               className="mt-3 rounded-lg bg-[#4a260f] px-5 py-3 text-center text-sm font-semibold text-white"
//             >
//               Order Now
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
















// // import { Link, NavLink } from "react-router-dom";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import {
//   ShoppingCart,
//   Search,
//   UserRound,
//   Phone,
//   Menu,
//   X,
//   CakeSlice,
// } from "lucide-react";
// import { useState } from "react";
// import { useCart } from "../context/useCart";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [adminOpen, setAdminOpen] = useState(false);
//   const { cartCount } = useCart();
//   const navigate = useNavigate();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/#products" },
//     { name: "Cakes", path: "/#products" },
//     { name: "Dairy Products", path: "/#products" },
//     { name: "Combos", path: "/#products" },
//     { name: "About Us", path: "/#about" },
//     { name: "Contact", path: "/order" },
//   ];
  
//   const handleLogout = () => {
//   localStorage.removeItem("adminToken");
//   localStorage.removeItem("admin");

//   setAdminOpen(false);

//   navigate("/admin/login");
// };
//   return (
//     <header className="sticky top-0 z-50 bg-[#fffaf5] shadow-sm">
//       {/* TOP BAR */}
//       <div className="bg-gradient-to-r from-[#3f210f] via-[#5a3117] to-[#3f210f] text-white">
//         <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[10px] sm:px-6 sm:text-xs lg:px-8">
//           <p className="flex items-center gap-1 font-medium">
//             <CakeSlice size={13} />
//             Free Delivery on Orders Above ₹499
//           </p>

//           <div className="hidden items-center gap-5 sm:flex">
//             <Link
//               to="/track-order"
//               className="cursor-pointer transition hover:text-[#f0c8a5]"
//             >
//               ⌂ Track Order
//             </Link>

//             <span className="flex items-center gap-1">
//               <Phone size={12} />
//               +91 98765 43210
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <div className="border-b border-[#eadfd4] bg-[#fffaf5]">
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6b89e] bg-[#fff7f0] text-[#7a431e]">
//               <CakeSlice size={23} />
//             </div>

//             <div className="leading-tight">
//               <h1 className="font-serif text-lg font-bold text-[#75421f] sm:text-xl">
//                 Kamboj Dairy
//               </h1>

//               <p className="text-[10px] font-medium text-[#6b4a37] sm:text-xs">
//                 Bakery & Dairy
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden items-center gap-5 lg:flex">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `text-xs font-medium transition ${
//                     isActive
//                       ? "text-[#9a572f]"
//                       : "text-[#4b3426] hover:text-[#9a572f]"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             {/* ADMIN DROPDOWN */}
//             <div className="relative">
//               <button
//                 onClick={() => setAdminOpen(!adminOpen)}
//                 className="text-xs font-medium text-[#4b3426] transition hover:text-[#9a572f]"
//               >
//                 Admin ▾
//               </button>

//               {/* {adminOpen && (
//                 <div className="absolute right-0 top-8 z-50 w-40 rounded-lg border border-[#eadfd4] bg-white p-2 shadow-lg">
//                   <Link
//                     to="/admin/products"
//                     onClick={() => setAdminOpen(false)}
//                     className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//                   >
//                     📦 Products
//                   </Link>

//                   <Link
//                     to="/admin/orders"
//                     onClick={() => setAdminOpen(false)}
//                     className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//                   >
//                     📋 Orders
//                   </Link>
//                 </div>
//               )} */}








//             {adminOpen && (
//   <div className="absolute right-0 top-8 z-50 w-40 rounded-lg border border-[#eadfd4] bg-white p-2 shadow-lg">
//     <Link
//       to="/admin/dashboard"
//       onClick={() => setAdminOpen(false)}
//       className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//     >
//       📊 Dashboard
//     </Link>

//     <Link
//       to="/admin/products"
//       onClick={() => setAdminOpen(false)}
//       className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//     >
//       📦 Products
//     </Link>

//     <Link
//       to="/admin/orders"
//       onClick={() => setAdminOpen(false)}
//       className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//     >
//       📋 Orders
//     </Link>

//     <button
//   onClick={handleLogout}
//   className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
// >
//   🚪 Logout
// </button>
//   </div>
// )}













//             </div>
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             <button
//               className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//               aria-label="Search"
//             >
//               <Search size={19} />
//             </button>

//             {/* <button
//               className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//               aria-label="Account"
//             >
//               <UserRound size={19} />
//             </button> */}




//             <Link
//   to="/login"
//   className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//   aria-label="Account"
// >
//   <UserRound size={19} />
// </Link>

//             {/* CART */}
//             <Link
//               to="/cart"
//               className="relative rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
//               aria-label="Cart"
//             >
//               <ShoppingCart size={20} />

//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b26b36] text-[10px] font-bold text-white">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* ORDER NOW */}
//             <Link
//               to="/order"
//               className="hidden rounded-md bg-[#4a260f] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6a3b1f] sm:block"
//             >
//               Order Now
//             </Link>

//             {/* MOBILE MENU */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="rounded-lg p-2 text-[#4b3426] lg:hidden"
//               aria-label="Menu"
//             >
//               {mobileOpen ? <X size={23} /> : <Menu size={23} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE NAV */}
//       {mobileOpen && (
//         <div className="border-b border-[#eadfd4] bg-[#fffaf5] px-5 py-5 shadow-lg lg:hidden">
//           <nav className="flex flex-col gap-1">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className="rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             {/* MOBILE ADMIN */}
//             <div className="mt-2 border-t border-[#eadfd4] pt-2">
//               <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                 Admin
//               </p>

//               <Link
//                 to="/admin/dashboard"
//                 onClick={() => setAdminOpen(false)}
//                className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//                >
//                📊 Dashboard
//                 </Link>

//               <Link
//                 to="/admin/products"
//                 onClick={() => setMobileOpen(false)}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//               >
//                 📦 Products
//               </Link>

//               <Link
//                 to="/admin/orders"
//                 onClick={() => setMobileOpen(false)}
//                 className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//               >
//                 📋 Orders
//               </Link>
//             </div>

//             {/* MOBILE CART */}
//             <Link
//               to="/cart"
//               onClick={() => setMobileOpen(false)}
//               className="mt-2 flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
//             >
//               <span className="flex items-center gap-2">
//                 <ShoppingCart size={18} />
//                 Cart
//               </span>

//               {cartCount > 0 && (
//                 <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b26b36] px-1.5 text-[10px] font-bold text-white">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* MOBILE ORDER */}
//             <Link
//               to="/order"
//               onClick={() => setMobileOpen(false)}
//               className="mt-3 rounded-lg bg-[#4a260f] px-5 py-3 text-center text-sm font-semibold text-white"
//             >
//               Order Now
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }





















// import { Link, NavLink, useNavigate } from "react-router-dom";
// import {
//   ShoppingCart,
//   Search,
//   UserRound,
//   Phone,
//   Menu,
//   X,
//   CakeSlice,
// } from "lucide-react";
// import { useState } from "react";
// import { useCart } from "../context/useCart";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [customerOpen, setCustomerOpen] = useState(false);

//   const { cartCount } = useCart();
//   const navigate = useNavigate();

//   const customerToken = localStorage.getItem("customerToken");
//   const customerData = JSON.parse(
//     localStorage.getItem("customer") || "null"
//   );

//   const adminToken = localStorage.getItem("adminToken");

//   // const navItems = [
//   //   { name: "Home", path: "/" },
//   //   { name: "Shop", path: "/#products" },
//   //   { name: "Cakes", path: "/#products" },
//   //   { name: "Dairy Products", path: "/#products" },
//   //   { name: "Combos", path: "/#products" },
//   //   { name: "About Us", path: "/#about" },
//   //   // { name: "Contact", path: "/order" },
//   //   // { name: "Contact", path: "/#contact" },
//   //   //{ name: "Contact", path: "/order#contact" },
//   // ];


// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "Shop", path: "/#products" },
//   { name: "Cakes", path: "/?category=Cakes#products" },
//   { name: "Dairy Products", path: "/?category=Dairy#products" },
//   { name: "Combos", path: "/?category=Combos#products" },
//   { name: "About Us", path: "/#about" },
//   { name: "Contact", path: "/order#contact" },
// ];









//   const handleAdminLogout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("admin");

//     setAdminOpen(false);
//     setMobileOpen(false);

//     navigate("/admin/login");
//   };

//   const handleCustomerLogout = () => {
//     localStorage.removeItem("customerToken");
//     localStorage.removeItem("customer");

//     setCustomerOpen(false);
//     setMobileOpen(false);

//     navigate("/");
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-[#fffaf5] shadow-sm">
//       {/* TOP BAR */}
//       <div className="bg-gradient-to-r from-[#3f210f] via-[#5a3117] to-[#3f210f] text-white">
//         <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[10px] sm:px-6 sm:text-xs lg:px-8">
//           <p className="flex items-center gap-1 font-medium">
//             <CakeSlice size={13} />
//             Free Delivery on Orders Above ₹499
//           </p>

//           <div className="hidden items-center gap-5 sm:flex">
//             <Link
//               to="/track-order"
//               className="cursor-pointer transition hover:text-[#f0c8a5]"
//             >
//               ⌂ Track Order
//             </Link>

//             <span className="flex items-center gap-1">
//               <Phone size={12} />
//               +91 98765 43210
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <div className="border-b border-[#eadfd4] bg-[#fffaf5]">
//         <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6b89e] bg-[#fff7f0] text-[#7a431e]">
//               <CakeSlice size={23} />
//             </div>

//             <div className="leading-tight">
//               <h1 className="font-serif text-lg font-bold text-[#75421f] sm:text-xl">
//                 Kamboj Dairy
//               </h1>

//               <p className="text-[10px] font-medium text-[#6b4a37] sm:text-xs">
//                 Bakery & Dairy
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden items-center gap-5 lg:flex">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `text-xs font-medium transition ${
//                     isActive
//                       ? "text-[#9a572f]"
//                       : "text-[#4b3426] hover:text-[#9a572f]"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             {/* ADMIN */}
//             <div className="relative">
//               <button
//                 onClick={() => setAdminOpen(!adminOpen)}
//                 className="text-xs font-medium text-[#4b3426] transition hover:text-[#9a572f]"
//               >
//                 Admin ▾
//               </button>

//               {adminOpen && (
//                 <div className="absolute right-0 top-8 z-50 w-44 rounded-lg border border-[#eadfd4] bg-white p-2 shadow-lg">
//                   {adminToken ? (
//                     <>
//                       <Link
//                         to="/admin/dashboard"
//                         onClick={() => setAdminOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//                       >
//                         📊 Dashboard
//                       </Link>

//                       <Link
//                         to="/admin/products"
//                         onClick={() => setAdminOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//                       >
//                         📦 Products
//                       </Link>

//                       <Link
//                         to="/admin/orders"
//                         onClick={() => setAdminOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//                       >
//                         📋 Orders
//                       </Link>

//                       <button
//                         onClick={handleAdminLogout}
//                         className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
//                       >
//                         🚪 Logout
//                       </button>
//                     </>
//                   ) : (
//                     <Link
//                       to="/admin/login"
//                       onClick={() => setAdminOpen(false)}
//                       className="block rounded-md px-3 py-2 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//                     >
//                       🔐 Admin Login
//                     </Link>
//                   )}
//                 </div>
//               )}
//             </div>
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             {/* SEARCH */}
//             {/* <button
//               className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//               aria-label="Search"
//             >
//               <Search size={19} />
//             </button> */}

//             <Link
//   to="/#products"
//   className="hidden rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da] md:block"
//   aria-label="Search"
// >
//   <Search size={19} />
// </Link>












//             {/* CUSTOMER ACCOUNT */}
//             <div className="relative hidden md:block">
//               {customerToken ? (
//                 <>
//                   <button
//                     onClick={() => setCustomerOpen(!customerOpen)}
//                     className="rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
//                     aria-label="Customer Account"
//                   >
//                     <UserRound size={19} />
//                   </button>

//                   {customerOpen && (
//                     <div className="absolute right-0 top-11 z-50 w-48 rounded-xl border border-[#eadfd4] bg-white p-2 shadow-lg">
//                       <div className="border-b border-[#eadfd4] px-3 py-2">
//                         <p className="text-xs text-[#806556]">
//                           Welcome
//                         </p>

//                         <p className="truncate text-sm font-bold text-[#4a2c1b]">
//                           {customerData?.name || "Customer"}
//                         </p>
//                       </div>

//                       <Link
//                         to="/my-orders"
//                         onClick={() => setCustomerOpen(false)}
//                         className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
//                       >
//                         📦 My Orders
//                       </Link>

//                       <button
//                         onClick={handleCustomerLogout}
//                         className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
//                       >
//                         🚪 Logout
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="block rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
//                   aria-label="Customer Account"
//                 >
//                   <UserRound size={19} />
//                 </Link>
//               )}
//             </div>

//             {/* CART */}
//             <Link
//               to="/cart"
//               className="relative rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
//               aria-label="Cart"
//             >
//               <ShoppingCart size={20} />

//               {cartCount > 0 && (
//                 <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b26b36] text-[10px] font-bold text-white">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* ORDER NOW */}
//             <Link
//               to="/order"
//               className="hidden rounded-md bg-[#4a260f] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6a3b1f] sm:block"
//             >
//               Order Now
//             </Link>

//             {/* MOBILE MENU */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="rounded-lg p-2 text-[#4b3426] lg:hidden"
//               aria-label="Menu"
//             >
//               {mobileOpen ? <X size={23} /> : <Menu size={23} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE NAV */}
//       {mobileOpen && (
//         <div className="border-b border-[#eadfd4] bg-[#fffaf5] px-5 py-5 shadow-lg lg:hidden">
//           <nav className="flex flex-col gap-1">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className="rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             {/* MOBILE CUSTOMER ACCOUNT */}
//             <div className="mt-2 border-t border-[#eadfd4] pt-2">
//               <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                 My Account
//               </p>

//               {customerToken ? (
//                 <>
//                   <div className="px-4 py-2">
//                     <p className="text-xs text-[#806556]">
//                       Welcome
//                     </p>

//                     <p className="text-sm font-bold text-[#4a2c1b]">
//                       {customerData?.name || "Customer"}
//                     </p>
//                   </div>

//                   <Link
//                     to="/my-orders"
//                     onClick={() => setMobileOpen(false)}
//                     className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//                   >
//                     📦 My Orders
//                   </Link>

//                   <button
//                     onClick={handleCustomerLogout}
//                     className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
//                   >
//                     🚪 Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link
//                   to="/login"
//                   onClick={() => setMobileOpen(false)}
//                   className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//                 >
//                   👤 Login / Sign Up
//                 </Link>
//               )}
//             </div>

//             {/* MOBILE ADMIN */}
//             <div className="mt-2 border-t border-[#eadfd4] pt-2">
//               <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a56236]">
//                 Admin
//               </p>

//               {adminToken ? (
//                 <>
//                   <Link
//                     to="/admin/dashboard"
//                     onClick={() => setMobileOpen(false)}
//                     className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//                   >
//                     📊 Dashboard
//                   </Link>

//                   <Link
//                     to="/admin/products"
//                     onClick={() => setMobileOpen(false)}
//                     className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//                   >
//                     📦 Products
//                   </Link>

//                   <Link
//                     to="/admin/orders"
//                     onClick={() => setMobileOpen(false)}
//                     className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//                   >
//                     📋 Orders
//                   </Link>

//                   <button
//                     onClick={handleAdminLogout}
//                     className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
//                   >
//                     🚪 Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link
//                   to="/admin/login"
//                   onClick={() => setMobileOpen(false)}
//                   className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
//                 >
//                   🔐 Admin Login
//                 </Link>
//               )}
//             </div>

//             {/* MOBILE CART */}
//             <Link
//               to="/cart"
//               onClick={() => setMobileOpen(false)}
//               className="mt-2 flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
//             >
//               <span className="flex items-center gap-2">
//                 <ShoppingCart size={18} />
//                 Cart
//               </span>

//               {cartCount > 0 && (
//                 <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b26b36] px-1.5 text-[10px] font-bold text-white">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* MOBILE ORDER */}
//             <Link
//               to="/order"
//               onClick={() => setMobileOpen(false)}
//               className="mt-3 rounded-lg bg-[#4a260f] px-5 py-3 text-center text-sm font-semibold text-white"
//             >
//               Order Now
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }














import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  UserRound,
  Phone,
  Menu,
  X,
  CakeSlice,
} from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/useCart";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { cartCount } = useCart();
  const navigate = useNavigate();

  const customerToken = localStorage.getItem("customerToken");
  const customerData = JSON.parse(
    localStorage.getItem("customer") || "null"
  );

  const adminToken = localStorage.getItem("adminToken");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/#products" },
    { name: "Cakes", path: "/?category=Cakes#products" },
    {
      name: "Dairy Products",
      path: "/?category=Dairy#products",
    },
    { name: "Combos", path: "/?category=Combos#products" },
    { name: "About Us", path: "/#about" },
    { name: "Contact", path: "/order#contact" },
  ];

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    setAdminOpen(false);
    setMobileOpen(false);

    navigate("/admin/login");
  };

  const handleCustomerLogout = () => {
    localStorage.removeItem("customerToken");
    localStorage.removeItem("customer");

    setCustomerOpen(false);
    setMobileOpen(false);

    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const value = searchText.trim();

    if (!value) {
      navigate("/#products");
      setSearchOpen(false);
      return;
    }

    navigate(`/?search=${encodeURIComponent(value)}#products`);
    setSearchOpen(false);

    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleNavClick = (path) => {
    navigate(path);

    setTimeout(() => {
      const sectionId = path.includes("contact")
        ? "contact"
        : "products";

      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fffaf5] shadow-sm">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-[#3f210f] via-[#5a3117] to-[#3f210f] text-white">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[10px] sm:px-6 sm:text-xs lg:px-8">
          <p className="flex items-center gap-1 font-medium">
            <CakeSlice size={13} />
            Free Delivery on Orders Above ₹499
          </p>

          <div className="hidden items-center gap-5 sm:flex">
            <Link
              to="/track-order"
              className="cursor-pointer transition hover:text-[#f0c8a5]"
            >
              ⌂ Track Order
            </Link>

            <span className="flex items-center gap-1">
              <Phone size={12} />
              +91 98765 43210
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-[#eadfd4] bg-[#fffaf5]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6b89e] bg-[#fff7f0] text-[#7a431e]">
              <CakeSlice size={23} />
            </div>

            <div className="leading-tight">
              <h1 className="font-serif text-lg font-bold text-[#75421f] sm:text-xl">
                Kamboj Dairy
              </h1>

              <p className="text-[10px] font-medium text-[#6b4a37] sm:text-xs">
                Bakery & Dairy
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="text-xs font-medium text-[#4b3426] transition hover:text-[#9a572f]"
              >
                {item.name}
              </button>
            ))}

            {/* ADMIN */}
            <div className="relative">
              <button
                onClick={() => setAdminOpen(!adminOpen)}
                className="text-xs font-medium text-[#4b3426] transition hover:text-[#9a572f]"
              >
                Admin ▾
              </button>

              {adminOpen && (
                <div className="absolute right-0 top-8 z-50 w-44 rounded-lg border border-[#eadfd4] bg-white p-2 shadow-lg">
                  {adminToken ? (
                    <>
                      <Link
                        to="/admin/dashboard"
                        onClick={() => setAdminOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
                      >
                        📊 Dashboard
                      </Link>

                      <Link
                        to="/admin/products"
                        onClick={() => setAdminOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
                      >
                        📦 Products
                      </Link>

                      <Link
                        to="/admin/orders"
                        onClick={() => setAdminOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
                      >
                        📋 Orders
                      </Link>

                      <button
                        onClick={handleAdminLogout}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                      >
                        🚪 Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/admin/login"
                      onClick={() => setAdminOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
                    >
                      🔐 Admin Login
                    </Link>
                  )}
                </div>
              )}
            </div>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* SEARCH */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
              aria-label="Search"
            >
              {searchOpen ? <X size={19} /> : <Search size={19} />}
            </button>

            {/* CUSTOMER ACCOUNT */}
            <div className="relative">
              {customerToken ? (
                <>
                  <button
                    onClick={() =>
                      setCustomerOpen(!customerOpen)
                    }
                    className="rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
                    aria-label="Customer Account"
                  >
                    <UserRound size={19} />
                  </button>

                  {customerOpen && (
                    <div className="absolute right-0 top-11 z-50 w-48 rounded-xl border border-[#eadfd4] bg-white p-2 shadow-lg">
                      <div className="border-b border-[#eadfd4] px-3 py-2">
                        <p className="text-xs text-[#806556]">
                          Welcome
                        </p>

                        <p className="truncate text-sm font-bold text-[#4a2c1b]">
                          {customerData?.name || "Customer"}
                        </p>
                      </div>

                      <Link
                        to="/my-orders"
                        onClick={() => setCustomerOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-[#4b3426] hover:bg-[#f3e6da]"
                      >
                        📦 My Orders
                      </Link>

                      <button
                        onClick={handleCustomerLogout}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to="/login"
                  className="rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
                  aria-label="Customer Account"
                >
                  <UserRound size={19} />
                </Link>
              )}
            </div>

            {/* CART */}
            <Link
              to="/cart"
              className="relative rounded-full p-2 text-[#4b3426] transition hover:bg-[#f3e6da]"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b26b36] text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* ORDER NOW */}
            <Link
              to="/order"
              className="hidden rounded-md bg-[#4a260f] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#6a3b1f] sm:block"
            >
              Order Now
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-[#4b3426] lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      {searchOpen && (
        <div className="border-b border-[#eadfd4] bg-white px-4 py-4 shadow-sm">
          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-xl gap-2"
          >
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search cakes, dairy, cookies..."
              autoFocus
              className="flex-1 rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-3 text-sm text-[#4a2c1b] outline-none focus:border-[#8a4f29]"
            />

            <button
              type="submit"
              className="rounded-xl bg-[#4a260f] px-5 py-3 text-sm font-bold text-white"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="border-b border-[#eadfd4] bg-[#fffaf5] px-5 py-5 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
              >
                {item.name}
              </button>
            ))}

            {/* CUSTOMER ACCOUNT */}
            <div className="mt-2 border-t border-[#eadfd4] pt-2">
              <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a56236]">
                My Account
              </p>

              {customerToken ? (
                <>
                  <p className="px-4 py-2 text-sm font-bold text-[#4a2c1b]">
                    {customerData?.name || "Customer"}
                  </p>

                  <Link
                    to="/my-orders"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
                  >
                    📦 My Orders
                  </Link>

                  <button
                    onClick={handleCustomerLogout}
                    className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    🚪 Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
                >
                  👤 Login / Sign Up
                </Link>
              )}
            </div>

            {/* ADMIN */}
            <div className="mt-2 border-t border-[#eadfd4] pt-2">
              <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a56236]">
                Admin
              </p>

              {adminToken ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
                  >
                    📊 Dashboard
                  </Link>

                  <Link
                    to="/admin/products"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
                  >
                    📦 Products
                  </Link>

                  <Link
                    to="/admin/orders"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
                  >
                    📋 Orders
                  </Link>

                  <button
                    onClick={handleAdminLogout}
                    className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    🚪 Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/admin/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] hover:bg-[#f3e6da]"
                >
                  🔐 Admin Login
                </Link>
              )}
            </div>

            {/* MOBILE CART */}
            <Link
              to="/cart"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#4b3426] transition hover:bg-[#f3e6da]"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart size={18} />
                Cart
              </span>

              {cartCount > 0 && (
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b26b36] px-1.5 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* MOBILE ORDER */}
            <Link
              to="/order"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-lg bg-[#4a260f] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}