import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//Routes
import authRoutes from './routes/authRoutes.js'


dotenv.config(); //Load .env variables
const app = express();
app.use(express.json());
app.use(cors());


//routes using

app.use('/api/auth',authRoutes);





app.listen(process.env.PORT, () => {
    console.log(`Server is running   http://localhost:${process.env.PORT}/`);
});