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
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        const userId=decoded.id;
        req.userId=userId;
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