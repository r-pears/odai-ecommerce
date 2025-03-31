import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
    res.send('API is running...');
});

export default app;