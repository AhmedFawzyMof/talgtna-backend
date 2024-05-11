const Offers = require("../models/Offers.model");
const Categories = require("../models/Categories.model");
const Companies = require("../models/Companies.model");
const Contacts = require("../models/Contacts.model");
const Products = require("../models/Products.model");
const fs = require("fs");

const Home = async (req, res) => {
  try {
    const products = await new Products({}).allProducts();
    const images = [];
    products.forEach((product) => {
      const imageName = product.image;
      const productImage = imageName.split("/product/")[1];
      images.push(productImage);
    });

    //delete all images that's is not in images array from public/img/product folder
    fs.readdir("public/img/product", (err, files) => {
      if (err) {
        console.error(err);
      } else {
        files.forEach((file) => {
          if (!images.includes(file)) {
            fs.unlink(`public/img/product/${file}`, (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log(`Deleted ${file}`);
              }
            });
          }
        });
      }
    });
    const companies = await new Companies({}).getCompanies();
    const offers = await new Offers({}).getAllOffers();
    const categories = await new Categories({}).getCategories();
    res.json({
      offers: offers,
      categories: categories,
      companies: companies,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AddContact = async (req, res) => {
  try {
    const contact = req.body;
    contact.seen = 0;
    const result = await new Contacts(contact).addContact();
    if (result.success) {
      return res.status(200).json(result);
    }

    return res.status(500).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  Home,
  AddContact,
};
