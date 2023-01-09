const express = require("express");
const checkSessionAuth = require("../middleware/checkSessionAuth");
const Products = require("../models/product");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await Products.find();
  res.render("shop/index", { path: "/", prods: products });
});

router.get("/shop", async (req, res, next) => {
  const products = await Products.find();
  res.render("shop/shop", { path: "/shop", prods: products });
});

router.get("/shop/:productId", async (req, res, next) => {
  const prodId = req.params.productId;
  const product = await Products.findById(prodId);
  res.render("shop/product-detail", { path: "/shop", product: product });
});

router.get("/cart", checkSessionAuth, (req, res, next) => {
  const cart = req.cookies.cart;
  if (!cart) cart = [];
  res.render("shop/cart", { path: "/cart", cart: cart });
});

router.post("/remove-cart", async (req, res, next) => {
  let cart = [];
  const prodId = req.body.productId;
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.splice(
    cart.findIndex((c) => c._id == prodId),
    1
  );
  res.cookie("cart", cart);
  res.redirect("/cart");
});

router.post("/cart", checkSessionAuth, async (req, res, next) => {
  const prodId = req.body.productId;
  const product = await Products.findById(prodId);
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.push(product);
  res.cookie("cart", cart);
  res.redirect("/shop");
});
module.exports = router;
