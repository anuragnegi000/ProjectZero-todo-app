const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const router = express.Router();

const signup = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        // Check if the user already exists
        const exist = await prisma.user.findUnique({
            where: { email },
        });

        if (exist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create the new user
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password,
            },
        });

        // Send success response
        return res.status(201).json({
            user,
            message: "User created successfully",
        });
    } catch (e) {
        // Catch any errors and send an error response
        return res.status(500).json({
            message: "Something bad happened",
        });
    }
};

const signin =async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await prisma.user.findUnique({
            where:{
                email,
                password
            }
        })
        res.status(200).json({
            msg:"User Logged in Successfully",
            user,
        })
    }catch(e){
        res.status(400).json({
            message:"Something bad happened",
        })
    }
}

module.exports = {
    signup,
    signin
};
