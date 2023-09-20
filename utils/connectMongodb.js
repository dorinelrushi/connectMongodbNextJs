import mongoose from "mongoose";

const connectDb = async () => mongoose.connect(process.env.MONGODB);

export default connectDb;
