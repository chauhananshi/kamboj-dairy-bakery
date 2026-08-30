// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Package,
//   ShoppingCart,
//   Clock,
//   CheckCircle,
//   IndianRupee,
//   ArrowRight,
// } from "lucide-react";

// function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-[#fffaf5] px-4 py-8 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
        
//         {/* HEADER */}
//         <div className="mb-8">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Admin Panel
//           </p>

//           <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
//             Dashboard
//           </h1>

//           <p className="mt-2 text-sm text-[#806556]">
//             Manage your products and customer orders from one place.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          
//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-[#806556]">Total Products</p>
//               <Package className="text-[#a56236]" size={22} />
//             </div>

//             <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
//               0
//             </h2>
//           </div>

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-[#806556]">Total Orders</p>
//               <ShoppingCart className="text-[#a56236]" size={22} />
//             </div>

//             <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
//               0
//             </h2>
//           </div>

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-[#806556]">Pending Orders</p>
//               <Clock className="text-[#a56236]" size={22} />
//             </div>

//             <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
//               0
//             </h2>
//           </div>

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-[#806556]">Delivered</p>
//               <CheckCircle className="text-[#a56236]" size={22} />
//             </div>

//             <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
//               0
//             </h2>
//           </div>

//           <div className="rounded-2xl bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-[#806556]">Total Sales</p>
//               <IndianRupee className="text-[#a56236]" size={22} />
//             </div>

//             <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
//               ₹0
//             </h2>
//           </div>
//         </div>

//         {/* QUICK ACTIONS */}
//         <div className="mt-10">
//           <h2 className="font-serif text-2xl font-bold text-[#4a2c1b]">
//             Quick Actions
//           </h2>

//           <div className="mt-5 grid gap-5 md:grid-cols-2">
            
//             <Link
//               to="/admin/products"
//               className="group rounded-2xl bg-[#4a260f] p-6 text-white transition hover:-translate-y-1 hover:bg-[#6a3b1f]"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <Package size={28} />

//                   <h3 className="mt-4 text-xl font-bold">
//                     Manage Products
//                   </h3>

//                   <p className="mt-2 text-sm text-white/75">
//                     Add, edit, delete products and manage stock.
//                   </p>
//                 </div>

//                 <ArrowRight className="transition group-hover:translate-x-1" />
//               </div>
//             </Link>

//             <Link
//               to="/admin/orders"
//               className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <ShoppingCart size={28} className="text-[#a56236]" />

//                   <h3 className="mt-4 text-xl font-bold text-[#4a2c1b]">
//                     Manage Orders
//                   </h3>

//                   <p className="mt-2 text-sm text-[#806556]">
//                     View customer orders and update delivery status.
//                   </p>
//                 </div>

//                 <ArrowRight className="text-[#a56236] transition group-hover:translate-x-1" />
//               </div>
//             </Link>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;


















import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  ShoppingCart,
  Clock,
  CheckCircle,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
    totalSales: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [productsResponse, ordersResponse] = await Promise.all([
          // fetch("http://localhost:5000/api/products"),
          fetch(`${import.meta.env.VITE_API_URL}/api/products`),
          fetch("http://localhost:5000/api/orders"),
        ]);

        const productsData = await productsResponse.json();
        const ordersData = await ordersResponse.json();

        const products = productsData.products || [];
        const orders = ordersData.orders || [];

        const pendingOrders = orders.filter(
          (order) => order.orderStatus === "Pending"
        ).length;

        const deliveredOrders = orders.filter(
          (order) => order.orderStatus === "Delivered"
        ).length;

        const totalSales = orders
          .filter((order) => order.orderStatus === "Delivered")
          .reduce(
            (total, order) => total + Number(order.totalAmount || 0),
            0
          );

        setStats({
          totalProducts: products.length,
          totalOrders: orders.length,
          pendingOrders,
          deliveredOrders,
          totalSales,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            Admin Panel
          </p>

          <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#806556]">
            Manage your products and customer orders from one place.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#806556]">Total Products</p>
              <Package className="text-[#a56236]" size={22} />
            </div>

            <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
              {loading ? "..." : stats.totalProducts}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#806556]">Total Orders</p>
              <ShoppingCart className="text-[#a56236]" size={22} />
            </div>

            <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
              {loading ? "..." : stats.totalOrders}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#806556]">Pending Orders</p>
              <Clock className="text-[#a56236]" size={22} />
            </div>

            <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
              {loading ? "..." : stats.pendingOrders}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#806556]">Delivered</p>
              <CheckCircle className="text-[#a56236]" size={22} />
            </div>

            <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
              {loading ? "..." : stats.deliveredOrders}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#806556]">Total Sales</p>
              <IndianRupee className="text-[#a56236]" size={22} />
            </div>

            <h2 className="mt-3 text-3xl font-bold text-[#4a2c1b]">
              {loading
                ? "..."
                : `₹${stats.totalSales.toLocaleString("en-IN")}`}
            </h2>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-[#4a2c1b]">
            Quick Actions
          </h2>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            
            <Link
              to="/admin/products"
              className="group rounded-2xl bg-[#4a260f] p-6 text-white transition hover:-translate-y-1 hover:bg-[#6a3b1f]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <Package size={28} />

                  <h3 className="mt-4 text-xl font-bold">
                    Manage Products
                  </h3>

                  <p className="mt-2 text-sm text-white/75">
                    Add, edit, delete products and manage stock.
                  </p>
                </div>

                <ArrowRight className="transition group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/admin/orders"
              className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <ShoppingCart size={28} className="text-[#a56236]" />

                  <h3 className="mt-4 text-xl font-bold text-[#4a2c1b]">
                    Manage Orders
                  </h3>

                  <p className="mt-2 text-sm text-[#806556]">
                    View customer orders and update delivery status.
                  </p>
                </div>

                <ArrowRight className="text-[#a56236] transition group-hover:translate-x-1" />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;