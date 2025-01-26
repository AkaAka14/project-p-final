import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// CORS Config
const whitelist = ['https://tnp-nitkkr.vercel.app', 'http://localhost:5178'];
const corsOptions = {
  origin: whitelist,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState
  });
});

app.use('/api/v1', router);

// Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// MongoDB Connection
const connectWithRetry = async (retryCount = 0, maxRetries = 5) => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      serverSelectionTimeoutMS: 60000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      maxPoolSize: 50,
      minPoolSize: 10,
      retryWrites: true,
      w: 'majority'
    });
    console.log("Connected to MongoDB Atlas");
    
    const server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

    server.timeout = 60000; // Increased timeout

    // Graceful Shutdown
    ['SIGTERM', 'SIGINT'].forEach(signal => {
      process.on(signal, () => {
        console.log(`${signal} received, starting shutdown`);
        server.close(async () => {
          await mongoose.connection.close();
          console.log('Server shutdown complete');
          process.exit(0);
        });
      });
    });

  } catch (error) {
    console.error(`MongoDB connection attempt ${retryCount + 1} failed:`, error);
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

export default app;