const express=require("express");
const {auth}=require("../middleware.js");
const router=express.Router();


const {frame}=require("../controllers/todo");
const {signup,signin}=require("../controllers/user");  

router.post("/signup",signup);
router.post("/signin",signin);

router.post("/frame",auth,frame);

module.exports=router;