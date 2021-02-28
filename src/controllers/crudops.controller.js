const dbService = require('../services/dynamodb.service')
const express = require("express")
const router = express.Router()

const user = {
	userid: 2,
	emailAddress: "marydoe@yahoo.com",
	firstName: "mary",
	lastName: "doe",
	password: "12345"
}

router.post("/register", async (req, res, next) => {
  try {
    await dbService.insertItem(user, "users-table")
    res.status(200).json({message: "Insertion Process Complete"})
  } catch (error) {
    res.status(400).send({message: error.message,error})
  }
})

module.exports = router