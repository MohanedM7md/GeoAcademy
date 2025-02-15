import connection from '../config/db.js';
import bcrypt from 'bcryptjs';
import { validationResult, matchedData } from 'express-validator';

const authController = { 
    singUp: async (req, res) => {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty())
                return res.status(400).json({msg:errors.array()});
            const {firstName, middleName, lastName, password, userPhone, parentPhone,year, email}
                = matchedData(req); 

            console.log(firstName, middleName, lastName, password, userPhone, parentPhone,year, email);
           
            const [existingClient] = await connection.execute(
              'SELECT * FROM users WHERE email = ?',[email]
            );
            console.log(existingClient)
            if(existingClient[0])
                return res.status(400).json({msg:'User alread Exist'});

            
            const [result1] = await connection.execute(
                'INSERT INTO users (firstName, middleName, lastName, pws, email, phone, rule) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [firstName, middleName, lastName, password, email, userPhone,'std']
            )
            const [result2] = await connection.execute(
                'INSERT INTO students (ID, parentPhone, year) VALUES (?, ?, ?)',
                [result1.insertId,parentPhone, year]
            )
            res.status(201).json({ msg:"Created succefully"})
        }
        catch(err){
            console.log(err)
            res.status(500).json({msg:"server Error"});
            console.log("Status:500, userSignUpError")
        }
    }
}
export default authController;
