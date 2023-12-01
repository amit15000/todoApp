//router banane ke liye ---we have to import express
const express = require("express");
const router = express.Router();
//route a controller map rehta hai -->import controller
const { createTodo } = require("../Controller/createTodo");
const { getTodos, getTodoByID } = require("../Controller/getTodos");
const { updateTodo } = require("../Controller/updateTodo");

//route ke object se post request -- 'createTodoPath' -- path (jisko ' createTodo ' controller se map karaya hai) ---- 'createTodo controller ko bheja.
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodoByID);
router.put("/updateTodo/:id", updateTodo);

// router.post("/", (req, res) => {
//   console.log("Route working Properly");
// });
module.exports = router;
