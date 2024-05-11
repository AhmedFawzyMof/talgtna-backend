const database = require("../config/database");
const db = database.promise();

module.exports = class Offers {
  constructor(contact) {
    this.contact = contact;
  }

  async getAllContacts() {
    try {
      const [rows] = await db.query("SELECT * FROM `Contact`");
      return rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async addContact() {
    try {
      await db.query(
        "INSERT INTO `Contact` (`name`,  `email`,  `phone`, `message`, `seen`) VALUES (?, ?, ?, ?, ?)",
        [
          this.contact.name,
          this.contact.email,
          this.contact.phone,
          this.contact.message,
          this.contact.seen,
        ]
      );
      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
