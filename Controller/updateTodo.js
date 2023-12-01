const Todo = require("../Models/Todo");
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const item = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        data: item,
        message: "No item found",
      });
    }
    res.status(200).json({
      success: true,
      data: item,
      message: "Item updated successfully",
    });
  } catch {
    res.status(500).json({
      success: false,
      data: item,
      message: "Item updated successfully",
    });
  }
};
