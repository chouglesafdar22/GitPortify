import mongoose, { Schema, model, models } from "mongoose";

const WebhookEventSchema = new Schema(
    {
        eventId: {
            type: String,
            required: true,
            unique: true,
        },
        eventType: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["processing", "sent"],
            default: "processing",
            required: true,
        },
        processedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const WebhookEvent =
    models.WebhookEvent ||
    model("WebhookEvent", WebhookEventSchema);

export default WebhookEvent;

