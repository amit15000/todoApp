const mongoose = require("mongoose");
const Todo = require("../Models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const response = await Todo.find({});

    if (response.length == 0) {
      res.status(200).json({
        success: true,
        data: response,
        message: "No item present",
      });
    } else {
      res.status(200).json({
        success: true,
        data: response,
        message: "Items recieved",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      messsage: "Error in fetching the data",
    });
  }
};

exports.getTodoByID = async (req, res) => {
  try {
    const id = req.params.id;

    const item = await Todo.findById({ _id: id });

    if (!item) {
      return res.statis(404).json({
        success: false,
        maggese: "No  data fount with given ID",
      });
    }

    res.status(200).json({
      success: true,
      data: item,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      messsage: "Error in processing the request",
    });
  }
};
