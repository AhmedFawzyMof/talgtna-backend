const database = require("../config/database");
const db = database.promise();

module.exports = class Companies {
  constructor(company) {
    this.company = company;
  }

  async getCompanies() {
    try {
      const [companies] = await db.query("SELECT * FROM `Componies`");
      return companies;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async addCompany() {
    try {
      await db.query(
        "INSERT INTO `Componies` (`name`, `image`) VALUES (?, ?)",
        [this.company.name, this.company.image]
      );

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async editCompany() {
    try {
      await db.query(
        "UPDATE `Componies` SET `name` = ?, `image` = ? WHERE `Componies`.`id` = ?",
        [this.company.name, this.company.image, this.company.id]
      );
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async companyByName() {
    try {
      const [companies] = await db.query(
        "SELECT * FROM `Componies` WHERE name = ?",
        [this.company.name]
      );
      return companies[0];
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
