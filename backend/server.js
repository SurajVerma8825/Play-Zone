import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import passport from 'passport'; // ✅ ADD
import './config/passport.js';
import connectDB from './database/db.js';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();

// ✅ FIX 1: PORT 5000
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// ✅ FIX 2: passport initialize
app.use(passport.initialize());

app.use('/auth', authRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening at port ${PORT}`);
});
