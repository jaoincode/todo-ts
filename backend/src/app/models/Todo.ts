import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("Todo", TodoSchema);
