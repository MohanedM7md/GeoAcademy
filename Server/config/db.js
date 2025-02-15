import msql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config(); //Load .env variables


const connection = msql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}).promise()    ;

connection.connect((err) => {
    if (err) {
        console.log(`userName: ${process.env.DB_USER} passsword: ${process.env.DB_PASS} DBname: ${process.env.DB_NAME}`)
     
        console.log('Error connecting to Db');
        return;
    }
    console.log('Data base Connection established');
});


export default connection;