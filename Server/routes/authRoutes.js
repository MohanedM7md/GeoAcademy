import express from 'express';
import authController from '../controllers/authController.js';
import { checkSchema } from 'express-validator';
import { signUpSchema, loginSchema } from '../utils/validationsSchema.js';

const Router = express.Router();
Router.post('/signUp', checkSchema(signUpSchema), authController.singUp);
//Router.post('/login', checkSchema(loginSchema), authController.login);

export default Router;