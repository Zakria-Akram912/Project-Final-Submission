const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/login", async (req, res, next) => {
  res.render("user/login", { path: "/login" });
});

router.post("/login", async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) return res.redirect("/login");
  req.session.user = user;
  console.log(req.session.user);
  return res.redirect("/shop");
});

router.get("/signup", async (req, res, next) => {
  res.render("user/signup", { path: "signup" });
});

router.post("/signup", async (req, res, next) => {
  const user = await User(req.body);
  await user.save();
  res.redirect("/login");
});

module.exports = router;
