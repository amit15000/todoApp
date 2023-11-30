const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(console.log("Server Connection with Database : Successful"))
  .catch((error) => console.log("Server connection with Database : Failed"));
