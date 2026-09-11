import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ["general", "bug report", "feature request"],
        default: "general"
    },
    email: {
        type: String,
        trim: true,
        required:true
    },
    feedback: {
        type: String,
        trim: true,
        required: true
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.models.Feedback ||
    mongoose.model("Feedback", FeedbackSchema);