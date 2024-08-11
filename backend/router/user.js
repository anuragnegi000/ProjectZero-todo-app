const express=require("express");
const router=express.Router();

const {auth}=require("../middleware");

const {Prisma}=require("../prisma");

router.get("/user",(req,res)=>{
    res.json({
        msg:"Hello world",
    })
})

module.exports=router;