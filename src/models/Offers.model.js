const db = require("../config/database").db;

module.exports = class Offers {
  constructor(offer) {
    this.offer = offer;
  }

  getAllOffers() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM `Offer`", [], (err, rows) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  addOffer() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO `Offer` (`product`, `image`, `company`) VALUES (?, ?, ?)",
        [this.offer.product, this.offer.image, this.offer.company],
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

  editOffer() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE `Offer` SET `image` = ?, `company` = ?, `product` = ? WHERE `id` = ?",
        [
          this.offer.image,
          this.offer.company,
          this.offer.product,
          this.offer.id,
        ],
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
