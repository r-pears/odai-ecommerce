import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();
connectDB();

const app = express();

app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'https://sellby.netlify.app', 
      ],
    })
  );
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); 

// prefix with an underscore when the request isnt used
app.get('/', (_req, res) => {
    res.send('API is running...');
});

export default app;