import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { auth } from "./middleware.js";

const Prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const users = await Prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  const token = jwt.sign(name, process.env.JWT_SECRET);
  res.json({
    token: token,
    msg: users,
  });
});

app.post("/frame",auth,async(req,res)=>{
  const {name}=req.body;
  try{
  const frame=await Prisma.frame.create({
    data:{
      name:name,
      userId:req.user.id,
    }
  })
  res.json({
    msg:"Frame created successfully",
    frame
  })
}catch(e){
  res.status(500).json({
    msg:"Something went wrong",
  })
}
})

app.get("/users",auth,async(req,res)=>{
  const users=await Prisma.user.findMany({});
  res.json({
    msg:users
  })
})

app.post("/signin", async (req, res) => {
  const { email } = req.body;
  try {
    const users = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const token = jwt.sign(users, process.env.JWT_SECRET);

    if (users) {
      res.json({
        token: token,
        msg: "user found",
      });
    } else {
      res.json({
        msg: "Something bad happened",
      });
    }
  } catch (e) {
    res.json({
      msg: "user not found",
    });
  }
});
app.post("/todo", auth, async (req, res) => {
    const {name,description,priority,frameId}=req.body;

    if(!name||!description||!frameId){
      res.status(400).json({
        msg:"Something wrong with inputs"
      })
    }

    // Input validation
  
    try {
     
  
      const todo = await Prisma.todo.create({
        data: {
          name,
          description,
          priority,
          frameId
        },
      });
  
      res.status(201).json({
        msg: "Todo created successfully",
        todo,
      });
    } catch (e) {
      console.error("Error creating todo:", e);
      res.status(500).json({
        msg: "Something went wrong",
        error: e.message, // Include error details for easier debugging (optional)
      });
    }
  });
  

app.get("/todos", auth, async (req, res) => {
  const todos = await Prisma.todo.findMany({});
  res.json({
    msg: todos,
  });
});

app.listen(4321, () => {
  console.log("Server is running on port 4321");
});
