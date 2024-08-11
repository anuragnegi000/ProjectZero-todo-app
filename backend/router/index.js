const express = require("express");
const router=express.Router();
const {auth}=require("../middleware");
const userRouter=require("./user.JS");

router.use("/api/v1",userRouter);
export default router;