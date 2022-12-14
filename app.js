const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const erroController = require('./controllers/error');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use(shopRouter);
app.use(erroController.get404);
app.listen(3000);
