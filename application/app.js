const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const userRoute = require("./router/userRoute");
const notFoundPageMiddleware = require("./middleware/notFoundPageMiddleware");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname + "/views"));

app.use(express.static(path.join(__dirname + "/public")));

app.use(expressLayouts);

app.use("/", userRoute);

app.use(notFoundPageMiddleware);

module.exports = app;
