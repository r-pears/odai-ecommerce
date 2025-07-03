import mongoose from 'mongoose';

// same here i would add validation see productModel.js for example

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the counter (e.g., 'product')
  seq: { type: Number, required: true }, // Current sequence number
});

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;