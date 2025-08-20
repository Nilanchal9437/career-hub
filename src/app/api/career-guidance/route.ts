import { NextRequest, NextResponse } from "next/server";
import openai from "@/libs/openaiClient";

// Training data structure based on your Excel data
interface TrainingData {
  etablissement: string;
  niveau: string;
  filiere: string;
  modules: string;
  technologies: string;
  competences: string;
}

// Your training data (converted from Excel)
const trainingData: TrainingData[] = [
  {
    etablissement: "Faculté des Sciences",
    niveau: "Master",
    filiere: "Informatique / Data Science",
    modules: "IA, Vision, Sécurité, Cloud, Big Data",
    technologies: "Python, Keras, OpenCV, Spark",
    competences: "Modèles IA, visualisation, data science, backend API"
  },
  {
    etablissement: "ENSA",
    niveau: "Licence/Ingénieur", 
    filiere: "Génie Informatique",
    modules: "POO, Bases de données, Réseaux",
    technologies: "Java, Python, MySQL, PHP",
    competences: "Développement complet, sécurité, gestion projet, dev web/mobile"
  },
  {
    etablissement: "UIR",
    niveau: "Master",
    filiere: "Big Data / SSI / IA",
    modules: "Machine Learning, Cryptographie",
    technologies: "Hadoop, Spark, Python, TensorFlow",
    competences: "Big data, IA appliquée, sécurité, visualisation"
  },
  {
    etablissement: "UIR",
    niveau: "Licence",
    filiere: "Ingénierie informatique",
    modules: "POO, BD, Web, Algo, Architecture",
    technologies: "Java, Python, HTML, CSS",
    competences: "Développement logiciel, base de données, architecture logicielle"
  },
  {
    etablissement: "ENSET",
    niveau: "Master",
    filiere: "Systèmes Informatiques Distribués",
    modules: "Cloud, Sécurité, IA, DevOps",
    technologies: "AWS, Jenkins, Selenium, Python",
    competences: "Administration système, dev distribué, testing, cloud"
  },
  {
    etablissement: "ENSA",
    niveau: "Master intégré",
    filiere: "Big Data / Cybersécurité",
    modules: "Big Data, IA, Machine Learning",
    technologies: "Hadoop, Spark, Python, Scala",
    competences: "Analyse de données, ML, sécurité réseau, CI/CD"
  },
  {
    etablissement: "ENSA",
    niveau: "Tronc commun",
    filiere: "Cycle préparatoire",
    modules: "Algorithmique, Programmation C, MATLAB",
    technologies: "Maple, LabVIEW",
    competences: "Logique, programmation procédurale, modélisation, simulation, communication"
  },
  {
    etablissement: "ENSIAS",
    niveau: "Tronc commun",
    filiere: "1re année ingénieur",
    modules: "Mathématiques, Algorithmique",
    technologies: "C, Python, Word, Excel",
    competences: "Analyse, algo, programmation, expression orale/écrite"
  },
  {
    etablissement: "ENSET",
    niveau: "Licence Pro",
    filiere: "Métiers du développement logiciel",
    modules: "Développement Web, POO, Gestion",
    technologies: "PHP, Laravel, JavaScript, NodeJS",
    competences: "Développement fullstack, gestion projet, collaboration"
  },
  {
    etablissement: "ENSAM",
    niveau: "Ingénieur",
    filiere: "Systèmes embarqués / Télécom",
    modules: "Microcontrôleurs, Réseaux, Electronique",
    technologies: "Arduino, Proteus, Python",
    competences: "Electronique, communication, systèmes temps réel"
  }
];

class DynamicCareerJSONGenerator {
  
  // Find matching data based on university and course
  private findMatchingData(university: string, course: string): TrainingData | null {
    const universityLower = university.toLowerCase();
    const courseLower = course.toLowerCase();
    
    // First try exact match
    let match = trainingData.find(data => 
      data.etablissement.toLowerCase().includes(universityLower) &&
      data.filiere.toLowerCase().includes(courseLower)
    );
    
    // If no exact match, try partial match on university
    if (!match) {
      match = trainingData.find(data => 
        data.etablissement.toLowerCase().includes(universityLower)
      );
    }
    
    // If still no match, try partial match on course/field
    if (!match) {
      match = trainingData.find(data => 
        data.filiere.toLowerCase().includes(courseLower) ||
        (courseLower.includes("informatique") && data.filiere.toLowerCase().includes("informatique"))
      );
    }
    
    return match || null;
  }

  // Generate dynamic instruction that ensures JSON response
  generateInstruction(university: string, course: string): string {
    const matchingData = this.findMatchingData(university, course);
    
    if (matchingData) {
      return `You are an expert career counselor specializing in Moroccan IT education. Based on the following information about ${university} - ${course}:

ACADEMIC CONTEXT:
- Institution: ${matchingData.etablissement}
- Level: ${matchingData.niveau}  
- Field/Specialization: ${matchingData.filiere}
- Core Modules: ${matchingData.modules}
- Key Technologies: ${matchingData.technologies}
- Skills Developed: ${matchingData.competences}

CRITICAL INSTRUCTION: 
You MUST respond with ONLY a valid JSON object. No additional text, explanations, or formatting outside the JSON structure.

The JSON response must include these exact fields:
{
  "success": true,
  "university": "${university}",
  "course": "${course}",
  "level": "${matchingData.niveau}",
  "programOverview": "Brief description of the program focus",
  "essentialSkills": [
    {
      "skill": "Skill name",
      "description": "Detailed explanation of the skill",
      "importance": "Why this skill is important in the job market"
    }
  ],
  "technologyStack": [
    {
      "technology": "Technology name",
      "description": "What this technology is used for",
      "marketDemand": "Current demand level in Morocco"
    }
  ],
  "learningPath": [
    {
      "step": "Learning step",
      "description": "What to learn",
      "duration": "Time needed",
      "priority": "High/Medium/Low"
    }
  ],
  "careerOpportunities": [
    {
      "role": "Job title",
      "description": "Job description",
      "salaryRange": "Salary in MAD",
      "demandLevel": "Market demand level"
    }
  ],
  "industryDemand": {
    "level": "Very High/High/Medium",
    "description": "Current market situation in Morocco",
    "trend": "Growing/Stable/Declining",
    "sectors": ["List of sectors hiring"]
  },
  "modules": [
    {
      "module": "Module name",
      "description": "What is covered",
      "semester": 1,
      "credits": 6
    }
  ],
  "nextSteps": [
    {
      "step": "Action to take",
      "description": "Detailed explanation",
      "timeline": "When to do it",
      "importance": "Critical/High/Medium"
    }
  ],
  "recommendedCertifications": [
    {
      "certification": "Certification name",
      "provider": "Who provides it",
      "cost": "Cost in USD/MAD",
      "duration": "Time to complete",
      "value": "Market value"
    }
  ],
  "salaryExpectations": {
    "entryLevel": "Entry salary range in MAD",
    "midLevel": "Mid-level salary range in MAD",
    "senior": "Senior salary range in MAD",
    "factors": ["Factors affecting salary"]
  }
}

Base your response on the provided academic context and current Moroccan job market conditions.`;
    }
    
    // Fallback instruction for unknown combinations
    return `You are an expert career counselor specializing in Moroccan IT education. The user is asking about ${course} at ${university}.

CRITICAL INSTRUCTION: 
You MUST respond with ONLY a valid JSON object. No additional text, explanations, or formatting outside the JSON structure.

The JSON response must include these exact fields:
{
  "success": true,
  "university": "${university}",
  "course": "${course}",
  "level": "Estimated level based on course name",
  "programOverview": "Research-based description of this program",
  "essentialSkills": [
    {
      "skill": "Skill name",
      "description": "Detailed explanation of the skill",
      "importance": "Why this skill is important in the job market"
    }
  ],
  "technologyStack": [
    {
      "technology": "Technology name",
      "description": "What this technology is used for",
      "marketDemand": "Current demand level in Morocco"
    }
  ],
  "learningPath": [
    {
      "step": "Learning step",
      "description": "What to learn",
      "duration": "Time needed",
      "priority": "High/Medium/Low"
    }
  ],
  "careerOpportunities": [
    {
      "role": "Job title",
      "description": "Job description",
      "salaryRange": "Salary in MAD",
      "demandLevel": "Market demand level"
    }
  ],
  "industryDemand": {
    "level": "Very High/High/Medium",
    "description": "Current market situation in Morocco",
    "trend": "Growing/Stable/Declining",
    "sectors": ["List of sectors hiring"]
  },
  "modules": [
    {
      "module": "Module name",
      "description": "What is covered",
      "semester": 1,
      "credits": 6
    }
  ],
  "nextSteps": [
    {
      "step": "Action to take",
      "description": "Detailed explanation",
      "timeline": "When to do it",
      "importance": "Critical/High/Medium"
    }
  ],
  "recommendedCertifications": [
    {
      "certification": "Certification name",
      "provider": "Who provides it",
      "cost": "Cost in USD/MAD",
      "duration": "Time to complete",
      "value": "Market value"
    }
  ],
  "salaryExpectations": {
    "entryLevel": "Entry salary range in MAD",
    "midLevel": "Mid-level salary range in MAD",
    "senior": "Senior salary range in MAD",
    "factors": ["Factors affecting salary"]
  }
}

Focus on the Moroccan job market and provide realistic, actionable information.`;
  }

  // Generate user prompt
  generateUserPrompt(university: string, course: string): string {
    return `Provide comprehensive career guidance for ${course} at ${university} in JSON format only. Include all required fields with detailed information about the Moroccan job market, skills, technologies, career paths, and salary expectations.`;
  }

  // Create fallback JSON structure
  generateFallbackJSON(university: string, course: string): any {
    return {
      success: true,
      university,
      course,
      level: "Unknown",
      programOverview: `General information technology program covering fundamental concepts in ${course}`,
      essentialSkills: [
        {
          skill: "Programming",
          description: "Software development using various programming languages",
          importance: "Essential for all IT careers"
        },
        {
          skill: "Problem Solving",
          description: "Analytical thinking and systematic approach to challenges",
          importance: "Critical for technical roles"
        },
        {
          skill: "Database Management",
          description: "Design and manage data storage systems",
          importance: "Required for most software applications"
        }
      ],
      technologyStack: [
        {
          technology: "Programming Languages",
          description: "Languages like Java, Python, C++",
          marketDemand: "Very High"
        },
        {
          technology: "Database Systems",
          description: "SQL databases and data management",
          marketDemand: "High"
        },
        {
          technology: "Web Technologies",
          description: "HTML, CSS, JavaScript for web development",
          marketDemand: "Very High"
        }
      ],
      learningPath: [
        {
          step: "Master Programming Fundamentals",
          description: "Learn core programming concepts and languages",
          duration: "3-6 months",
          priority: "High"
        },
        {
          step: "Build Projects",
          description: "Create portfolio projects to demonstrate skills",
          duration: "Ongoing",
          priority: "Critical"
        },
        {
          step: "Get Certified",
          description: "Obtain relevant professional certifications",
          duration: "2-4 months",
          priority: "Medium"
        }
      ],
      careerOpportunities: [
        {
          role: "Software Developer",
          description: "Design and develop software applications",
          salaryRange: "8,000 - 16,000 MAD",
          demandLevel: "Very High"
        },
        {
          role: "Web Developer",
          description: "Create and maintain websites and web applications",
          salaryRange: "7,000 - 14,000 MAD",
          demandLevel: "High"
        },
        {
          role: "Database Administrator",
          description: "Manage and maintain database systems",
          salaryRange: "9,000 - 16,000 MAD",
          demandLevel: "High"
        }
      ],
      industryDemand: {
        level: "Very High",
        description: "Strong demand for IT professionals in Morocco's growing tech sector",
        trend: "Growing",
        sectors: ["Banking", "Telecommunications", "E-commerce", "Government", "Startups"]
      },
      modules: [
        {
          module: "Programming Fundamentals",
          description: "Core programming concepts and practices",
          semester: 1,
          credits: 6
        },
        {
          module: "Database Systems",
          description: "Database design and management principles",
          semester: 2,
          credits: 5
        },
        {
          module: "Web Development",
          description: "Creating web applications and websites",
          semester: 3,
          credits: 6
        }
      ],
      nextSteps: [
        {
          step: "Build a portfolio",
          description: "Create projects showcasing your skills",
          timeline: "3-6 months",
          importance: "Critical"
        },
        {
          step: "Network with professionals",
          description: "Join tech communities and attend events",
          timeline: "Ongoing",
          importance: "High"
        },
        {
          step: "Apply for internships",
          description: "Gain practical work experience",
          timeline: "During studies",
          importance: "Critical"
        }
      ],
      recommendedCertifications: [
        {
          certification: "Programming Language Certification",
          provider: "Various providers",
          cost: "100-300 USD",
          duration: "2-3 months",
          value: "High market value"
        },
        {
          certification: "Database Management Certification",
          provider: "Oracle, Microsoft, etc.",
          cost: "200-500 USD",
          duration: "3-4 months",
          value: "High market value"
        }
      ],
      salaryExpectations: {
        entryLevel: "6,000 - 10,000 MAD",
        midLevel: "12,000 - 18,000 MAD",
        senior: "20,000 - 30,000+ MAD",
        factors: ["Experience", "Skills", "Company size", "Location", "Specialization"]
      }
    };
  }
}

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Request body is empty. Please send university and course in JSON format.',
        example: {
          university: "ENSA",
          course: "Génie Informatique"
        }
      }, { status: 400 });
    }

    const { university, course } = body;

    if (!university || !course) {
      return NextResponse.json({
        success: false,
        error: 'Both university and course are required',
        received: { university, course },
        example: {
          university: "ENSA",
          course: "Génie Informatique"
        }
      }, { status: 400 });
    }

    const startTime = Date.now();
    
    // Generate dynamic instruction
    const jsonGenerator = new DynamicCareerJSONGenerator();
    const systemInstruction = jsonGenerator.generateInstruction(university, course);
    const userPrompt = jsonGenerator.generateUserPrompt(university, course);

    try {
      // Call OpenAI with dynamic instruction
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemInstruction
          },
          {
            role: 'user', 
            content: userPrompt
          }
        ],
        temperature: 0.2, // Lower temperature for more consistent JSON
        max_tokens: 3000,
      });

      const aiResponse = completion.choices[0].message.content;
      const responseTime = Date.now() - startTime;

      // Try to parse the AI response as JSON
      let parsedResponse;
      try {
        // Clean the response in case there's extra text
        const cleanedResponse = aiResponse?.trim();
        const jsonStart = cleanedResponse?.indexOf('{');
        const jsonEnd = cleanedResponse?.lastIndexOf('}') + 1;
        
        if (jsonStart !== -1 && jsonEnd > jsonStart) {
          const jsonString = cleanedResponse?.slice(jsonStart, jsonEnd);
          parsedResponse = JSON.parse(jsonString || '{}');
        } else {
          throw new Error('No valid JSON found in response');
        }
      } catch (parseError) {
        console.warn('Failed to parse AI response as JSON, using fallback');
        parsedResponse = jsonGenerator.generateFallbackJSON(university, course);
      }

      // Add metadata
      const finalResponse = {
        ...parsedResponse,
        metadata: {
          responseTime,
          tokens: completion.usage?.total_tokens || null,
          model: completion.model,
          source: 'dynamic-instruction-ai',
          hasMatchingData: jsonGenerator.findMatchingData(university, course) !== null,
          timestamp: new Date().toISOString()
        }
      };

      return NextResponse.json(finalResponse);

    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      
      // Return fallback JSON structure
      const fallbackResponse = jsonGenerator.generateFallbackJSON(university, course);
      fallbackResponse.metadata = {
        responseTime: Date.now() - startTime,
        tokens: 0,
        model: "fallback",
        source: "fallback-data",
        hasMatchingData: jsonGenerator.findMatchingData(university, course) !== null,
        timestamp: new Date().toISOString(),
        error: "OpenAI API unavailable, using fallback data"
      };

      return NextResponse.json(fallbackResponse);
    }

  } catch (error: any) {
    console.error('API Error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || "Internal server error",
      university: body?.university || "",
      course: body?.course || "",
      metadata: {
        responseTime: 0,
        tokens: 0,
        model: "error",
        source: "error-response",
        timestamp: new Date().toISOString()
      }
    }, { status: 500 });
  }
}

// GET method for testing (optional)
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Career Guidance API is running",
    usage: "Send POST request with university and course in JSON format",
    example: {
      university: "ENSA",
      course: "Génie Informatique"
    },
    endpoint: "POST /api/career-guidance"
  });
}