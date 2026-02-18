import { createPasswordService } from "../services/Password.service.js";
import jwt from 'jsonwebtoken'

export async function createPasswordController(req, res) {
    const { password } = req.body;
    if (!password) {
        res.status(400).json({ message: 'password is require' });
    }

    if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(
            { role: 'admin' },
            process.env.JWT_SK,
            { expiresIn: '30d' }
        )
        res.status(201).json({ message: "Password Match token created", token: token });
    }
    else {
        res.status(400).json({ message: 'UNAUTORIZE' });
    }
};



