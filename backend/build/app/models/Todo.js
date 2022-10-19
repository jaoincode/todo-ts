"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TodoSchema = new mongoose_1.default.Schema({
    todo: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
});
exports.default = mongoose_1.default.model("Todo", TodoSchema);
