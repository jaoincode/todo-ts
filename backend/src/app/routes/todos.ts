import express from "express";
import TodosControllers from "../controllers/TodosControllers";

const router = express.Router();

router.get("/", TodosControllers.getAll);
router.post("/", TodosControllers.createTodo);
router.delete("/:id", TodosControllers.completeTodo);

export default router;
