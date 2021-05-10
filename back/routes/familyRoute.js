const Family = require("../models/family")
const familyController = require("../controllers/Family")
const express = require("express")
const router = express.Router()


router.get("/allFamily", (req,res) => {

	familyController.showAllFamily().then(resultFromShowAllFamily => res.send(resultFromShowAllFamily))
})

router.post("/newFamily", (req,res) => {

	familyController.createFamily(req.body).then(resultFromCreateNewFamily => res.send(resultFromCreateNewFamily))
})

router.put("/editFamily/:id", (req,res) => {

	familyController.updateFamily(req.body).then(resultFromUpdateFamily => res.send(resultFromUpdateFamily))
})

router.delete("/deleteFamily", (req,res) => {

	familyController.deleteFamily(req.body).then(resultFromDeleteFamily => res.send(resultFromDeleteFamily))
})


module.exports = router