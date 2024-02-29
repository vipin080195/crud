const express = require('express');

const router = express.Router();

const { getAllData, postCreateData, deleteData ,updateData} = require('../controllers/data_controllers');

router.get("/", getAllData);

router.post("/", postCreateData);

router.delete("/:id", deleteData);
// router.post("/:id",updateData)

module.exports = router;