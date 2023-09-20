import mongoose, { Schema, model, models } from "mongoose";

const demoSchema = new Schema({
  name: String,
});

const Demo = mongoose.models.Note || mongoose.model("Note", demoSchema);

export default Demo;
