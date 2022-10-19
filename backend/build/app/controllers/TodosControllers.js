"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = __importDefault(require("../models/Todo"));
exports.default = {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield Todo_1.default.find();
            return res.json(todos);
        });
    },
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { todo } = req.body;
            if (!todo) {
                return res.status(203).json({ error: "You need to send a todo" });
            }
            const newTodo = new Todo_1.default({
                todo,
            });
            try {
                yield newTodo.save();
                res.status(201).json({ newTodo });
            }
            catch (err) {
                res.status(203).json({ error: err });
            }
        });
    },
    completeTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const completedTodo = yield Todo_1.default.findById(id);
            try {
                yield (completedTodo === null || completedTodo === void 0 ? void 0 : completedTodo.delete());
                return res.status(200).json({ message: "Todo completed with success" });
            }
            catch (err) { }
        });
    },
};
