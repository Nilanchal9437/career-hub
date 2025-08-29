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

    // Updated prompt with explicit multiple entries requirement
    const prompt = `
You are an academic & career advisor.
Return ONLY a valid JSON object (no markdown, no explanations, no text outside JSON).
The JSON MUST strictly follow this structure and include ALL keys.
⚠️ For all arrays (foundationSkills, licenseSkills, masterSkills, technologyStack, etc.), return AT LEAST 5 diverse items.

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
  "foundationSkills": [
    {
      "skillName": "",
      "description": "",
      "importanceLevel": "",
      "marketRelevance": ""
    }
    // At least 5 skills here
  ],
  "licenseSkills": [
    {
      "skillName": "",
      "description": "",
      "practicalApplication": "",
      "industryUsage": ""
    }
    // At least 5
  ],
  "masterSkills": [
    {
      "skillName": "",
      "description": "",
      "specializationArea": "",
      "careerImpact": ""
    }
    // At least 5
  ],
  "technologyStack": [
    {
      "technologyName": "",
      "category": "",
      "description": "",
      "marketDemand": "",
      "learningPriority": "",
      "moroccanMarketRelevance": ""
    }
    // At least 5
  ],
  "learningRoadmap": {
    "foundationPhase": [
      // At least 5
    ],
    "intermediatePhase": [
      // At least 5
    ],
    "advancedPhase": [
      // At least 5
    ]
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
    // At least 5 jobs
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
    "version": "3.0",
    "figmaReady": true,
    "responseTime": 0,
    "tokens": 0,
    "model": "gpt-5",
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
