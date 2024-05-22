const Users = require("../models/Users.model");
const Products = require("../models/Products.model");
const UserId = require("../utils/getUserId");

const AddToFav = async (req, res) => {
  try {
    const { user, product } = req.body;

    const id = UserId.UserId(user);

    const isRegister = await new Users({ id: id }).findUser();
    if (!isRegister.success) {
      res.json({ success: false });
      return;
    }

    const inFavorite = await new Products({ id: product }).favoriteProduct(id);

    if (inFavorite) {
      res.json({ success: false });
      return;
    }

    const addToFav = await new Products({ id: product }).addFavoriteProducts(
      id
    );
    if (!addToFav.success) {
      res.json({ success: false });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const GetFavorites = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const id = UserId.UserId(token);

    const products = await new Products({}).favoriteProducts(id);

    res.json({ products: products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const GetCoupons = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const id = UserId.UserId(token);
    const coupons = await new Users({ id: id }).userCoupons();
    res.json({ coupons: coupons });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  AddToFav,
  GetFavorites,
  GetCoupons,
};
