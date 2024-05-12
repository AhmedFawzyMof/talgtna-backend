const db = require("../config/database").db;

module.exports = class Companies {
  constructor(company) {
    this.company = company;
  }

  getCompanies() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM `Companies`", [], (err, rows) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  addCompany() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Companies` (`name`, `image`) VALUES (?, ?)",
        [this.company.name, this.company.image],
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

  editCompany() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE `Companies` SET `name` = ?, `image` = ? WHERE `id` = ?",
        [this.company.name, this.company.image, this.company.id],
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

  companyByName() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM `Companies` WHERE `name` = ?",
        [this.company.name],
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
