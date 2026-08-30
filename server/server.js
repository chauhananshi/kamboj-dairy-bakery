// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 5000;

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:5173",
//   })
// );

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Kamboj Dairy & Bakery API is running",
//   });
// });

// app.get("/api/health", (req, res) => {
//   res.json({
//     success: true,
//     message: "Server is healthy",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
























const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const orderRoutes = require("./backend/routes/orderRoutes");
const productRoutes = require("./backend/routes/productRoutes");
const adminRoutes = require("./backend/routes/adminRoutes");
const customerRoutes = require("./backend/routes/customerRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/customer", customerRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Kamboj Dairy & Bakery API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);

    process.exit(1);
  }
};

startServer();