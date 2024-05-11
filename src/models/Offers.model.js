const database = require("../config/database");
const db = database.promise();

module.exports = class Offers {
  constructor(offer) {
    this.offer = offer;
  }

  async getAllOffers() {
    try {
      const [rows] = await db.query("SELECT * FROM `Offer`");
      return rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async addOffer() {
    try {
      await db.query(
        "INSERT INTO `Offer` (`product`,  `image`,  `company`) VALUES (?, ?,?)",
        [this.offer.product, this.offer.image, this.offer.company]
      );
      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async editOffer() {
    try {
      await db.query(
        "UPDATE `Offer` SET  `image` = ?,  `company` = ?, `product` = ? WHERE `Offer`.`id` = ?",
        [
          this.offer.image,
          this.offer.company,
          this.offer.product,
          this.offer.id,
        ]
      );
      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
