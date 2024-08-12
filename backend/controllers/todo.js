const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { auth } = require("../middleware");
const router = express.Router();
const jwt = require("jsonwebtoken");    

const frame = async (req, res) => {
    const { name } = req.body;
    try {
        const user=req.user;
        const frame = await prisma.frame.create({
            data: {
                name,
                userId:user.id
            }
        });
        res.status(200).json({
            id: frame.id, // Ensure you're returning the ID correctly
            frame,
            msg: "Frame created successfully",
        });
    } catch (e) {
        res.status(400).json({
            msg: "Something bad happened",
            error: e.message, // Return the error message for debugging
        });
    }
};

const showTodo=async(req,res)=>{
    const {id}=req.params;
    try{
        const todo=await prisma.todo.findMany({
            where:{
                frameId:parseInt(id),
            }
        })
        res.json({
            msg:"todo fetched successfully",
            todo,
        })
        if(!todo){
            res.status(400).json({
                msg:"Todo not found",
            })
        }
    }
    catch(e){
        res.status(400).json({
            msg:"Something bad happened",
            error:e.message
        })
    }
}

const todo = async (req, res) => {
    const { frameId, name, description, priority } = req.body;
    try {
        const todo = await prisma.todo.create({
            data: {
                name,
                description,
                priority,
                frameId,
            },
        });
        res.status(200).json({
            todo,
            msg: "Todo created successfully",
        });
    } catch (e) {
        res.status(400).json({
            msg: "Something bad happened",
            error: e.message, // Return the error message for debugging
        });
    }
};

module.exports = {
    frame,
    todo,
    showTodo,
};
