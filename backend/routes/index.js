const express=require("express");
const {auth}=require("../middleware.js");
const router=express.Router();


const {frame,todo}=require("../controllers/todo");
const {signup,signin}=require("../controllers/user");  

router.post("/signup",signup);
router.post("/signin",signin);

router.post("/frame",auth,frame);
router.post("/todo",auth,todo);

module.exports=router;