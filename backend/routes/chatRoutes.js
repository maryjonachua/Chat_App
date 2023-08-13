const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require('../controllers/chatControllers')

const router = express.Router()

// if not user cannot acces this page/ route
router.route('/').post(protect,accessChat)

// fetch all chats
router.route('/').get(protect,fetchChats)

//creation of group chats
router.route('/group').post(protect,createGroupChat)

// update on DB route
router.route('/rename').put(protect,renameGroup)
router.route('/groupadd').put(protect,addToGroup)
router.route('/groupremove').put(protect,removeFromGroup)



module.exports = router