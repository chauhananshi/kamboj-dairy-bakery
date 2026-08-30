// // const express = require("express");
// // const Order = require("../models/Order");

// // const router = express.Router();

// // // Create a new order
// // router.post("/", async (req, res) => {
// //   try {
// //     const {
// //       customer,
// //       items,
// //       totalAmount,
// //       paymentMethod,
// //     } = req.body;

// //     // Basic validation
// //     if (
// //       !customer ||
// //       !customer.name ||
// //       !customer.phone ||
// //       !customer.address
// //     ) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Customer name, phone and address are required",
// //       });
// //     }

// //     if (!items || items.length === 0) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "At least one product is required",
// //       });
// //     }

// //     if (totalAmount === undefined || totalAmount === null) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Total amount is required",
// //       });
// //     }

// //     const order = await Order.create({
// //       customer,
// //       items,
// //       totalAmount,
// //       paymentMethod: paymentMethod || "Cash on Delivery",
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Order placed successfully",
// //       order,
// //     });
// //   } catch (error) {
// //     console.error("Order creation failed:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to place order",
// //     });
// //   }
// // });


// // // Get all orders
// // router.get("/", async (req, res) => {
// //   try {
// //     const orders = await Order.find().sort({
// //       createdAt: -1,
// //     });

// //     res.status(200).json({
// //       success: true,
// //       count: orders.length,
// //       orders,
// //     });
// //   } catch (error) {
// //     console.error("Failed to fetch orders:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch orders",
// //     });
// //   }
// // });






// // // Update order status
// // router.put("/:id/status", async (req, res) => {
// //   try {
// //     const { orderStatus } = req.body;

// //     const allowedStatuses = [
// //       "Pending",
// //       "Confirmed",
// //       "Preparing",
// //       "Out for Delivery",
// //       "Delivered",
// //     ];

// //     if (!allowedStatuses.includes(orderStatus)) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid order status",
// //       });
// //     }

// //     const order = await Order.findByIdAndUpdate(
// //       req.params.id,
// //       { orderStatus },
// //       { new: true }
// //     );

// //     if (!order) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Order not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Order status updated successfully",
// //       order,
// //     });
// //   } catch (error) {
// //     console.error("Failed to update order status:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to update order status",
// //     });
// //   }
// // });

// // module.exports = router;










































// // const express = require("express");
// // const Order = require("../models/Order");

// // const router = express.Router();

// // // Create a new order
// // router.post("/", async (req, res) => {
// //   try {
// //     const {
// //       customer,
// //       items,
// //       totalAmount,
// //       paymentMethod,
// //     } = req.body;

// //     if (
// //       !customer ||
// //       !customer.name ||
// //       !customer.phone ||
// //       !customer.address
// //     ) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Customer name, phone and address are required",
// //       });
// //     }

// //     if (!items || items.length === 0) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "At least one product is required",
// //       });
// //     }

// //     if (totalAmount === undefined || totalAmount === null) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Total amount is required",
// //       });
// //     }

// //     const order = await Order.create({
// //       customer,
// //       items,
// //       totalAmount,
// //       paymentMethod: paymentMethod || "Cash on Delivery",
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Order placed successfully",
// //       order,
// //     });
// //   } catch (error) {
// //     console.error("Order creation failed:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to place order",
// //     });
// //   }
// // });

// // // Get all orders
// // router.get("/", async (req, res) => {
// //   try {
// //     const orders = await Order.find().sort({
// //       createdAt: -1,
// //     });

// //     res.status(200).json({
// //       success: true,
// //       count: orders.length,
// //       orders,
// //     });
// //   } catch (error) {
// //     console.error("Failed to fetch orders:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch orders",
// //     });
// //   }
// // });

// // // Track order using Order ID and Phone Number
// // router.get("/track/:orderId/:phone", async (req, res) => {
// //   try {
// //     const { orderId, phone } = req.params;

// //     const order = await Order.findOne({
// //       _id: orderId,
// //       "customer.phone": phone,
// //     });

// //     if (!order) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Order not found. Please check your Order ID and phone number.",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       order,
// //     });
// //   } catch (error) {
// //     console.error("Order tracking failed:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Unable to track order",
// //     });
// //   }
// // });

// // // Update order status
// // router.put("/:id/status", async (req, res) => {
// //   try {
// //     const { orderStatus } = req.body;

// //     const allowedStatuses = [
// //       "Pending",
// //       "Confirmed",
// //       "Preparing",
// //       "Out for Delivery",
// //       "Delivered",
// //     ];

// //     if (!allowedStatuses.includes(orderStatus)) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Invalid order status",
// //       });
// //     }

// //     const order = await Order.findByIdAndUpdate(
// //       req.params.id,
// //       { orderStatus },
// //       { new: true }
// //     );

// //     if (!order) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Order not found",
// //       });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Order status updated successfully",
// //       order,
// //     });
// //   } catch (error) {
// //     console.error("Failed to update order status:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to update order status",
// //     });
// //   }
// // });

// // module.exports = router;




























// const express = require("express");
// const jwt = require("jsonwebtoken");
// const Order = require("../models/Order");
// // const adminAuth = require("../middleware/adminAuth");
// const protectAdmin = require("../middleware/authMiddleware");
// const customerAuth = require("../middleware/customerAuth");

// const router = express.Router();


// // Create a new order
// // router.post("/", async (req, res) => {
// //   try {
// //     const {
// //       customer,
// //       items,
// //       totalAmount,
// //       paymentMethod,
// //     } = req.body;

// //     if (
// //       !customer ||
// //       !customer.name ||
// //       !customer.phone ||
// //       !customer.address
// //     ) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Customer name, phone and address are required",
// //       });
// //     }

// //     if (!items || items.length === 0) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "At least one product is required",
// //       });
// //     }

// //     if (totalAmount === undefined || totalAmount === null) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Total amount is required",
// //       });
// //     }

// //     const order = await Order.create({
// //       customer,
// //       items,
// //       totalAmount,
// //       paymentMethod: paymentMethod || "Cash on Delivery",
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Order placed successfully",
// //       order,
// //     });
// //   } catch (error) {
// //     console.error("Order creation failed:", error.message);

// //     res.status(500).json({
// //       success: false,
// //       message: "Failed to place order",
// //     });
// //   }
// // });






// // Create a new order
// router.post("/", async (req, res) => {
//   try {
//     const {
//       customer,
//       items,
//       totalAmount,
//       paymentMethod,
//     } = req.body;

//     if (
//       !customer ||
//       !customer.name ||
//       !customer.phone ||
//       !customer.address
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Customer name, phone and address are required",
//       });
//     }

//     if (!items || items.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "At least one product is required",
//       });
//     }

//     if (totalAmount === undefined || totalAmount === null) {
//       return res.status(400).json({
//         success: false,
//         message: "Total amount is required",
//       });
//     }

//     // Read customer token if available
//     let customerId = null;

//     try {
//       const authHeader = req.headers.authorization;

//       if (authHeader && authHeader.startsWith("Bearer ")) {
//         const token = authHeader.split(" ")[1];

//         const decoded = jwt.verify(
//           token,
//           process.env.JWT_SECRET || "kamboj_dairy_secret_key"
//         );

//         customerId = decoded.id;
//       }
//     } catch (tokenError) {
//       // Guest order is still allowed
//       customerId = null;
//     }

//     const order = await Order.create({
//       customer: {
//         customerId,
//         name: customer.name,
//         phone: customer.phone,
//         address: customer.address,
//       },
//       items,
//       totalAmount,
//       paymentMethod: paymentMethod || "Cash on Delivery",
//     });

//     res.status(201).json({
//       success: true,
//       message: "Order placed successfully",
//       order,
//     });
//   } catch (error) {
//     console.error("Order creation failed:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to place order",
//     });
//   }
// });

// // Track order using Order ID and Phone Number
// router.get("/track/:orderId/:phone", async (req, res) => {
//   try {
//     const { orderId, phone } = req.params;

//     const order = await Order.findOne({
//       _id: orderId,
//       "customer.phone": phone,
//     });

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found. Please check your Order ID and phone number.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     console.error("Order tracking failed:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Unable to track order",
//     });
//   }
// });

// // Get all orders - ADMIN ONLY
// // router.get("/", adminAuth, async (req, res) => {
//   router.get("/", protectAdmin, async (req, res) => {
//   try {
//     const orders = await Order.find().sort({
//       createdAt: -1,
//     });

//     res.status(200).json({
//       success: true,
//       count: orders.length,
//       orders,
//     });
//   } catch (error) {
//     console.error("Failed to fetch orders:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch orders",
//     });
//   }
// });

// // Update order status - ADMIN ONLY
// // router.put("/:id/status", adminAuth, async (req, res) => {
// router.put("/:id/status", protectAdmin, async (req, res) => {
//   try {
//     const { orderStatus } = req.body;

//     const allowedStatuses = [
//       "Pending",
//       "Confirmed",
//       "Preparing",
//       "Out for Delivery",
//       "Delivered",
//     ];

//     if (!allowedStatuses.includes(orderStatus)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid order status",
//       });
//     }

//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { orderStatus },
//       { new: true }
//     );

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Order status updated successfully",
//       order,
//     });
//   } catch (error) {
//     console.error("Failed to update order status:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to update order status",
//     });
//   }
// });

// module.exports = router;





















const express = require("express");
const jwt = require("jsonwebtoken");
const Order = require("../models/Order");

const protectAdmin = require("../middleware/authMiddleware");
const customerAuth = require("../middleware/customerAuth");

const router = express.Router();

// Create a new order
router.post("/", async (req, res) => {
  try {
    const {
      customer,
      items,
      totalAmount,
      paymentMethod,
    } = req.body;

    if (
      !customer ||
      !customer.name ||
      !customer.phone ||
      !customer.address
    ) {
      return res.status(400).json({
        success: false,
        message: "Customer name, phone and address are required",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product is required",
      });
    }

    if (totalAmount === undefined || totalAmount === null) {
      return res.status(400).json({
        success: false,
        message: "Total amount is required",
      });
    }

    // Logged-in customer ka ID read karo
    // Guest order bhi allowed rahega
    let customerId = null;

    try {
      const authHeader = req.headers.authorization;

      if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET || "kamboj_dairy_secret_key"
        );

        customerId = decoded.id;
      }
    } catch (tokenError) {
      // Invalid/missing customer token hone par
      // guest order allow rahega
      customerId = null;
    }

    const order = await Order.create({
      customer: {
        customerId,
        name: customer.name,
        phone: customer.phone,
        address: customer.address,
      },
      items,
      totalAmount,
      paymentMethod: paymentMethod || "Cash on Delivery",
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Order creation failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to place order",
    });
  }
});

// Get logged-in customer's orders
router.get("/my-orders", customerAuth, async (req, res) => {
  try {
    const orders = await Order.find({
      "customer.customerId": req.customer.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error(
      "Failed to fetch customer orders:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch your orders",
    });
  }
});

// Track order using Order ID and Phone Number
router.get("/track/:orderId/:phone", async (req, res) => {
  try {
    const { orderId, phone } = req.params;

    const order = await Order.findOne({
      _id: orderId,
      "customer.phone": phone,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message:
          "Order not found. Please check your Order ID and phone number.",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Order tracking failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to track order",
    });
  }
});

// Get all orders - ADMIN ONLY
router.get("/", protectAdmin, async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Failed to fetch orders:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
});

// Update order status - ADMIN ONLY
router.put("/:id/status", protectAdmin, async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const allowedStatuses = [
      "Pending",
      "Confirmed",
      "Preparing",
      "Out for Delivery",
      "Delivered",
    ];

    if (!allowedStatuses.includes(orderStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status",
      });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error(
      "Failed to update order status:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to update order status",
    });
  }
});

module.exports = router;