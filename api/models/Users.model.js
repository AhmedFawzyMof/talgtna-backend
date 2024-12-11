const db = require("../config/database").db;
const { v4: uuidv4 } = require("uuid");

module.exports = class Users {
  constructor(user) {
    this.user = user;
  }

  userCoupons() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT coupons FROM Users WHERE id = ?",
        [this.user.id],
        (err, row) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(JSON.parse(row.coupons));
          }
        }
      );
    });
  }

  getCashBackBalance() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT cashback FROM Users WHERE id = ?",
        [this.user.id],
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

  findUser() {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM Users WHERE id = ?", [this.user.id], (err, row) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(
            row ? { success: true, id: row.id } : { success: false, id: null }
          );
        }
      });
    });
  }

  isRegistered() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM Users WHERE phone = ? OR spare_phone = ?",
        [this.user.phone, this.user.spare_phone],
        (err, row) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(
              row ? { success: true, id: row.id } : { success: false, id: null }
            );
          }
        }
      );
    });
  }

  createUser() {
    return new Promise((resolve, reject) => {
      this.user.id = uuidv4();
      this.user.coupons = [
        { code: "13102019", value: 10 },
        { code: "80402002", value: 15 },
        { code: "دعم فلسطين", value: 0 },
      ];

      db.run(
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

  updateUserAddress() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE Users SET `street` = ?, `building` = ?, `floor` = ? WHERE id = ?",
        [this.user.street, this.user.building, this.user.floor, this.user.id],
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

  updateUserCoupons() {
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE Users SET `coupons` = ? WHERE id = ?",
        [JSON.stringify(this.user.coupons), this.user.id],
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

  removeUsedCoupon() {
    return new Promise(async (resolve, reject) => {
      let coupons;
      try {
        coupons = await this.userCoupons();
      } catch (err) {
        console.error(err);
        reject(err);
        return;
      }

      const newCoupons = coupons.filter(
        (coupon) => coupon.code !== this.user.coupon.code
      );

      db.run(
        "UPDATE Users SET `coupons` = ? WHERE id = ?",
        [JSON.stringify(newCoupons), this.user.id],
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

  verifyCoupons() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT coupons FROM Users WHERE id = ?",
        [this.user.id],
        (err, row) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            const coupons = JSON.parse(row.coupons);
            const coupon = coupons.find(
              (coupon) => coupon.code === this.user.coupon.code
            );
            if (!coupon) {
              resolve({ success: false });
            }
            resolve({ success: true, coupon: coupon });
          }
        }
      );
    });
  }
};
