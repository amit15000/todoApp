//router banane ke liye ---we have to import express
const express = require("express");
const router = express.Router();
//route a controller map rehta hai -->import controller
const { createTodo } = require("../Controller/createTodo");

//route ke object se post request -- 'createTodoPath' -- path (jisko ' createTodo ' controller se map karaya hai) ---- 'createTodo controller ko bheja.
router.post("/createTodoPath", createTodo);

// router.post("/", (req, res) => {
//   console.log("Route working Properly");
// });
module.exports = router;
