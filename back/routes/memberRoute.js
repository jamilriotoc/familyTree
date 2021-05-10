const Member = require("../models/member")
const memberController = require("../controllers/Member")
const express = require("express")
const router = express.Router()



router.get("/allMember", (req,res) => {

	memberController.showAllMember().then(resultFromShowAllMember => res.send(resultFromShowAllMember))
})

router.post("/createMember", (req,res) => {

	memberController.createNewMember(req.body).then(resultFromCreateNewMember => res.send(resultFromCreateNewMember))
})

router.put("/editMember/:id", (req,res) => {

	memberController.updateMember(req.body).then(resultFromUpdateMember => res.send(resultFromUpdateMember))
})

router.delete("/deleteMember", (req,res) => {

	memberController.deleteMember(req.body).then(resultFromDeleteMember => res.send(resultFromDeleteMember))
})


module.exports = router