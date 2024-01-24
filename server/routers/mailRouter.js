const router= require("express").Router()
const mailmodel=require("../controllers/mailcontroler")
router.post("/api/sendmail",mailmodel.nodmail)
module.exports ={mailrouter:router}