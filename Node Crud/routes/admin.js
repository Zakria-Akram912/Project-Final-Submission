const express = require("express");
const checkSessionAuth = require("../middleware/checkSessionAuth");
const Product = require("../models/product");

const router = express.Router();

//Route for getting all the products in add panel
router.get("/admin-product", async (req, res, next) => {
  const products = await Product.find();
  res.render("admin/admin-products", {
    path: "/admin-product",
    prods: products,
  });
});

//Routes for adding the products
router.get("/add-product", checkSessionAuth, async (req, res, next) => {
  res.render("admin/add-product", { path: "/add-product" });
});

router.post("/add-product", async (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
  });
  await product.save();
  res.redirect("/shop");
});

//Routes for Editing the products
router.get(
  "/edit-product/:productId",
  checkSessionAuth,
  async (req, res, next) => {
    const prodId = req.params.productId;
    const product = await Product.findById(prodId);
    res.render("admin/edit-product", { product: product });
  }
);

router.post("/edit-product", async (req, res, next) => {
  prodId = req.body.productId;
  const product = await Product.findById(prodId);
  product.title = req.body.title;
  product.price = req.body.price;
  product.imageUrl = req.body.imageUrl;
  product.description = req.body.description;
  await product.save();
  res.redirect("/admin-product");
});

router.post("/delete-product", checkSessionAuth, async (req, res, next) => {
  const prodId = req.body.productId;
  const product = await Product.findByIdAndRemove(prodId);
  res.redirect("/admin-product");
});

module.exports = router;
