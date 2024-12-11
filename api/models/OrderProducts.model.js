const db = require("../config/database").db;

module.exports = class OrderProducts {
  constructor(orderproducts) {
    this.orderproducts = orderproducts;
  }

  addOrderProducts() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `OrderProducts` (`product`, `order`, `quantity`) VALUES (?, ?, ?)",
        [
          this.orderproducts.product,
          this.orderproducts.order,
          this.orderproducts.quantity,
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

  orderTotal() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT SUM(Products.price * OrderProducts.quantity) AS total_price FROM OrderProducts INNER JOIN Products ON OrderProducts.product = Products.id WHERE OrderProducts.order = ?",
        [this.orderproducts.order],
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

  getOrderProducts() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT OrderProducts.quantity, OrderProducts.order, Products.id, Products.name, Products.image, Products.price FROM OrderProducts INNER JOIN Products ON OrderProducts.product = Products.id WHERE OrderProducts.order = ?",
        [this.orderproducts.order],
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
};
