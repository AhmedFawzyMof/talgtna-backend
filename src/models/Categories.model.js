const database = require("../config/database");
const db = database.promise();

module.exports = class Categories {
  constructor(category) {
    this.category = category;
  }

  async getCategories() {
    try {
      const [categories] = await db.query("SELECT * FROM `Categories`");
      return categories;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async addCategory() {
    try {
      await db.query("INSERT INTO `Categories` (`name`) VALUES (?)", [
        this.category.name,
      ]);

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async editCategory() {
    try {
      await db.query(
        "UPDATE `category` SET  `name_ar` = ? WHERE `category`.`id` = ?",
        [this.category.name, this.category.id]
      );
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
