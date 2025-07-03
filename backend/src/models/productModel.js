import mongoose from 'mongoose';

// i would add some validation to the schema 
// const productSchema = new mongoose.Schema(
//   {
//     id: { type: Number, unique: true, required: true },
//     name: { type: String, required: true, trim: true },
//     price: {
//       type: Number,
//       required: true,
//       min: [0, "Price must be a positive number"],
//     },
//     description: { type: String, required: true, trim: true },
//     stock: {
//       type: Number,
//       required: true,
//       min: [0, "Stock must be a positive number"],
//       default: 0,
//     },
//     image: { type: String, required: true, trim: true },
//     category: { type: String, required: true, trim: true, index: true },
//     rating: {
//       type: Number,
//       default: 0,
//       min: [0, "Rating must be at least 0"],
//       max: [5, "Rating cannot exceed 5"],
//     },
//   },
//   { timestamps: true }
// );

const productSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;