//import the model(schema)
const Todo = require("../Models/Todo");

//route-handler

// async function createTodo(req, res) {
exports.createTodo = async (req, res) => {
  //way of import ---> const { createTodo } = require("../Controller/createTodo");  --->import it using destructuring

  try {
    //extract title and description from the request
    const { title, description } = req.body;

    //create a new Todo (schema) object and insert it in database
    const response = await Todo.create({
      title,
      description,
    });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};

// module.exports = createTodo;
// // way of import --- >>>> const createTodo = require("../Controller/createTodo");
