const database = require("../config/database");
const db = database.promise();
const { v4: uuidv4 } = require("uuid");

module.exports = class Users {
  constructor(user) {
    this.user = user;
  }

  async userCoupons() {
    try {
      const [coupons] = await db.query(
        "SELECT coupons FROM Users WHERE id = ?",
        [this.user.id]
      );
      return JSON.parse(coupons[0].coupons);
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async getCashBackBlance() {
    try {
      const [cashback] = await db.query(
        "SELECT cashback FROM Users WHERE id = ?",
        [this.user.id]
      );
      return cashback;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async findUser() {
    try {
      const [user] = await db.query("SELECT * FROM Users WHERE id = ?", [
        this.user.id,
      ]);

      if (user.length == 0) {
        return { success: false, id: null };
      }

      return { success: true, id: user[0].id };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async isRegistered() {
    try {
      const [user] = await db.query(
        "SELECT * FROM Users WHERE phone = ? OR spare_phone = ?",
        [this.user.phone, this.user.spare_phone]
      );

      if (user.length == 0) {
        return { success: false, id: null };
      }

      return { success: true, id: user[0].id };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async createUser() {
    try {
      this.user.id = uuidv4();
      this.user.coupons = [
        { code: "13102019", value: 10 },
        { code: "80402002", value: 15 },
        { code: "دعم فلسطين", value: 0 },
      ];

      db.query(
        "INSERT INTO `Users` (`id`, `name`, `phone`, `Admin`, `Stuff`, `coupons`, `spare_phone`, `street`, `building`, `floor`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          this.user.id,
          this.user.name,
          this.user.phone,
          0,
          0,
          JSON.stringify(this.user.coupons),
          this.user.spare_phone,
          this.user.street,
          this.user.building,
          this.user.floor,
        ]
      );

      return { success: true, id: this.user.id };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async updateUserAddress() {
    try {
      db.query(
        "UPDATE Users SET `street`=?, `building`=?, `floor`=? WHERE id=?",
        [this.user.street, this.user.building, this.user.floor, this.user.id]
      );

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async updateUserCoupons() {
    try {
      db.query("UPDATE Users SET `coupons`=? WHERE id=?", [
        JSON.stringify(this.user.coupons),
        this.user.id,
      ]);

      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async removeUsedCoupon() {
    try {
      let coupons;
      try {
        coupons = await this.userCoupons();
      } catch (err) {
        console.error(err);
        return err;
      }

      const newCoupons = coupons.filter(
        (coupon) => coupon.code != this.user.coupon.code
      );
      db.query("UPDATE Users SET `coupons`=? WHERE id=?", [
        JSON.stringify(newCoupons),
        this.user.id,
      ]);
      return { success: true };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async verifyCoupons() {
    try {
      const [coupons] = await db.query(
        "SELECT coupons FROM Users WHERE id = ?",
        [this.user.id]
      );

      if (coupons[0].coupons.length == 0) {
        return { success: false };
      }
      const Coupons = JSON.parse(coupons[0].coupons);
      const coupon = Coupons.find(
        (coupon) => coupon.code == this.user.coupon.code
      );

      if (!coupon) {
        return { success: false };
      }

      return { success: true, coupon: coupon };
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};
