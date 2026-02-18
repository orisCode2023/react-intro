import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!");
});








