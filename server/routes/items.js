const express =require('express');

const {createItems,getItem,getItems,deleteItem,updateItems} = require('../controllers/items.js');
const { verifyAdmin } =require('../utils/verifyToken.js');

const router = express.Router();

//CREATE
router.post('/', createItems);

//DELETE
router.delete('/:id', verifyAdmin, deleteItem);

//GET
router.get('/:id', getItem);
router.get('/', getItems);

//UPDATE
router.put('/:id', updateItems);

module.exports = router
