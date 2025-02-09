import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config(); //Load .env variables
const app = express();
app.use(express.json());
app.use(cors());



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});