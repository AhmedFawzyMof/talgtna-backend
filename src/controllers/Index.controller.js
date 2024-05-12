const Offers = require("../models/Offers.model");
const Categories = require("../models/Categories.model");
const Companies = require("../models/Companies.model");
const Contacts = require("../models/Contacts.model");

const Home = async (req, res) => {
  try {
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
