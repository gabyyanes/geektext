const express = require("express");
const router = express.Router();

//Handle incoming GET requests to /orders
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched",
  });
});

//Handle incoming POST requests to /orders
router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Order was created",
    order: order,
  });
});

//Handle incoming GET requests to /ordersId
router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order details",
    orderId: req.params.orderId,
  });
});

//Handle incoming DELETE requests to /ordersId
router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order deleted",
    orderId: req.params.orderId,
  });
});

module.exports = router;
