import { createComplaintService } from "../services/complaints.service.js";
import Complaint from "../models/complaint.js";

export async function createComplaintController(req, res) {
    const newComplaint = new Complaint(req.body);
    try {
        const complaintToSave = await newComplaint.save();
        res.status(201).json({ message: "Post complaint successfully", data: complaintToSave });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


export async function getComplaintsController(req, res ){
    try {
        const getAllComplaints = await Complaint.find();
        res.status(200).json({ message: "get all complaints successfully", data: getAllComplaints });
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}
