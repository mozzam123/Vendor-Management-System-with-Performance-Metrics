const app = require("./app");
const mongoose = require("mongoose");

const DB = "mongodb+srv://mozzam:mozzam@cluster.8eg5xrl.mongodb.net/Vendor_Management"

mongoose
  .connect(DB)
  .then(() => {
    console.log("Mongo Connected for Vendor Management");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
