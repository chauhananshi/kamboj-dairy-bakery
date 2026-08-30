const jwt = require("jsonwebtoken");

const protectAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Token missing.",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      // process.env.JWT_SECRET || "kamboj_dairy_secret_key"
      process.env.JWT_SECRET
    );

    req.admin = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized. Invalid token.",
    });
  }
};

module.exports = protectAdmin;