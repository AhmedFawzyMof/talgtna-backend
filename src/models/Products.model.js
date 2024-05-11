const database = require("../config/database");
const db = database.promise();

module.exports = class Products {
  constructor(product) {
    this.product = product;
  }

  async allProducts() {
    const [Products] = await db.query("SELECT * FROM `Products`");

    return Products;
  }

  async productsFromCategory() {
    try {
      const [Products] = await db.query(
        "SELECT * FROM `Products` WHERE category = ? ORDER BY available DESC",
        [this.product.category]
      );

      return Products;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async favoriteProduct(userId) {
    try {
      const [Products] = await db.query(
        "SELECT * FROM `favourite` WHERE (user, product) = (?, ?)",
        [userId, this.product.id]
      );

      return Products[0];
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async productsFromCompany() {
    try {
      const [Products] = await db.query(
        "SELECT * FROM `Products` WHERE compony = ? ORDER BY available DESC",
        [this.product.company]
      );

      return Products;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async addProduct() {
    try {
      await db.query(
        "INSERT INTO `Products`(`name`, `description`, `category`, `compony`, `price`, `image`, `available`,,`buingprice`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          this.product.name,
          this.product.description,
          this.product.category,
          this.product.compony,
          this.product.price,
          this.product.image,
          this.product.available,
          this.product.offer,
          this.product.buingprice,
        ]
      );

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async productBySearch() {
    try {
      const [Products] = await db.query(
        "SELECT * FROM `Products` WHERE name LIKE ? ORDER BY available DESC",
        ["%" + this.product.name + "%"]
      );

      return Products;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async editProduct() {
    try {
      for (const [key, value] of Object.entries(this.product)) {
        if (value !== undefined) {
          const sql = "UPDATE `Products` SET ?=? WHERE `Products`.`id` = ?";
          await db.query(sql, [key, value, this.product.id]);

          return { success: true };
        }

        return { success: false };
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async addfavoritePeoducts(userId) {
    try {
      await db.query("INSERT INTO favourite (`product`, `user`) VALUES(?,?)", [
        this.product.id,
        userId,
      ]);

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async favoriteProducts(userId) {
    try {
      const [Products] = await db.query(
        "SELECT favourite.product, favourite.user, Products.name, Products.image, Products.price, Products.available, Products.id FROM favourite INNER JOIN Products ON favourite.product=Products.id WHERE user = ?;",
        [userId]
      );

      return Products;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async productById() {
    try {
      const [Products] = await db.query(
        "SELECT * FROM `Products` WHERE id = ?",
        [this.product.id]
      );
      return Products[0];
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
