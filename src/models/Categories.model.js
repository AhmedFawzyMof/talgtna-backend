const db = require("../config/database").db;

module.exports = class Categories {
  constructor(category) {
    this.category = category;
  }

  getCategories() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM `Categories`", [], (err, rows) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  addCategory() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Categories` (`name`) VALUES (?)",
        [this.category.name],
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

  editCategory() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE `Categories` SET `name_ar` = ? WHERE `id` = ?",
        [this.category.name, this.category.id],
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
