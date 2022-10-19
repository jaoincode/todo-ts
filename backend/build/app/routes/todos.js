"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TodosControllers_1 = __importDefault(require("../controllers/TodosControllers"));
const router = express_1.default.Router();
router.get("/", TodosControllers_1.default.getAll);
router.post("/", TodosControllers_1.default.createTodo);
router.delete("/:id", TodosControllers_1.default.completeTodo);
exports.default = router;
