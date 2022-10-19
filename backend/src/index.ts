import express from "express";
const app = express();

import connectDB from "./connectDB";
connectDB();

import cors from "cors";

import todosRouter from "./app/routes/todos";

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log("the app is listening on", port);
});
