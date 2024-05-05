const express = require("express");
const app = express();
const vendorRoute = require("./routes/vendorRoutes");
const PoRoute = require("./routes/PoRoutes")

app.use(express.json());

app.use("/api", vendorRoute);
app.use("/api", PoRoute);

module.exports = app;
