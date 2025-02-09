import msql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config(); //Load .env variables


const connection = msql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Data base Connection established');
});


export default connection;