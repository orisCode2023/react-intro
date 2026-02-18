import { createPasswordService } from "../services/Password.service.js";

export async function createPasswordController(req, res){
    try {
        const password = await createPasswordService(req.body);
        res.status(201).json({message: "Password Match", data: password});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
