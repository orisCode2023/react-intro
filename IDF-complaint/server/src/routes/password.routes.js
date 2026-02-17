import express from 'express';
import { createPasswordController } from '../controllers/password.controllers.js';


const routerPassword = express.Router();

routerPassword.post('/', createPasswordController)

export default routerPassword