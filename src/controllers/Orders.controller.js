const Users = require("../models/Users.model");
const Orders = require("../models/Orders.model");
const OrderProducts = require("../models/OrderProducts.model");
const jwt = require("jsonwebtoken");
const Userid = require("../utils/getUserId");

const AddOrder = async (req, res) => {
  try {
    const order = req.body;

    const UserToken = order.user;

    const user = jwt.verify(UserToken, process.env.SECRET_KEY);

    order.user = user.user;

    if (!order.user) {
      const userIsRegistered = await new Users({
        phone: order.phone,
        spare_phone: order.spare_phone,
      }).isRegistered();

      if (!userIsRegistered.success) {
        const createUser = await new Users({
          name: order.name,
          phone: order.phone,
          spare_phone: order.spare_phone,
          street: order.street,
          building: order.building,
          floor: order.floor,
        }).createUser();

        if (!createUser.success) {
          res.status(500).send("Internal Server Error");
        }

        order.user = createUser.id;
      } else {
        order.user = userIsRegistered.id;
      }
    }

    const viryfyCoupons = await new Users({
      id: order.user,
      coupon: order.discount,
    }).verifyCoupons();

    if (!viryfyCoupons.success) {
      order.discount = { code: "", value: 0 };
    } else {
      order.discount = viryfyCoupons.coupon;
    }

    const createOrder = await new Orders(order).addOrder();

    if (!createOrder.success) {
      res.status(500).send("Internal Server Error");
    }

    createOrder.id = order.id;

    order.cart.forEach(async (cartItem) => {
      await new OrderProducts({
        order: order.id,
        product: cartItem.id,
        quantity: cartItem.quantity,
      }).addOrderProducts();
    });

    if (order.discount.code !== "") {
      await new Users({
        id: order.user,
        coupon: order.discount,
      }).removeUsedCoupon();
    }

    const token = jwt.sign({ user: order.user }, process.env.SECRET_KEY);

    res.status(200).json({
      success: true,
      token: token,
      order: order.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const GetOrders = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = Userid.UserId(token);

    const orders = await new Orders({ user: user }).getUserOrders();

    const orderPromises = orders.map(async (order) => {
      const orderProduct = await new OrderProducts({
        order: order.id,
      }).getOrderProducts();

      return { ...order, products: orderProduct };
    });

    const updatedOrders = await Promise.all(orderPromises);

    res.json({ orders: updatedOrders });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  AddOrder,
  GetOrders,
};
