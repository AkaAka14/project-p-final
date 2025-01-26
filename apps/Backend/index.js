import express from 'express';
import cors from 'cors';
import router from './src/routes/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// CORS configuration

  const whitelist = [
    'https://tnp-nitkkr.vercel.app',
    'http://localhost:5178'
  ];
  
  const corsOptions = {
    origin: whitelist,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 600
  };
  
  app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1", router);
//http://localhost/api/v1/user/signup 

const connectWithRetry = async (retryCount = 0, maxRetries = 5) => {
    try {
      await mongoose.connect(process.env.DATABASE_URI, {
        serverSelectionTimeoutMS: 60000,
        socketTimeoutMS: 45000,
        retryWrites: true,
        w: 'majority',
        maxPoolSize: 10,
        minPoolSize: 5,
        connectTimeoutMS: 30000
      });
      console.log("Connected to MongoDB Atlas");
      
      const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  
      process.on('SIGTERM', () => {
        server.close(() => {
          mongoose.connection.close();
          console.log('Server shutdown complete');
        });
      });
  
    } catch (error) {
      console.error(`MongoDB connection attempt ${retryCount + 1} failed:`, error.message);
      
      if (retryCount < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, retryCount), 10000);
        console.log(`Retrying in ${delay/1000} seconds...`);
        setTimeout(() => connectWithRetry(retryCount + 1, maxRetries), delay);
      } else {
        console.error("Max retry attempts reached. Exiting...");
        process.exit(1);
      }
    }
  };
  
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
    connectWithRetry();
  });
  
  connectWithRetry();
  
  // Health check route
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      mongodb: mongoose.connection.readyState
    });
  });
  // Root endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'API is running',
    message: 'Welcome to Project-P API',
    version: '1.0.0'
  });
});
  // Error handler
  app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message
    });
  });
  
  export default app;