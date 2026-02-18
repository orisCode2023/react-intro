import express from 'express';
import { createComplaintController, getComplaintsController } from '../controllers/complaints.controllers.js';


const routerComplaint = express.Router();

routerComplaint.post('/', createComplaintController)

routerComplaint.get('/', getComplaintsController)

export default routerComplaint