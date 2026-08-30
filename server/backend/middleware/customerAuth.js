const jwt = require("jsonwebtoken");

const customerAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Customer token missing.",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      // process.env.JWT_SECRET || "kamboj_dairy_secret_key"
      process.env.JWT_SECRET
    );

    req.customer = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized. Invalid customer token.",
    });
  }
};

module.exports = customerAuth;