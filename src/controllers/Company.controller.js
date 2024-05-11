const Companies = require("../models/Companies.model");
const Products = require("../models/Products.model");

const CompanyByName = async (req, res) => {
  try {
    const name = req.params.name;
    const company = await new Companies({ name: name }).companyByName();
    const products = await new Products({
      company: company.name,
    }).productsFromCompany();

    res.json({ company: company, products: products });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  CompanyByName,
};
