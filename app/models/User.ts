import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        clerkId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },

        provider: {
            type: String,
            enum: ["github", "gitlab"],
            required: true,
        },

        providerId: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        username:{
            type:String,
            required:true,
            trim:true
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

UserSchema.index(
    { provider: 1, providerId: 1 },
    { unique: true }
);

export default mongoose.models.User ||
    mongoose.model("User", UserSchema);