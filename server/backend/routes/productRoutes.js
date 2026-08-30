// const express = require("express");
// const Product = require("../models/Product");

// const router = express.Router();

// // Get all products
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({
//       createdAt: -1,
//     });

//     res.status(200).json({
//       success: true,
//       count: products.length,
//       products,
//     });
//   } catch (error) {
//     console.error("Failed to fetch products:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch products",
//     });
//   }
// });

// // Add a new product
// router.post("/", async (req, res) => {
//   try {
//     const {
//       name,
//       price,
//       category,
//       image,
//       stock,
//       description,
//     } = req.body;

//     if (!name || price === undefined || !category) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, price and category are required",
//       });
//     }

//     const product = await Product.create({
//       name,
//       price,
//       category,
//       image,
//       stock,
//       description,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Product added successfully",
//       product,
//     });
//   } catch (error) {
//     console.error("Failed to add product:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to add product",
//     });
//   }
// });

// // Update product
// router.put("/:id", async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Product updated successfully",
//       product,
//     });
//   } catch (error) {
//     console.error("Failed to update product:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to update product",
//     });
//   }
// });

// // Delete product
// router.delete("/:id", async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(
//       req.params.id
//     );

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     console.error("Failed to delete product:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to delete product",
//     });
//   }
// });

// module.exports = router;














const express = require("express");
const Product = require("../models/Product");
const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Get all products - PUBLIC
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Failed to fetch products:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
});

// Add a new product - ADMIN ONLY
router.post("/", protectAdmin, async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      image,
      stock,
      description,
    } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, price and category are required",
      });
    }

    const product = await Product.create({
      name,
      price,
      category,
      image,
      stock,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Failed to add product:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to add product",
    });
  }
});

// Update product - ADMIN ONLY
router.put("/:id", protectAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Failed to update product:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
});

// Delete product - ADMIN ONLY
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete product:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
});

module.exports = router;