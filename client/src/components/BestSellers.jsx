// // import { useState } from "react";
// // import { Star, ShoppingBag } from "lucide-react";
// // import { useCart } from "../context/useCart";

// // const products = [
// //   {
// //     id: 1,
// //     name: "Chocolate Truffle Cake",
// //     category: "Cakes",
// //     price: 599,
// //     rating: 4.9,
// //     image:
// //       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
// //   },
// //   {
// //     id: 2,
// //     name: "Red Velvet Cake",
// //     category: "Cakes",
// //     price: 699,
// //     rating: 4.8,
// //     image:
// //       "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=800&q=85",
// //   },
// //   {
// //     id: 3,
// //     name: "Fresh Cow Milk",
// //     category: "Dairy",
// //     price: 70,
// //     rating: 4.9,
// //     image:
// //       "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=85",
// //   },
// //   {
// //     id: 4,
// //     name: "Pure Desi Ghee",
// //     category: "Dairy",
// //     price: 650,
// //     rating: 4.9,
// //     image:
// //       "https://images.unsplash.com/photo-1627662166955-4dc1e0c2b8b8?auto=format&fit=crop&w=800&q=85",
// //   },
// //   {
// //     id: 5,
// //     name: "Fresh Cream Pastry",
// //     category: "Pastries",
// //     price: 90,
// //     rating: 4.7,
// //     image:
// //       "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=800&q=85",
// //   },
// //   {
// //     id: 6,
// //     name: "Chocolate Cookies",
// //     category: "Cookies",
// //     price: 180,
// //     rating: 4.8,
// //     image:
// //       "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
// //   },
// //   {
// //     id: 7,
// //     name: "Fresh Paneer",
// //     category: "Dairy",
// //     price: 220,
// //     rating: 4.8,
// //     image:
// //       "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=85",
// //   },
// //   {
// //     id: 8,
// //     name: "Birthday Combo",
// //     category: "Combos",
// //     price: 899,
// //     rating: 4.9,
// //     image:
// //       "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=800&q=85",
// //   },
// // ];

// // const filters = ["All", "Cakes", "Dairy", "Pastries", "Cookies", "Combos"];

// // function BestSellers() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const { addToCart } = useCart();

// //   const filteredProducts =
// //     activeFilter === "All"
// //       ? products
// //       : products.filter((product) => product.category === activeFilter);

// //   return (
// //     <section className="bg-[#f7eee5] py-16 sm:py-20">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

// //         {/* Heading */}
// //         <div className="text-center">
// //           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
// //             Our Most Loved
// //           </p>

// //           <h2 className="mt-3 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl lg:text-5xl">
// //             Best Selling Products
// //           </h2>

// //           <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#806556]">
// //             Handpicked favorites made fresh and loved by our customers.
// //           </p>
// //         </div>

// //         {/* FILTER BUTTONS */}
// //         <div className="mt-8 flex justify-center">
// //           <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
// //             {filters.map((filter) => (
// //               <button
// //                 key={filter}
// //                 onClick={() => setActiveFilter(filter)}
// //                 className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
// //                   activeFilter === filter
// //                     ? "bg-[#4a260f] text-white"
// //                     : "border border-[#d9c4b3] bg-[#fffaf5] text-[#694b39] hover:bg-[#f0dfd0]"
// //                 }`}
// //               >
// //                 {filter}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* PRODUCT GRID */}
// //         <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
// //           {filteredProducts.map((product) => (
// //             <div
// //               key={product.id}
// //               className="group overflow-hidden rounded-2xl bg-[#fffaf5] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
// //             >
// //               {/* IMAGE */}
// //               <div className="relative aspect-[4/5] overflow-hidden">
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
// //                 />

// //                 <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#69402a]">
// //                   {product.category}
// //                 </span>
// //               </div>

// //               {/* PRODUCT DETAILS */}
// //               <div className="p-3 sm:p-4">
// //                 <h3 className="truncate text-sm font-bold text-[#4a2c1b] sm:text-base">
// //                   {product.name}
// //                 </h3>

// //                 <div className="mt-2 flex items-center gap-1">
// //                   <Star
// //                     size={15}
// //                     fill="currentColor"
// //                     className="text-[#c2773d]"
// //                   />

// //                   <span className="text-xs font-medium text-[#806556]">
// //                     {product.rating}
// //                   </span>
// //                 </div>

// //                 <div className="mt-4 flex items-center justify-between gap-2">
// //                   <span className="text-base font-bold text-[#4a260f] sm:text-lg">
// //                     ₹{product.price}
// //                   </span>

// //                   <button
// //                     onClick={() => addToCart(product)}
// //                     className="flex items-center justify-center gap-1 rounded-lg bg-[#4a260f] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#6a3b1f]"
// //                   >
// //                     <ShoppingBag size={15} />
// //                     <span className="hidden sm:inline">Add</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* EMPTY FILTER */}
// //         {filteredProducts.length === 0 && (
// //           <p className="mt-10 text-center text-[#806556]">
// //             No products found.
// //           </p>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // export default BestSellers;

























// import { useState, useEffect, useCallback } from "react";
// import { Star, ShoppingBag } from "lucide-react";
// import { useCart } from "../context/useCart";

// const filters = [
//   "All",
//   "Cakes",
//   "Dairy",
//   "Pastries",
//   "Cookies",
//   "Combos",
// ];

// function BestSellers() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useCart();

//   const fetchProducts = useCallback(async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/products"
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to fetch products"
//         );
//       }

//       setProducts(data.products || []);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const filteredProducts =
//     activeFilter === "All"
//       ? products
//       : products.filter(
//           (product) => product.category === activeFilter
//         );

//   return (
//     <section className="bg-[#f7eee5] py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Our Most Loved
//           </p>

//           <h2 className="mt-3 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl lg:text-5xl">
//             Best Selling Products
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#806556]">
//             Handpicked favorites made fresh and loved by our customers.
//           </p>
//         </div>

//         {/* FILTER BUTTONS */}
//         <div className="mt-8 flex justify-center">
//           <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
//                   activeFilter === filter
//                     ? "bg-[#4a260f] text-white"
//                     : "border border-[#d9c4b3] bg-[#fffaf5] text-[#694b39] hover:bg-[#f0dfd0]"
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* PRODUCT GRID */}
//         <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="group overflow-hidden rounded-2xl bg-[#fffaf5] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//             >
//               {/* IMAGE */}
//               <div className="relative aspect-[4/5] overflow-hidden">
//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="flex h-full w-full items-center justify-center bg-[#ead7c7] text-5xl">
//                     🥛
//                   </div>
//                 )}

//                 <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#69402a]">
//                   {product.category}
//                 </span>
//               </div>

//               {/* PRODUCT DETAILS */}
//               <div className="p-3 sm:p-4">
//                 <h3 className="truncate text-sm font-bold text-[#4a2c1b] sm:text-base">
//                   {product.name}
//                 </h3>

//                 <div className="mt-2 flex items-center gap-1">
//                   <Star
//                     size={15}
//                     fill="currentColor"
//                     className="text-[#c2773d]"
//                   />

//                   <span className="text-xs font-medium text-[#806556]">
//                     4.9
//                   </span>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between gap-2">
//                   <span className="text-base font-bold text-[#4a260f] sm:text-lg">
//                     ₹{product.price}
//                   </span>

//                   <button
//                     onClick={() =>
//                       addToCart({
//                         ...product,
//                         id: product._id,
//                       })
//                     }
//                     className="flex items-center justify-center gap-1 rounded-lg bg-[#4a260f] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#6a3b1f]"
//                   >
//                     <ShoppingBag size={15} />
//                     <span className="hidden sm:inline">Add</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* EMPTY FILTER */}
//         {filteredProducts.length === 0 && (
//           <p className="mt-10 text-center text-[#806556]">
//             No products found.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default BestSellers;


















// import { useState, useEffect, useCallback } from "react";
// import { Star, ShoppingBag } from "lucide-react";
// import { useSearchParams } from "react-router-dom";
// import { useCart } from "../context/useCart";

// const filters = [
//   "All",
//   "Cakes",
//   "Dairy",
//   "Pastries",
//   "Cookies",
//   "Combos",
// ];

// function BestSellers() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const categoryFromUrl = searchParams.get("category") || "All";
//   const searchFromUrl = searchParams.get("search") || "";

//   const [activeFilter, setActiveFilter] = useState(
//     filters.includes(categoryFromUrl) ? categoryFromUrl : "All"
//   );

//   const [searchTerm, setSearchTerm] = useState(searchFromUrl);

//   const [products, setProducts] = useState([]);
//   const { addToCart } = useCart();

//   const fetchProducts = useCallback(async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/products"
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to fetch products"
//         );
//       }

//       setProducts(data.products || []);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   useEffect(() => {
//     const category = searchParams.get("category") || "All";
//     const search = searchParams.get("search") || "";

//     setActiveFilter(
//       filters.includes(category) ? category : "All"
//     );

//     setSearchTerm(search);
//   }, [searchParams]);

//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter);

//     const params = new URLSearchParams(searchParams);

//     if (filter === "All") {
//       params.delete("category");
//     } else {
//       params.set("category", filter);
//     }

//     setSearchParams(params);
//   };

//   const handleSearchChange = (e) => {
//     const value = e.target.value;

//     setSearchTerm(value);

//     const params = new URLSearchParams(searchParams);

//     if (value.trim()) {
//       params.set("search", value);
//     } else {
//       params.delete("search");
//     }

//     setSearchParams(params);
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesCategory =
//       activeFilter === "All" ||
//       product.category === activeFilter;

//     const search = searchTerm.trim().toLowerCase();

//     const matchesSearch =
//       !search ||
//       product.name?.toLowerCase().includes(search) ||
//       product.category?.toLowerCase().includes(search) ||
//       product.description?.toLowerCase().includes(search);

//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section className="bg-[#f7eee5] py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Our Most Loved
//           </p>

//           <h2 className="mt-3 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl lg:text-5xl">
//             Best Selling Products
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#806556]">
//             Handpicked favorites made fresh and loved by our customers.
//           </p>
//         </div>

//         {/* SEARCH */}
//         <div className="mx-auto mt-7 max-w-md">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search cakes, dairy, cookies..."
//             className="w-full rounded-full border border-[#d9c4b3] bg-[#fffaf5] px-5 py-3 text-sm text-[#4a2c1b] outline-none transition placeholder:text-[#a98b79] focus:border-[#8a4f29] focus:ring-2 focus:ring-[#8a4f29]/10"
//           />
//         </div>

//         {/* FILTER BUTTONS */}
//         <div className="mt-8 flex justify-center">
//           <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => handleFilterChange(filter)}
//                 className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
//                   activeFilter === filter
//                     ? "bg-[#4a260f] text-white"
//                     : "border border-[#d9c4b3] bg-[#fffaf5] text-[#694b39] hover:bg-[#f0dfd0]"
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* PRODUCT GRID */}
//         <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="group overflow-hidden rounded-2xl bg-[#fffaf5] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//             >
//               {/* IMAGE */}
//               <div className="relative aspect-[4/5] overflow-hidden">
//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="flex h-full w-full items-center justify-center bg-[#ead7c7] text-5xl">
//                     🥛
//                   </div>
//                 )}

//                 <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#69402a]">
//                   {product.category}
//                 </span>
//               </div>

//               {/* PRODUCT DETAILS */}
//               <div className="p-3 sm:p-4">
//                 <h3 className="truncate text-sm font-bold text-[#4a2c1b] sm:text-base">
//                   {product.name}
//                 </h3>

//                 <div className="mt-2 flex items-center gap-1">
//                   <Star
//                     size={15}
//                     fill="currentColor"
//                     className="text-[#c2773d]"
//                   />

//                   <span className="text-xs font-medium text-[#806556]">
//                     4.9
//                   </span>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between gap-2">
//                   <span className="text-base font-bold text-[#4a260f] sm:text-lg">
//                     ₹{product.price}
//                   </span>

//                   <button
//                     onClick={() =>
//                       addToCart({
//                         ...product,
//                         id: product._id,
//                       })
//                     }
//                     className="flex items-center justify-center gap-1 rounded-lg bg-[#4a260f] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#6a3b1f]"
//                   >
//                     <ShoppingBag size={15} />
//                     <span className="hidden sm:inline">
//                       Add
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* EMPTY FILTER */}
//         {filteredProducts.length === 0 && (
//           <p className="mt-10 text-center text-[#806556]">
//             No products found.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default BestSellers;






















import { useState, useEffect, useCallback } from "react";
import { Star, ShoppingBag } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/useCart";

const filters = [
  "All",
  "Cakes",
  "Dairy",
  "Pastries",
  "Cookies",
  "Combos",
];

function BestSellers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const activeFilter = filters.includes(
    searchParams.get("category")
  )
    ? searchParams.get("category")
    : "All";

  const searchTerm = searchParams.get("search") || "";

  const fetchProducts = useCallback(async () => {
    try {
      // const response = await fetch(
      //   "http://localhost:5000/api/products"
      // );



      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/products`
);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch products"
        );
      }

      setProducts(data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleFilterChange = (filter) => {
    const params = new URLSearchParams(searchParams);

    if (filter === "All") {
      params.delete("category");
    } else {
      params.set("category", filter);
    }

    setSearchParams(params);

    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeFilter === "All" ||
      product.category === activeFilter;

    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      !search ||
      product.name?.toLowerCase().includes(search) ||
      product.category?.toLowerCase().includes(search) ||
      product.description?.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#f7eee5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            Our Most Loved
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#4a2c1b] sm:text-4xl lg:text-5xl">
            Best Selling Products
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#806556]">
            Handpicked favorites made fresh and loved by our customers.
          </p>
        </div>

        {/* SEARCH RESULT */}
        {searchTerm && (
          <p className="mt-5 text-center text-sm font-semibold text-[#8a4f29]">
            Search results for "{searchTerm}"
          </p>
        )}

        {/* FILTER BUTTONS */}
        <div className="mt-8 flex justify-center">
          <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-[#4a260f] text-white"
                    : "border border-[#d9c4b3] bg-[#fffaf5] text-[#694b39] hover:bg-[#f0dfd0]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="group overflow-hidden rounded-2xl bg-[#fffaf5] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#ead7c7] text-5xl">
                    🥛
                  </div>
                )}

                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#69402a]">
                  {product.category}
                </span>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-3 sm:p-4">
                <h3 className="truncate text-sm font-bold text-[#4a2c1b] sm:text-base">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-1">
                  <Star
                    size={15}
                    fill="currentColor"
                    className="text-[#c2773d]"
                  />

                  <span className="text-xs font-medium text-[#806556]">
                    4.9
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-base font-bold text-[#4a260f] sm:text-lg">
                    ₹{product.price}
                  </span>

                  <button
                    onClick={() =>
                      addToCart({
                        ...product,
                        id: product._id,
                      })
                    }
                    className="flex items-center justify-center gap-1 rounded-lg bg-[#4a260f] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#6a3b1f]"
                  >
                    <ShoppingBag size={15} />
                    <span className="hidden sm:inline">
                      Add
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY */}
        {filteredProducts.length === 0 && (
          <p className="mt-10 text-center text-[#806556]">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}

export default BestSellers;