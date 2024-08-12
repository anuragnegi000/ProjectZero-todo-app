// const express=require("express");
const jwt=require("jsonwebtoken");

function auth(req,res,next){
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message:"No token provided",
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);z
        req.user=decoded;
        next();
    }
    catch(e){
        return res.status(401).json({
            message:"Invalid token",
        })
    }
}

module.exports={
    auth,
}