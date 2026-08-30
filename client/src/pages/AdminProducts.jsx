// import { useState, useEffect, useCallback } from "react";
// import {
//   Package,
//   Plus,
//   Pencil,
//   Trash2,
//   RefreshCw,
//   X,
// } from "lucide-react";

// const initialForm = {
//   name: "",
//   price: "",
//   category: "",
//   image: "",
//   stock: "",
//   description: "",
// };

// function AdminProducts() {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState(initialForm);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const fetchProducts = useCallback(async () => {
//     try {
//       setLoading(true);

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
//       alert(error.message || "Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const openAddForm = () => {
//     setEditingProduct(null);
//     setFormData(initialForm);
//     setShowForm(true);
//   };

//   const openEditForm = (product) => {
//     setEditingProduct(product);

//     setFormData({
//       name: product.name || "",
//       price: product.price || "",
//       category: product.category || "",
//       image: product.image || "",
//       stock: product.stock || "",
//       description: product.description || "",
//     });

//     setShowForm(true);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//     setEditingProduct(null);
//     setFormData(initialForm);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setSaving(true);

//       const url = editingProduct
//         ? `http://localhost:5000/api/products/${editingProduct._id}`
//         : "http://localhost:5000/api/products";

//       const method = editingProduct ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           price: Number(formData.price),
//           stock: Number(formData.stock),
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to save product"
//         );
//       }

//       await fetchProducts();
//       closeForm();
//     } catch (error) {
//       alert(error.message || "Failed to save product");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmed) return;

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/products/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to delete product"
//         );
//       }

//       await fetchProducts();
//     } catch (error) {
//       alert(error.message || "Failed to delete product");
//     }
//   };

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
//                 Product Management
//               </h1>
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={fetchProducts}
//               className="flex items-center gap-2 rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-2.5 text-sm font-bold text-[#69402a]"
//             >
//               <RefreshCw size={16} />
//               Refresh
//             </button>

//             <button
//               onClick={openAddForm}
//               className="flex items-center gap-2 rounded-xl bg-[#4a260f] px-4 py-2.5 text-sm font-bold text-white"
//             >
//               <Plus size={17} />
//               Add Product
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MAIN */}
//       <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
//             Inventory Management
//           </p>

//           <h2 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
//             All Products
//           </h2>

//           <p className="mt-2 text-sm text-[#806556]">
//             Add, edit and manage your bakery and dairy products.
//           </p>
//         </div>

//         {loading ? (
//           <div className="rounded-2xl border border-[#ead9cb] bg-white p-10 text-center">
//             Loading products...
//           </div>
//         ) : products.length === 0 ? (
//           <div className="rounded-2xl border border-[#ead9cb] bg-white p-10 text-center">
//             <h3 className="text-xl font-bold text-[#4a2c1b]">
//               No Products Yet
//             </h3>

//             <button
//               onClick={openAddForm}
//               className="mt-4 rounded-xl bg-[#4a260f] px-5 py-3 font-bold text-white"
//             >
//               Add Your First Product
//             </button>
//           </div>
//         ) : (
//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="overflow-hidden rounded-2xl border border-[#ead9cb] bg-white shadow-sm"
//               >
//                 <div className="h-52 bg-[#ead7c7]">
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <div className="flex h-full items-center justify-center text-6xl">
//                       🥛
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-5">
//                   <div className="flex items-start justify-between gap-3">
//                     <div>
//                       <h3 className="text-lg font-bold text-[#4a2c1b]">
//                         {product.name}
//                       </h3>

//                       <span className="mt-2 inline-block rounded-full bg-[#f7eee5] px-3 py-1 text-xs font-bold text-[#8a4f29]">
//                         {product.category}
//                       </span>
//                     </div>

//                     <p className="text-xl font-bold text-[#4a260f]">
//                       ₹{product.price}
//                     </p>
//                   </div>

//                   <p className="mt-4 text-sm text-[#806556]">
//                     Stock:{" "}
//                     <span className="font-bold text-[#4a2c1b]">
//                       {product.stock}
//                     </span>
//                   </p>

//                   {product.description && (
//                     <p className="mt-3 text-sm text-[#806556]">
//                       {product.description}
//                     </p>
//                   )}

//                   <div className="mt-5 flex gap-3">
//                     <button
//                       onClick={() => openEditForm(product)}
//                       className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#d9c4b3] py-2.5 text-sm font-bold text-[#69402a]"
//                     >
//                       <Pencil size={16} />
//                       Edit
//                     </button>

//                     <button
//                       onClick={() => deleteProduct(product._id)}
//                       className="flex items-center justify-center rounded-xl border border-red-200 px-4 text-red-600"
//                     >
//                       <Trash2 size={17} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* ADD / EDIT MODAL */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6">
//             <div className="flex items-center justify-between">
//               <h2 className="font-serif text-2xl font-bold text-[#4a2c1b]">
//                 {editingProduct
//                   ? "Edit Product"
//                   : "Add New Product"}
//               </h2>

//               <button
//                 onClick={closeForm}
//                 className="rounded-lg p-2 hover:bg-[#f7eee5]"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="mt-6 grid gap-5"
//             >
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Product Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none focus:border-[#8a4f29]"
//               />

//               <div className="grid gap-5 sm:grid-cols-2">
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   required
//                   className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
//                 />

//                 <input
//                   type="number"
//                   name="stock"
//                   placeholder="Stock"
//                   value={formData.stock}
//                   onChange={handleChange}
//                   required
//                   className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
//                 />
//               </div>

//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
//               >
//                 <option value="">Select Category</option>
//                 <option value="Cakes">Cakes</option>
//                 <option value="Dairy">Dairy</option>
//                 <option value="Pastries">Pastries</option>
//                 <option value="Cookies">Cookies</option>
//                 <option value="Combos">Combos</option>
//               </select>

//               <input
//                 type="text"
//                 name="image"
//                 placeholder="Product Image URL"
//                 value={formData.image}
//                 onChange={handleChange}
//                 className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
//               />

//               <textarea
//                 name="description"
//                 placeholder="Product Description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 rows="4"
//                 className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
//               />

//               <button
//                 type="submit"
//                 disabled={saving}
//                 className="rounded-xl bg-[#4a260f] py-3.5 font-bold text-white disabled:opacity-60"
//               >
//                 {saving
//                   ? "Saving..."
//                   : editingProduct
//                   ? "Update Product"
//                   : "Add Product"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminProducts;


























import { useState, useEffect } from "react";
import {
  Package,
  Plus,
  Pencil,
  Trash2,
  RefreshCw,
  X,
} from "lucide-react";

// const API_URL = "http://localhost:5000/api/products";
const API_URL = `${import.meta.env.VITE_API_URL}/api/products`;

const initialForm = {
  name: "",
  price: "",
  category: "",
  image: "",
  stock: "",
  description: "",
};

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch products");
      }

      setProducts(data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      alert(error.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  fetchProducts();
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const openAddForm = () => {
    setEditingProduct(null);
    setFormData(initialForm);
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name || "",
      price: product.price || "",
      category: product.category || "",
      image: product.image || "",
      stock: product.stock || "",
      description: product.description || "",
    });

    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingProduct(null);
    setFormData(initialForm);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setSaving(true);

  //     const token =
  //       localStorage.getItem("adminToken") ||
  //       localStorage.getItem("token");

  //     if (!token) {
  //       throw new Error("Admin token not found. Please login again.");
  //     }

  //     const url = editingProduct
  //       ? `${API_URL}/${editingProduct._id}`
  //       : API_URL;

  //     const method = editingProduct ? "PUT" : "POST";

  //     const response = await fetch(url, {
  //       method,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         ...formData,
  //         price: Number(formData.price),
  //         stock: Number(formData.stock),
  //       }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || "Failed to save product");
  //     }

  //     await fetchProducts();
  //     closeForm();
  //   } catch (error) {
  //     alert(error.message || "Failed to save product");
  //   } finally {
  //     setSaving(false);
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setSaving(true);

    const token =
      localStorage.getItem("adminToken") ||
      localStorage.getItem("token");

    if (!token) {
      throw new Error("Admin token not found. Please login again.");
    }

    // UPDATE
    if (editingProduct) {
      if (!editingProduct._id) {
        throw new Error("Product ID not found.");
      }

      const response = await fetch(
        `${API_URL}/${editingProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: formData.name,
            price: Number(formData.price),
            category: formData.category,
            image: formData.image,
            stock: Number(formData.stock),
            description: formData.description,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update product"
        );
      }

      await fetchProducts();
      closeForm();
      return;
    }

    // ADD
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        image: formData.image,
        stock: Number(formData.stock),
        description: formData.description,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to add product"
      );
    }

    await fetchProducts();
    closeForm();
  } catch (error) {
    console.error("Product save error:", error);
    alert(error.message || "Failed to save product");
  } finally {
    setSaving(false);
  }
};







  const deleteProduct = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      const token =
        localStorage.getItem("adminToken") ||
        localStorage.getItem("token");

      if (!token) {
        throw new Error("Admin token not found. Please login again.");
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete product");
      }

      await fetchProducts();
    } catch (error) {
      alert(error.message || "Failed to delete product");
    }
  };

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
                Product Management
              </h1>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={fetchProducts}
              className="flex items-center gap-2 rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4 py-2.5 text-sm font-bold text-[#69402a]"
            >
              <RefreshCw size={16} />
              Refresh
            </button>

            <button
              onClick={openAddForm}
              className="flex items-center gap-2 rounded-xl bg-[#4a260f] px-4 py-2.5 text-sm font-bold text-white"
            >
              <Plus size={17} />
              Add Product
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            Inventory Management
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
            All Products
          </h2>

          <p className="mt-2 text-sm text-[#806556]">
            Add, edit and manage your bakery and dairy products.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-[#ead9cb] bg-white p-10 text-center">
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-[#ead9cb] bg-white p-10 text-center">
            <h3 className="text-xl font-bold text-[#4a2c1b]">
              No Products Yet
            </h3>

            <button
              onClick={openAddForm}
              className="mt-4 rounded-xl bg-[#4a260f] px-5 py-3 font-bold text-white"
            >
              Add Your First Product
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product._id}
                className="overflow-hidden rounded-2xl border border-[#ead9cb] bg-white shadow-sm"
              >
                <div className="h-52 bg-[#ead7c7]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-6xl">
                      🥛
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#4a2c1b]">
                        {product.name}
                      </h3>

                      <span className="mt-2 inline-block rounded-full bg-[#f7eee5] px-3 py-1 text-xs font-bold text-[#8a4f29]">
                        {product.category}
                      </span>
                    </div>

                    <p className="text-xl font-bold text-[#4a260f]">
                      ₹{product.price}
                    </p>
                  </div>

                  <p className="mt-4 text-sm text-[#806556]">
                    Stock:{" "}
                    <span className="font-bold text-[#4a2c1b]">
                      {product.stock}
                    </span>
                  </p>

                  {product.description && (
                    <p className="mt-3 text-sm text-[#806556]">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={() => openEditForm(product)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#d9c4b3] py-2.5 text-sm font-bold text-[#69402a]"
                    >
                      <Pencil size={16} />
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="flex items-center justify-center rounded-xl border border-red-200 px-4 text-red-600"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ADD / EDIT MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-[#4a2c1b]">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>

              <button
                onClick={closeForm}
                className="rounded-lg p-2 hover:bg-[#f7eee5]"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none focus:border-[#8a4f29]"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
                />

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
                />
              </div>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
              >
                <option value="">Select Category</option>
                <option value="Cakes">Cakes</option>
                <option value="Dairy">Dairy</option>
                <option value="Pastries">Pastries</option>
                <option value="Cookies">Cookies</option>
                <option value="Combos">Combos</option>
              </select>

              <input
                type="text"
                name="image"
                placeholder="Product Image URL"
                value={formData.image}
                onChange={handleChange}
                className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
              />

              <textarea
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="rounded-xl border border-[#ddcbbd] px-4 py-3 outline-none"
              />

              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-[#4a260f] py-3.5 font-bold text-white disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingProduct
                  ? "Update Product"
                  : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProducts;