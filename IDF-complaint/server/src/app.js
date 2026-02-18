import express from 'express';
import routerComplaint from './routes/complaints.routes.js';
import routerPassword from './routes/password.routes.js';
import connectDB from '../src/db/connect.js'

await connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/complaint', routerComplaint)
app.use('/getComplaints', routerComplaint)
app.use('/password', routerPassword)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});