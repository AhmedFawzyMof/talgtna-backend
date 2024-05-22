const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config();
const corsOptions = {
  origin: "*", // Make sure this matches the request origin exactly
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors(corsOptions));
//Routes
const indexRoutes = require("./routes/Index.route");
const companyRoutes = require("./routes/Companies.route");
const productRoutes = require("./routes/Products.route");
const categoryRoutes = require("./routes/Categories.route");
const orderRoutes = require("./routes/Orders.route");
const userRoutes = require("./routes/Users.route");

app.use("/api", indexRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/user", userRoutes);

// Redirect all non-API GET requests to React app
app.get("*", (req, res, next) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(
      path.resolve(__dirname, "..", "public/frontend", "index.html")
    );
  } else {
    next(); // Continue to the next middleware/route handler
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
