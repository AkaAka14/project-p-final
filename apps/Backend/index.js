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
app.use(cors(
    {
  origin: 'http://localhost:5178',// Your frontend URL (must be exact)
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1", router);
//http://localhost/api/v1/user/signup 

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    retryWrites: true,
    w: 'majority',
    maxPoolSize: 10,
    minPoolSize: 5,
    connectTimeoutMS: 10000,
    keepAlive: true
}).then(() => {
    console.log("Connected to MongoDB Atlas");
    const server = app.listen(port, () => {
        console.log(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
    });

    // Handle server shutdown
    process.on('SIGTERM', () => {
        server.close(() => {
            mongoose.connection.close();
            console.log('Server shutdown complete');
        });
    });
}).catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
});

// Add connection error handler
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Add disconnection handler
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
