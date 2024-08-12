const express=require("express");
const app=express();
const routes=require("./routes");

const products_routes=require("./routes/index");

app.use(express.json());

app.use("/api/products",products_routes );

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});