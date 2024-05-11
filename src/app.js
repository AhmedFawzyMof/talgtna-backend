const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config();
const corsOptions = {
  origin: "https://talgtna.vercel.app/", // Make sure this matches the request origin exactly
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

app.use("/", indexRoutes);
app.use("/company", companyRoutes);
app.use("/products", productRoutes);
app.use("/category", categoryRoutes);
app.use("/order", orderRoutes);
app.use("/user", userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
