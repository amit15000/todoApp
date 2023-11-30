const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Server Connection with Database : Successful"))
    .catch((error) => {
      console.log("Server connection with Database : Failed");
      console.error(error.message);
      process.exit(1);
    });
};
module.exports = dbConnect;
