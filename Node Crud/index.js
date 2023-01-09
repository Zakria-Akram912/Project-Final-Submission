const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sessionAuthentication = require("./middleware/sessionAuth");

const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");

const app = express();
app.use(
  session({
    secret: "keyboard cat",
    cookie: { maxAge: 60000 },
  })
);

app.set("view engine", "ejs");
app.set("views", "views");
app.use(sessionAuthentication);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(adminRoute);
app.use(shopRoute);
app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).render("404", {
    path: "/404",
  });
});

mongoose
  .connect(
    "mongodb+srv://<username>:<password>@cluster0.prblq8e.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
    app.listen("4000");
  })
  .catch((err) => {
    console.log("not connected");
    console.log(err);
  });
