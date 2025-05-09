import Product from '../models/productModel.js';
import Counter from '../models/counterModel.js';

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock, image, category } = req.body;

    if (!name || !price || !description || !stock || !image || !category) {
      return res.status(400).json({ message: 'Invalid product data' });
    }

    // Increment the counter for products
    const counter = await Counter.findOneAndUpdate(
      { name: 'product' }, // Find the counter by name
      { $inc: { seq: 1 } }, // Increment the sequence number
      { new: true, upsert: true } // Create the counter if it doesn't exist
    );

    // Create the product with the sequential ID
    const product = new Product({
      id: counter.seq, // Use the incremented sequence number
      name,
      price,
      description,
      stock,
      image,
      category,
    });

    console.log('Saving product to database...');
    await product.save();
    console.log('Product saved successfully!');
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getProductById = async (req, res) => {
  try{
  const { id } = req.params;
  
  // Query the product by the custom sequential id
  const product = await Product.findOne({ id: parseInt(id) });

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
} catch (error) {
  res.status(500).json({ message: 'Server error', error: error.message });
}
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data' });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ id: req.params.id });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};