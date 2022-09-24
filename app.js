const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const erroController = require("./controllers/error");
const mongoConnect = require("./until/database").mongoConnect;
const User = require("./models/user");

app.use((req, res, next) => {
  User.findById('632b055dbc3208faf089c496')
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRouter);

app.use(erroController.get404);
mongoConnect(() => {
  app.listen(3000);
});
