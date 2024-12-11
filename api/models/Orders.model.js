const db = require("../config/database").db;
const { v4: uuidv4 } = require("uuid");

module.exports = class Orders {
  constructor(order) {
    this.order = order;
  }

  addOrder() {
    return new Promise((resolve, reject) => {
      this.order.id = uuidv4();
      this.order.date = new Date();
      db.run(
        "INSERT INTO `Orders` (`id`, `user`, `delivered`, `paid`, `date`, `discount`, `city`, `method`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          this.order.id,
          this.order.user,
          0,
          0,
          this.order.date.toISOString(),
          JSON.stringify(this.order.discount),
          this.order.city,
          this.order.method,
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

  getUserOrders() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM `Orders` WHERE user = ?",
        [this.order.user],
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

  updateOrder(delivered, value) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Orders SET ${
          delivered ? "delivered" : "paid"
        } = ? WHERE id = ?`,
        [value, this.order.id],
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
};
