const dbService = require('../services/dynamodb.service')
const express = require("express")
const router = express.Router()

router.post("/register", async (req, res, next) => {
  try {
    await dbService.insertItem(req.body, "users-table")
    res.status(200).send({message: "[insertItem] Process Complete"})
  } catch (error) {
    res.status(400).send({message: error.message, error})
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const userData = await dbService.queryItem(req.body, "users-table")
    res.status(200).send({ success: true, userData, message: "[queryItem] Process Complete"})
  } catch (error) {
    res.status(400).send({ success: false, userData, message: error})
  }
})

module.exports = router