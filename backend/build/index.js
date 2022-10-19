"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const connectDB_1 = __importDefault(require("./connectDB"));
(0, connectDB_1.default)();
const cors_1 = __importDefault(require("cors"));
const todos_1 = __importDefault(require("./app/routes/todos"));
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/todos", todos_1.default);
app.listen(port, () => {
    console.log("the app is listening on", port);
});
