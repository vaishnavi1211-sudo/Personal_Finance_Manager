const express = require('express');
const { addTransection, 
        getAllTransection,
        editTransection,
        deleteTransection
        } = require('../controllers/transectionCtrl');

//router objects
const router = express.Router()

//routes
//add transection post method
router.post("/add-transection", addTransection)

//edit transection post method
router.post("/edit-transection", editTransection)

//delete transection post method
router.post("/delete-transection", deleteTransection)

//get transections
router.post("/get-transection", getAllTransection)

module.exports = router