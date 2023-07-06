const express = require('express')
const router = express.Router()

const {Singup,login} = require("../controller/authentication")
const {createStock} = require('../controller/postApi')
const {getStock} = require("../controller/getApi")

router.post("/singup",Singup)
router.post("/login",login)

router.post("/createStock",createStock)
router.get("/stock",getStock)



module.exports = router