import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        required: true
    },

    avatar: {
        type: String,
        required: true
    },

    template: {
        type: String,
        required: true
    },

    projects: [
        {
            name: String,
            description: String,
            imageUrl: String,
            tech: [String],
            liveUrl: String,
        },
    ],

    education: [
        {
            degree: String,
            institution: String,
            location: String,
            startYear: String,
            endYear: String,
            description: String,
        },
    ],

    experiences: [
        {
            role: String,
            company: String,
            location: String,
            startDate: String,
            endDate: String,
            current: { type: Boolean, default: false },
            description: String,
            tech: [String],
        },
    ],

    techSkills: [
        {
            category: String,
            skills: [String],
        },
    ],

    contactLinks: {
        email: String,
        github: String,
        linkedin: String,
        website: String,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Portfolio ||
    mongoose.model("Portfolio", PortfolioSchema);