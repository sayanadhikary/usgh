import mongoose, { Schema, model, models } from "mongoose";

const testSchema = new mongoose.Schema({
    name: String,
    phone : Number,
    email: String,
    concern: String
});

const Test =models.Test || model('Test', testSchema)
export default Test;