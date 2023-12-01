const Todo = require("../Models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Todo.findOneAndDelete({ _id: id });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Item Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      messsage: "Error in processing the request",
    });
  }
};
