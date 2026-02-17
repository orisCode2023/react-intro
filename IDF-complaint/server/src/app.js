import express from 'express';
import routerComplaint from './routes/complaints.routes.js';
import connectDB from './db/connect.js'

connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/complaint', routerComplaint)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});