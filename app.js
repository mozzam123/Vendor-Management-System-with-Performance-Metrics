const express = require("express");
const app = express();
const vendorRoute = require("./routes/vendorRoutes");

app.use(express.json());

app.use("/api", vendorRoute);

module.exports = app;
