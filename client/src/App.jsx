// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Order from "./pages/Order";
// import Cart from "./pages/Cart";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/order" element={<Order />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;










// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Order from "./pages/Order";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import AdminOrders from "./pages/AdminOrders";
// import MyOrders from "./pages/MyOrders";
// import TrackOrder from "./pages/TrackOrder";
// import AdminProducts from "./pages/AdminProducts";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminLogin from "./pages/AdminLogin";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/order" element={<Order />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/admin/orders" element={<AdminOrders />} />
//         <Route path="/my-orders" element={<MyOrders />} />
//         <Route path="/track-order" element={<TrackOrder />} />
//         <Route path="/admin/products" element={<AdminProducts />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;














import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminOrders from "./pages/AdminOrders";
import MyOrders from "./pages/MyOrders";
import TrackOrder from "./pages/TrackOrder";
import AdminProducts from "./pages/AdminProducts";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomerLogin from "./pages/CustomerLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/login" element={<CustomerLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute>
              <AdminOrders />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
