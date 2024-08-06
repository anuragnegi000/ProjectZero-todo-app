import express from "express";
import frameRoutes from "./routes/frameRoutes";
import todoRoutes from "./routes/todoRoutes";

const app = express();
app.use(express.json());

app.use("/api", frameRoutes);
app.use("/api", todoRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
