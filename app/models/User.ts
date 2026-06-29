import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        githubId: {
            type: String,
            required: true,
            unique: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            sparse: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        image: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.User ||
    mongoose.model("User", UserSchema);