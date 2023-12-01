const Todo = require("../Models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Todo.findOneAndDelete({ _id: id });
    if (!item) {
      return res.status(404).json({
        sucess: false,
        message,
      });
    }
  } catch {}
};
