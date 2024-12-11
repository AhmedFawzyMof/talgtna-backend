const db = require("../config/database").db;

module.exports = class Products {
  constructor(product) {
    this.product = product;
  }

  allProducts() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM `Products`", [], (err, rows) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  productsFromCategory() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Products` WHERE category = ? ORDER BY available DESC",
        [this.product.category],
        (err, rows) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  favoriteProduct(userId) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `favourite` WHERE user = ? AND product = ?",
        [userId, this.product.id],
        (err, row) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  }

  productsFromCompany() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Products` WHERE company = ? ORDER BY available DESC",
        [this.product.company],
        (err, rows) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  addProduct() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Products`(`name`, `description`, `category`, `company`, `price`, `image`, `available`, `buyingprice`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          this.product.name,
          this.product.description,
          this.product.category,
          this.product.company,
          this.product.price,
          this.product.image,
          this.product.available,
          this.product.buyingprice,
        ],
        function (err) {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve({ success: true, id: this.lastID });
          }
        }
      );
    });
  }

  productBySearch() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Products` WHERE name LIKE ? ORDER BY available DESC",
        ["%" + this.product.name + "%"],
        (err, rows) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  editProduct() {
    return new Promise((resolve, reject) => {
      // Assuming `this.product` is an object with keys and values to update
      const updates = Object.entries(this.product)
        .map(([key, value]) => `${key} = ?`)
        .join(", ");
      const values = Object.values(this.product);
      values.push(this.product.id); // Add the product ID as the last parameter for the WHERE clause

      db.run(
        `UPDATE \`Products\` SET ${updates} WHERE \`id\` = ?`,
        values,
        function (err) {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve({ success: true, changes: this.changes });
          }
        }
      );
    });
  }

  addFavoriteProducts(userId) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `favourite` (`product`, `user`) VALUES (?, ?)",
        [this.product.id, userId],
        function (err) {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve({ success: true, id: this.lastID });
          }
        }
      );
    });
  }

  favoriteProducts(userId) {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT favourite.product, favourite.user, Products.name, Products.image, Products.price, Products.available, Products.id FROM `favourite` INNER JOIN `Products` ON favourite.product = Products.id WHERE user = ?",
        [userId],
        (err, rows) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  productById() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `Products` WHERE id = ?",
        [this.product.id],
        (err, row) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  }
};
