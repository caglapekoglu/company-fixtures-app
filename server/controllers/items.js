const Items = require('../models/items.js');

const createItems = async (req, res, next) => {
  const newItems = new Items(req.body);
  newItems.id = Math.random();

  try {
    // `id` alanı boş veya null değilse kaydet
    if (newItems.id) {
      const savedItems = await newItems.save();
      return res.status(200).json(savedItems);
    } else {
      return res.status(400).json({ message: "ID field is required" });
    }
  } catch (error) {
    next(error);
    return res.status(400).json(error);
  }
};
const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItems = await Items.findByIdAndDelete(
      id
    );
    if (!deletedItems) {
      return res.status(404).json({ message: 'İzin bulunamadı',state:false });
    }
    res.status(200).json({ message: 'İzin güncellendi',state: true, item: deletedItems });
  } catch (error) {
    next(error);
  }
};
 
const getItem = async (req, res, next) => {
  try {
    const item = await Items.findById(req.params.id);
    if (!item) {
      res.status(404).json({state:false});
    }
    return res.status(200).json({state:true,item:item});
  } catch (error) {
    next(error);
  }
};
const getItems = async (req, res, next) => {
  try {
    const items = await Items.find().sort({ $natural: -1 });
    return res.status(200).json({state:true,items:items});
  } catch (error) {
    return res.status(401).json({state:false});
    next(error);
  }
};

const updateItems = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedItems = await Items.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedItems) {
      return res.status(404).json({ message: 'İzin bulunamadı',state:false});
    }
    res.status(200).json({ message: 'İzin güncellendi',state: true, item: updatedItems });
  } catch (error) {
    next(error);
  }
};
// exports.getFileForName = (req, res) => {
//   const takenPath = path.resolve(__dirname, "../uploads", req.params.name);
//   res.sendFile(takenPath);
// };


module.exports = { createItems, deleteItem, getItem, getItems, updateItems }
