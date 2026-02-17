import { createComplaintService } from "../services/complaints.service.js";

export async function createComplaintController(req, res){
    try {
        const newComplaint = await createComplaintService(req.body);
        res.status(201).json(newComplaint);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
