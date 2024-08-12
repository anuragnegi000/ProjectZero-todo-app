const express=require("express");
const {auth}=require("../middleware.js");
const router=express.Router();


const {frame,todo, showTodo}=require("../controllers/todo");
const {signup,signin}=require("../controllers/user");  

router.post("/signup",signup);
router.post("/signin",signin);

router.post("/frame",auth,frame);
router.post("/todo",auth,todo);
router.get("/showtodo/:id",auth,showTodo)

module.exports=router;