const express=require("express");
const {PrismaClient}=require("@prisma/client");
const prisma=new PrismaClient();
const {auth}=require("../middleware");
const router=express.Router();


const frame=async(req,res)=>{
    const {name}=req.body;
    try{
        const frame=await prisma.frame.create({
            data:{
                name,
            }
        })
        res.status(200).json({
            msg:"Frame created successfully",
        })
    }
    catch(e){
        res.status(400).json({
            msg:"Something bad happened",
        })
    }
}

module.exports={
    frame,
}
