import express from 'express';
import { createComplaintController } from '../controllers/complaints.controllers.js';


const routerComplaint = express.Router();

routerComplaint.post('/', createComplaintController)

export default routerComplaint