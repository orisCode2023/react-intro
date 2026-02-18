import express from 'express';
import routerComplaint from './routes/complaints.routes.js';
import routerPassword from './routes/password.routes.js';
import connectDB from '../src/db/connect.js'
import protect from './middlewares/requireAdminAuth.js';
import cors from 'cors'
await connectDB()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
app.use('/complaint', routerComplaint)
app.use('/getComplaints', protect, routerComplaint)
app.use('/password',  routerPassword)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});