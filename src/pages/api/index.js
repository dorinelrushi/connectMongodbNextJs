import connectDb from "../../../utils/connectMongodb";
import Note from "../../../models/Note";

export default function handler(req, res) {
  console.log("conecting db");
  connectDb();
  res.status(200).json({ name: "john Doe" });
}
