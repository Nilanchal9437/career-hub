import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { university, course } = body;

    if (!university || !course) {
      return NextResponse.json(
        { success: false, error: "University and course are required." },
        { status: 400 }
      );
    }

    // Updated prompt: enforce semester-wise skill breakdown
    const prompt = `
You are an academic & career advisor.
Return ONLY a valid JSON object (no markdown, no explanations, no text outside JSON).
⚠️ The JSON MUST strictly follow this schema and include ALL keys.
⚠️ All arrays must return AT LEAST 5 diverse items.
⚠️ foundationSkills, licenseSkills, and masterSkills MUST be organized semester-wise (semester1, semester2, etc.).

{
  "success": true,
  "universityName": "",
  "courseName": "",
  "academicLevel": "",
  "programOverview": {
    "description": "",
    "duration": "",
    "mainFocus": ""
  },
  "foundationSkills": {
    "semester1": [],
    "semester2": [],
   
  },
  "licenseSkills": {
   "semester3": [],
    "semester4": [],
    "semester5": [],
    "semester6": [],
    
  },
  "masterSkills": {
  "semester7": [],
    "semester8": [],
    "semester9": [],
    "semester10": []
  },
  "technologyStack": [
    {
      "technologyName": "",
      "category": "",
      "description": "",
      "marketDemand": "",
      "learningPriority": "",
      "moroccanMarketRelevance": ""
    }
  ],
  "learningRoadmap": {
    "foundationPhase": [],
    "intermediatePhase": [],
    "advancedPhase": []
  },
  "careerOpportunities": [
    {
      "jobTitle": "",
      "jobDescription": "",
      "requiredSkills": [],
      "salaryRange": {
        "entryLevel": "",
        "experienced": "",
        "senior": ""
      },
      "demandLevel": "",
      "growthProspect": "",
      "companiesHiring": []
    }
  ],
  "skillsGapAnalysis": {
    "universityTeaching": {
      "strengths": [],
      "weaknesses": [],
      "rating": ""
    },
    "industryDemand": {
      "criticalSkills": [],
      "emergingSkills": [],
      "industryReadySkills": []
    },
    "gapAnalysis": []
  },
  "technicalRoadmapSuggestions": [],
  "softSkillsDevelopment": [],
  "projectIdeas": [],
  "certificationsRecommended": [],
  "moroccanJobMarket": {
    "overallDemand": "",
    "trendAnalysis": "",
    "keyIndustries": [],
    "averageSalaryRanges": {
      "freshGraduate": "",
      "midLevel": "",
      "senior": ""
    },
    "topCompanies": [],
    "locationHotspots": [],
    "futureOutlook": ""
  },
  "nextStepsAction": [],
  "industryInsights": {
    "currentTrends": [],
    "emergingTechnologies": [],
    "skillsInDemand": [],
    "challengesFaced": [],
    "opportunitiesAvailable": []
  },
  "personalizedAdvice": {
    "strengthsToLeverage": [],
    "areasToImprove": [],
    "careerPathOptions": [],
    "differentiationStrategy": [],
    "networkingAdvice": []
  },
  "metadata": {
    "generatedAt": "",
    "dataSource": "",
    "lastUpdated": "",
    "tokens": 0,
    "source": "AI academic-industry analysis",
    "hasMatchingData": false,
    "timestamp": ""
  }
}

Now generate this JSON for:
University = ${university}
Course = ${course}
`;

    // Call OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      messages: [{ role: "user", content: prompt }],
    });

    let raw = completion.choices[0].message?.content?.trim() || "{}";

    // Clean JSON if model adds ```json fences
    raw = raw.replace(/```json|```/g, "").trim();

    let jsonResponse;
    try {
      jsonResponse = JSON.parse(raw);
    } catch (err) {
      console.error("JSON parse error:", err, raw);
      return NextResponse.json(
        { success: false, error: "Invalid JSON returned from AI", raw },
        { status: 500 }
      );
    }

    return NextResponse.json(jsonResponse);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
