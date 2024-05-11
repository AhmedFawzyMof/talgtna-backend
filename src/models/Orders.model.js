const database = require("../config/database");
const db = database.promise();
const { v4: uuidv4 } = require("uuid");

module.exports = class Orders {
  constructor(order) {
    this.order = order;
  }

  async addOrder() {
    try {
      this.order.id = uuidv4();
      this.order.date = new Date();
      await db.query(
        "INSERT INTO `Orders` (`id`, `user`, `delivered`, `paid`, `date`, `discount`, `city`, `method`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          this.order.id,
          this.order.user,
          0,
          0,
          this.order.date,
          JSON.stringify(this.order.discount),
          this.order.city,
          this.order.method,
        ]
      );

      return { success: true, id: this.order.id };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async getUserOrders() {
    try {
      const [orders] = await db.query("SELECT * FROM `Orders` WHERE user = ?", [
        this.order.user,
      ]);
      return orders;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async updateOrder(delivered, value) {
    try {
      await db.query(
        `UPDATE Orders SET ${
          delivered === true ? "delivered" : "paid"
        } = ? WHERE id = ?`,
        [value, this.order.id]
      );

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
