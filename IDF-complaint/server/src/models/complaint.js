import mongoose from "mongoose";

const { model, Schema } = mongoose;

const complaintSchema = new Schema({
    catagory: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },

},
    { timestamps: true }
);

export default model ('Complaint', complaintSchema)