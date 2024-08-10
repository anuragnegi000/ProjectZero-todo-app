import jwt from "jsonwebtoken";
export const auth=async(req,res,next)=>{
    const authHead=req.headers.authorization;
    if(!authHead)
        return res.status(401).json({
        msg:"Unauthorized",
    })

    const token = authHead.split(" ")[1];
    try{
        const user=jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;
        next();
    }catch(e){
        res.stats(401).json({
            msg:"Unauthorized",
        })
    }
}