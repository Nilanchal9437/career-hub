import { NextRequest, NextResponse } from "next/server";
import openai from "@/libs/openaiClient";

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Request body is empty. Please send university and course in JSON format.'
      }, { status: 400 });
    }

    const { university, course } = body;

    if (!university || !course) {
      return NextResponse.json({
        success: false,
        error: 'Both university and course are required',
        received: { university, course }
      }, { status: 400 });
    }

    const startTime = Date.now();

    // Call your fine-tuned OpenAI model
    const completion = await openai.chat.completions.create({
      model: 'ft:gpt-3.5-turbo-0125:personal::Bxu56Kej',
      messages: [
        {
          role: 'system',
          content: 'You are a career guidance counselor specializing in IT education in Morocco. Provide detailed career guidance based on university and course information in JSON format.'
        },
        {
          role: 'user',
          content: `Give me career guidance for ${course} at ${university}`
        }
      ],
      temperature: 0.1,
      max_tokens: 1500,
    });

    const aiResponse = completion.choices[0].message.content;
    const responseTime = Date.now() - startTime;

    let guidance;
    try {
      guidance = JSON.parse(aiResponse);
    } catch (parseError) {
      // Fallback logic if the response isn't valid JSON
      guidance = {}; // Replace this with your fallback e.g., Excel data retrieval
    }

    return NextResponse.json({
      ...guidance,
      metadata: {
        responseTime,
        tokens: completion.usage?.total_tokens || null,
        model: completion.model,
        source: 'fine-tuned-ai'
      }
    });
  } catch (error: any) {
    // Fallback to Excel data if AI fails (implement getCourseData etc. as needed)
    return NextResponse.json({
      success: false,
      error: error.message || "Internal server error"
    }, { status: 500 });
  }
}
