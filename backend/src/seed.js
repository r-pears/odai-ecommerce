import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js';
import Counter from './models/counterModel.js';

dotenv.config();

const dummyProducts = [
  {
    name: 'Wireless Headphones',
    price: 299.99,
    description: 'Noise-cancelling Bluetooth headphones with 40mm drivers',
    image: '/images/headphones.jpg',
    category: 'electronics',
    rating: 4.5,
    stock: 10,
    reviews: [
      {
        user: 'John D.',
        rating: 4,
        comment: "Best headphones I've ever owned!",
        date: '2024-03-15',
      },
    ],
  },
  {
    name: 'Ergonomic Wireless Mouse',
    price: 49.99,
    description: 'Rechargeable mouse with customizable buttons',
    image: '/images/mouse.avif',
    category: 'electronics',
    rating: 4.2,
    stock: 25,
  },
  {
    name: 'Cotton Crewneck T-shirt',
    price: 19.99,
    description: 'Breathable t-shirt made from 100% cotton',
    image: '/images/tshirt.webp',
    category: 'clothing',
    rating: 4.8,
    stock: 5,
  },
  {
    name: "Mens Slim Fit Jeans",
    price: 39.99,
    description: 'Slim fit jeans made from stretch denim',
    image: '/images/jeans.avif',
    category: 'clothing',
    rating: 4.6,
    stock: 15,
  },
  {
    name: 'Smartphone with 5G',
    price: 999.99,
    description: 'Latest smartphone with 5G connectivity and 128GB storage',
    image: '/images/smartphone.webp',
    category: 'electronics',
    rating: 4.6,
    stock: 15,
  },
  {
    name: 'Bluetooth Speaker',
    price: 59.99,
    description: 'Portable Bluetooth speaker with 12-hour battery life',
    image: '/images/speaker.webp',
    category: 'electronics',
    rating: 4.3,
    stock: 20,
  },
  {
    name: 'Smartwatch',
    price: 199.99,
    description: 'Fitness tracking smartwatch with heart rate monitor',
    image: '/images/smartwatch.avif',
    category: 'electronics',
    rating: 4.4,
    stock: 12,
  },
  {
    name: 'Wireless Earbuds',
    price: 149.99,
    description: 'True wireless earbuds with noise cancellation',
    image: '/images/earbuds.jpg',
    category: 'electronics',
    rating: 4.5,
    stock: 30,
  },
  {
    name: 'Digital Camera',
    price: 499.99,
    description: 'Mirrorless digital camera with 24MP sensor and 4K video recording',
    image: '/images/camera.avif',
    category: 'electronics',
    rating: 4.6,
    stock: 7,
  },
  {
    name: 'Electric Toothbrush',
    price: 79.99,
    description: 'Rechargeable electric toothbrush with multiple brushing modes',
    image: '/images/toothbrush.webp',
    category: 'personal care',
    rating: 4.2,
    stock: 18,
  },
  {
    name: 'Portable Power Bank',
    price: 29.99,
    description: 'High-capacity power bank with fast charging support',
    image: '/images/powerbank.jpg',
    category: 'electronics',
    rating: 4.1,
    stock: 22,
  },
  {
    name: 'Wireless Charging Pad',
    price: 19.99,
    description: 'Qi-compatible wireless charging pad for smartphones',
    image: '/images/charger.jpg',
    category: 'electronics',
    rating: 4.0,
    stock: 14,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    // Clear existing products
    await Product.deleteMany();
    console.log('Existing products deleted');

    // Reset the counter for products
    await Counter.findOneAndUpdate(
      { name: 'product' },
      { seq: 0 },
      { upsert: true } // Create the counter if it doesn't exist
    );
    console.log('Product counter reset');

    // Insert dummy products
    for (const productData of dummyProducts) {
      // Increment the counter for each product
      const counter = await Counter.findOneAndUpdate(
        { name: 'product' },
        { $inc: { seq: 1 } },
        { new: true }
      );

      // Add the sequential ID to the product
      const product = new Product({
        id: counter.seq,
        ...productData,
      });

      await product.save();
    }

    console.log('Dummy products added to the database');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();