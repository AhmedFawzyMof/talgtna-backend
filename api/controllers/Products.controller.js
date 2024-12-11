const Products = require("../models/Products.model");
const ProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await new Products({ id }).productById();
    res.json({ product: product });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  ProductById,
};
