// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCart = localStorage.getItem("kamboj-cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("kamboj-cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems((currentItems) => {
//       const existingItem = currentItems.find(
//         (item) => item.id === product.id
//       );

//       if (existingItem) {
//         return currentItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...currentItems, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((currentItems) =>
//       currentItems.filter((item) => item.id !== productId)
//     );
//   };

//   const updateQuantity = (productId, type) => {
//     setCartItems((currentItems) =>
//       currentItems
//         .map((item) => {
//           if (item.id !== productId) return item;

//           const newQuantity =
//             type === "increase"
//               ? item.quantity + 1
//               : item.quantity - 1;

//           return { ...item, quantity: newQuantity };
//         })
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const cartCount = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const cartTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         cartCount,
//         cartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }







import { createContext } from "react";

const CartContext = createContext(null);

export default CartContext;