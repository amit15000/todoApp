const express = require("express");
const app = express();

//load config from the .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//import the routes
const todoRoutes = require("./Routes/todos");
//routes ke requets ke json ko parse karne ke liye use  'middleware'
app.use(express.json());
//routes (todo ke routes -> todoRoutes)  -- ko mount karna hai --> virtual directory add karna
app.use("/api/v1", todoRoutes);

//database ke connection funtion bana hua hai database.js mein ---> call that to setup db connection
const dbConnect = require("./Config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
  res.send(`<h1>This is HOMEPAGE by Amit</h1>`);
});

//start--(listen server)
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
