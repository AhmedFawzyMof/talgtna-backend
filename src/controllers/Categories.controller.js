const Offers = require("../models/Offers.model");
const Categories = require("../models/Categories.model");
const Products = require("../models/Products.model");
const ProductByCategory = async (req, res) => {
  try {
    const name = req.params.name;
    const offers = await new Offers({}).getAllOffers();
    const categories = await new Categories({}).getCategories();
    const products = await new Products({
      category: name,
    }).productsFromCategory();

    res.json({
      categories: categories,
      offers: offers,
      products: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  ProductByCategory,
};
