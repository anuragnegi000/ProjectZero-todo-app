import express from "express";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
})

app.post("/signup",async (req,res)=>{
    const {email,password}=req.body;
    const users=await Prisma.user.create({
        data:{
            email:email,
            password:password
        }
    })
    res.json({
        msg:users
    })
        
})

app.listen(4321,()=>{
    console.log("Server is running on port 4321");
})  