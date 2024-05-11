const database = require("../config/database");
const db = database.promise();

module.exports = class OrderProducts {
  constructor(orderproducts) {
    this.orderproducts = orderproducts;
  }

  async addOrderProducts() {
    try {
      await db.query(
        "INSERT INTO `OrderProducts` (`product`, `order`, `quantity`) VALUES (?, ?, ?)",
        [
          this.orderproducts.product,
          this.orderproducts.order,
          this.orderproducts.quantity,
        ]
      );

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async orderTotal() {
    try {
      const [total] = await db.query(
        "SELECT SUM(Products.price * OrderProducts.quantity) AS total_price FROM OrderProducts INNER JOIN Products ON product = Products.id WHERE `order` = ?",
        [this.orderproducts.order]
      );
      return total;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async getOrderProducts() {
    try {
      const [products] = await db.query(
        "SELECT OrderProducts.quantity, OrderProducts.`order`, Products.id, Products.name, Products.image, Products.price  FROM OrderProducts INNER JOIN Products ON OrderProducts.product=Products.id  WHERE OrderProducts.`order` = ?",
        [this.orderproducts.order]
      );
      return products;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
