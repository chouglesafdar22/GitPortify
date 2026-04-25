import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a professional developer portfolio writer. Generate a short modern developer bio (5-10 lines)."
                }
            ]
        });

        const bio = completion.choices[0]?.message?.content ??
            "Developer building modern projects."

        return NextResponse.json({ bio })
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "AI generation failed" },
            { status: 500 }
        )
    }
};