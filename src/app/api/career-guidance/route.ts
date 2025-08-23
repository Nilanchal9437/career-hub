import { NextRequest, NextResponse } from "next/server";
import openai from "@/libs/openaiClient";

// Enhanced training data structure based on your comprehensive data
interface TrainingData {
  etablissement: string;
  niveau: string;
  filiere: string;
  modules: string;
  technologies: string;
  competences: string;
  foundationSkills: string[];
  licenseSkills: string[];
  masterSkills: string[];
  industryDemandSkills: string[];
  collegeTeachingGaps: string[];
  marketDemandSkills: string[];
  technicalRoadmap: string[];
  softSkills: string[];
  projectIdeas: string[];
}

// Comprehensive training data (converted from your Excel and images)
const trainingData: TrainingData[] = [
  {
    etablissement: "Faculté des Sciences",
    niveau: "Master",
    filiere: "Informatique / Data Science",
    modules: "IA, Vision, Sécurité, Cloud, Big Data",
    technologies: "Python, Keras, OpenCV, Spark",
    competences: "Modèles IA, visualisation, data science, backend API",
    foundationSkills: ["Python deeply + problem solving", "Logic Building & OOP", "Intro to Data Structures", "Learn Git & GitHub", "Basic HTML, CSS, and JavaScript"],
    licenseSkills: ["Build 2-3 solid projects", "SQL + NoSQL (MongoDB)", "Data analysis foundations", "Learn Django or FastAPI", "API building + integration", "Version control & teamwork", "Deploy projects"],
    masterSkills: ["Advanced Data Science & ML", "ML frameworks mastery", "Research projects", "Work on real datasets", "Cloud & DevOps", "Generative AI tools", "Publish your work"],
    industryDemandSkills: ["Backend frameworks (Django, FastAPI)", "Database knowledge (SQL, ORM)", "Version control & CI/CD", "Cloud & containers", "AI & ML skills"],
    collegeTeachingGaps: ["Limited web development", "No automation/testing", "Not cloud/containerization covered", "Barely data/AI/ML", "Often statistics excluded", "Not soft skills emphasized"],
    marketDemandSkills: ["Core + frameworks + clean code practices", "Django/FastAPI + REST APIs + databases", "pytest, CI/CD, Docker", "AWS/GCP basics + Docker", "Pandas/NumPy, Scikit-Learn, TensorFlow/PyTorch", "Regressions, classification, probability knowledge", "Communication, teamwork, critical thinking"],
    technicalRoadmap: ["Backend dev: Django or FastAPI + ORM + REST API + testing", "Databases: SQL (PostgreSQL/MySQL) + basic NoSQL", "Cloud & containers: AWS fundamentals + Docker", "AI Data: Pandas, NumPy, Scikit-Learn + similar ML models", "Generative AI: Explore tools like UX Pilot API for real-world automation"],
    softSkills: ["Git workflows & teamwork", "CI/CD basics (GitHub Actions, Jenkins)", "Written communication & clarity", "Problem-solving methodology", "Collaborative development"],
    projectIdeas: ["Blog or e-commerce backend (Django/FastAPI)", "Data dashboard: fetch data — analyze — visualize", "Small ML model: classification or regression", "Generative AI mini-app: e.g., chatbot or summary tool", "API integration project with authentication"]
  },
  {
    etablissement: "ENSA",
    niveau: "Licence/Ingénieur", 
    filiere: "Génie Informatique",
    modules: "POO, Bases de données, Réseaux",
    technologies: "Java, Python, MySQL, PHP",
    competences: "Développement complet, sécurité, gestion projet, dev web/mobile",
    foundationSkills: ["Python deeply + problem solving", "Logic Building & OOP", "Intro to Data Structures", "Learn Git & GitHub", "Basic HTML, CSS, and JavaScript"],
    licenseSkills: ["Build 2-3 solid projects", "SQL + NoSQL (MongoDB)", "Data analysis foundations", "Learn Django or FastAPI", "API building + integration", "Version control & teamwork", "Deploy projects"],
    masterSkills: ["Advanced software architecture", "Microservices design", "DevOps practices", "Mobile development", "Security implementation", "Project management", "Team leadership"],
    industryDemandSkills: ["Full-stack development", "Database management", "Network security", "Mobile app development", "DevOps tools"],
    collegeTeachingGaps: ["Limited cloud exposure", "Minimal DevOps training", "Basic mobile development", "Limited testing practices"],
    marketDemandSkills: ["Spring Boot/Django frameworks", "React/Angular frontend", "Docker & Kubernetes", "AWS/Azure cloud services", "Mobile development (React Native/Flutter)"],
    technicalRoadmap: ["Master Java Spring Boot or Python Django", "Learn React.js for frontend", "Database optimization techniques", "Cloud deployment (AWS/Azure)", "Mobile development framework"],
    softSkills: ["Project management", "Team collaboration", "Technical documentation", "Problem-solving", "Communication"],
    projectIdeas: ["E-commerce platform", "Mobile banking app", "Inventory management system", "Social media dashboard", "IoT device management"]
  },
  {
    etablissement: "UIR",
    niveau: "Master",
    filiere: "Big Data / SSI / IA",
    modules: "Machine Learning, Cryptographie",
    technologies: "Hadoop, Spark, Python, TensorFlow",
    competences: "Big data, IA appliquée, sécurité, visualisation",
    foundationSkills: ["Python deeply + problem solving", "Logic Building & OOP", "Intro to Data Structures", "Learn Git & GitHub", "Statistics and Mathematics"],
    licenseSkills: ["Data structures & algorithms", "Database systems", "Statistical analysis", "Machine learning basics", "Big data fundamentals", "Data visualization", "Security fundamentals"],
    masterSkills: ["Advanced Machine Learning", "Deep Learning", "Big Data Analytics", "Cybersecurity", "Data Engineering", "AI Research", "Advanced Statistics"],
    industryDemandSkills: ["Machine Learning engineering", "Data engineering", "Cybersecurity", "Cloud computing", "Real-time analytics"],
    collegeTeachingGaps: ["Limited production deployment", "Minimal cloud platform experience", "Basic MLOps practices"],
    marketDemandSkills: ["MLOps and model deployment", "Cloud platforms (AWS, Azure, GCP)", "Real-time data processing", "Security implementation", "Data governance"],
    technicalRoadmap: ["Master ML frameworks (TensorFlow, PyTorch)", "Learn cloud ML services", "Big data tools (Spark, Kafka)", "Security frameworks", "MLOps tools (MLflow, Kubeflow)"],
    softSkills: ["Research methodology", "Technical presentation", "Cross-functional collaboration", "Critical thinking", "Innovation mindset"],
    projectIdeas: ["Predictive analytics dashboard", "Real-time fraud detection system", "Recommendation engine", "Computer vision application", "NLP chatbot"]
  },
  {
    etablissement: "UIR",
    niveau: "Licence",
    filiere: "Ingénierie informatique",
    modules: "POO, BD, Web, Algo, Architecture",
    technologies: "Java, Python, HTML, CSS",
    competences: "Développement logiciel, base de données, architecture logicielle",
    foundationSkills: ["Python deeply + problem solving", "Logic Building & OOP", "Intro to Data Structures", "Learn Git & GitHub", "Basic HTML, CSS, and JavaScript"],
    licenseSkills: ["Build 2-3 solid projects", "SQL + NoSQL (MongoDB)", "Data analysis foundations", "Learn Django or FastAPI", "API building + integration", "Version control & teamwork", "Deploy projects"],
    masterSkills: ["Software architecture patterns", "System design", "Advanced databases", "Performance optimization", "Security patterns", "Testing strategies", "Code quality"],
    industryDemandSkills: ["Full-stack development", "System architecture", "Database optimization", "API design", "Testing automation"],
    collegeTeachingGaps: ["Limited modern frameworks", "Minimal cloud experience", "Basic testing practices", "Limited DevOps exposure"],
    marketDemandSkills: ["Modern web frameworks", "Cloud services", "Containerization", "CI/CD pipelines", "Microservices architecture"],
    technicalRoadmap: ["Modern web frameworks (React, Vue)", "Backend frameworks (Spring, Django)", "Database optimization", "Cloud deployment", "Testing frameworks"],
    softSkills: ["Software design thinking", "Code review practices", "Technical documentation", "Problem decomposition", "Team collaboration"],
    projectIdeas: ["Web application with authentication", "REST API with database", "E-commerce platform", "Content management system", "Real-time chat application"]
  },
  {
    etablissement: "ENSET",
    niveau: "Master",
    filiere: "Systèmes Informatiques Distribués",
    modules: "Cloud, Sécurité, IA, DevOps",
    technologies: "AWS, Jenkins, Selenium, Python",
    competences: "Administration système, dev distribué, testing, cloud",
    foundationSkills: ["System administration basics", "Network fundamentals", "Linux command line", "Programming fundamentals", "Database basics"],
    licenseSkills: ["Distributed systems concepts", "Cloud computing basics", "Security fundamentals", "DevOps practices", "Testing methodologies", "Container technology", "Monitoring systems"],
    masterSkills: ["Advanced distributed systems", "Cloud architecture", "DevOps automation", "Security implementation", "Performance optimization", "Disaster recovery", "System scalability"],
    industryDemandSkills: ["Cloud architecture", "DevOps engineering", "System security", "Automation tools", "Monitoring and observability"],
    collegeTeachingGaps: ["Limited hands-on cloud experience", "Minimal production environment exposure", "Basic monitoring practices"],
    marketDemandSkills: ["Multi-cloud expertise", "Infrastructure as Code", "Advanced monitoring", "Security automation", "Cost optimization"],
    technicalRoadmap: ["Cloud certification (AWS/Azure)", "Infrastructure as Code (Terraform)", "Container orchestration (Kubernetes)", "Monitoring stack (Prometheus, Grafana)", "Security tools and practices"],
    softSkills: ["System thinking", "Troubleshooting methodology", "Crisis management", "Documentation practices", "Cross-team communication"],
    projectIdeas: ["Multi-tier web application deployment", "CI/CD pipeline automation", "Infrastructure monitoring dashboard", "Disaster recovery system", "Security compliance automation"]
  },
  {
    etablissement: "ENSA",
    niveau: "Master intégré",
    filiere: "Big Data / Cybersécurité",
    modules: "Big Data, IA, Machine Learning",
    technologies: "Hadoop, Spark, Python, Scala",
    competences: "Analyse de données, ML, sécurité réseau, CI/CD",
    foundationSkills: ["Statistics and mathematics", "Programming fundamentals", "Database concepts", "Network basics", "Security awareness"],
    licenseSkills: ["Data structures and algorithms", "Database management", "Statistical analysis", "Machine learning basics", "Network security", "Big data fundamentals", "Security protocols"],
    masterSkills: ["Advanced analytics", "Machine learning engineering", "Cybersecurity architecture", "Threat detection", "Data governance", "Security automation", "Risk assessment"],
    industryDemandSkills: ["Data engineering", "ML engineering", "Cybersecurity", "Threat intelligence", "Compliance management"],
    collegeTeachingGaps: ["Limited real-world threat scenarios", "Minimal cloud security experience", "Basic incident response"],
    marketDemandSkills: ["Cloud security", "AI-powered security tools", "Incident response", "Compliance frameworks", "Security automation"],
    technicalRoadmap: ["Security certifications (CISSP, CEH)", "Cloud security tools", "ML for cybersecurity", "Threat hunting tools", "Compliance frameworks"],
    softSkills: ["Risk assessment", "Security awareness", "Incident communication", "Analytical thinking", "Attention to detail"],
    projectIdeas: ["Threat detection system", "Security analytics dashboard", "Fraud detection model", "Network monitoring tool", "Compliance automation system"]
  },
  {
    etablissement: "ENSA",
    niveau: "Tronc commun",
    filiere: "Cycle préparatoire",
    modules: "Algorithmique, Programmation C, MATLAB",
    technologies: "Maple, LabVIEW",
    competences: "Logique, programmation procédurale, modélisation, simulation, communication",
    foundationSkills: ["Mathematical thinking", "Logic and reasoning", "Basic programming", "Problem-solving methodology", "Scientific method"],
    licenseSkills: ["Advanced programming", "Data structures", "Algorithm analysis", "Software engineering", "Mathematics applications", "Technical communication", "Project methodology"],
    masterSkills: ["Specialized domain knowledge", "Research methodology", "Advanced mathematics", "System modeling", "Innovation techniques", "Leadership skills", "Technical expertise"],
    industryDemandSkills: ["Programming proficiency", "Mathematical modeling", "Technical analysis", "Problem-solving", "Communication skills"],
    collegeTeachingGaps: ["Limited modern programming languages", "Minimal software engineering practices", "Basic industry exposure"],
    marketDemandSkills: ["Modern programming languages", "Software development practices", "Industry-standard tools", "Professional communication", "Project management"],
    technicalRoadmap: ["Learn modern programming languages", "Software engineering practices", "Industry-standard development tools", "Professional skill development", "Specialization area selection"],
    softSkills: ["Analytical thinking", "Technical communication", "Problem decomposition", "Learning methodology", "Presentation skills"],
    projectIdeas: ["Mathematical modeling project", "Simulation software", "Algorithm visualization", "Data analysis tool", "Educational software"]
  },
  {
    etablissement: "ENSIAS",
    niveau: "Tronc commun",
    filiere: "1re année ingénieur",
    modules: "Mathématiques, Algorithmique",
    technologies: "C, Python, Word, Excel",
    competences: "Analyse, algo, programmation, expression orale/écrite",
    foundationSkills: ["Mathematical foundations", "Logic and reasoning", "Basic programming", "Communication skills", "Study methodology"],
    licenseSkills: ["Advanced programming", "Software engineering", "Database systems", "Web development", "Mobile development", "Project management", "Technical writing"],
    masterSkills: ["Software architecture", "System design", "Advanced algorithms", "Machine learning", "Cloud computing", "Research skills", "Leadership"],
    industryDemandSkills: ["Full-stack development", "Software engineering", "Database management", "Cloud services", "Mobile development"],
    collegeTeachingGaps: ["Limited practical experience", "Minimal industry exposure", "Basic modern technology stack"],
    marketDemandSkills: ["Modern frameworks", "Cloud platforms", "DevOps practices", "Agile methodologies", "Professional communication"],
    technicalRoadmap: ["Modern web development", "Database technologies", "Cloud computing", "Mobile development", "Software engineering practices"],
    softSkills: ["Communication", "Teamwork", "Time management", "Critical thinking", "Adaptability"],
    projectIdeas: ["Personal portfolio website", "Database-driven application", "Mobile app prototype", "Algorithm visualization", "Team collaboration tool"]
  },
  {
    etablissement: "ENSET",
    niveau: "Licence Pro",
    filiere: "Métiers du développement logiciel",
    modules: "Développement Web, POO, Gestion",
    technologies: "PHP, Laravel, JavaScript, NodeJS",
    competences: "Développement fullstack, gestion projet, collaboration",
    foundationSkills: ["Web development basics", "Programming fundamentals", "Database concepts", "UI/UX basics", "Version control"],
    licenseSkills: ["Full-stack development", "Framework mastery", "Database design", "API development", "Testing practices", "Project management", "Team collaboration"],
    masterSkills: ["Advanced web architecture", "Performance optimization", "Security implementation", "DevOps practices", "Team leadership", "Business understanding", "Innovation"],
    industryDemandSkills: ["Full-stack development", "Modern frameworks", "Database optimization", "API design", "DevOps integration"],
    collegeTeachingGaps: ["Limited cloud deployment", "Minimal testing practices", "Basic security implementation"],
    marketDemandSkills: ["Cloud deployment", "Automated testing", "Security best practices", "Modern JavaScript frameworks", "Mobile responsiveness"],
    technicalRoadmap: ["Modern JavaScript frameworks", "Cloud deployment platforms", "Testing frameworks", "Security practices", "Performance optimization"],
    softSkills: ["Project management", "Client communication", "Team collaboration", "Time management", "Problem-solving"],
    projectIdeas: ["Full-stack web application", "E-commerce platform", "Content management system", "API integration project", "Progressive web app"]
  },
  {
    etablissement: "ENSAM",
    niveau: "Ingénieur",
    filiere: "Systèmes embarqués / Télécom",
    modules: "Microcontrôleurs, Réseaux, Electronique",
    technologies: "Arduino, Proteus, Python",
    competences: "Electronique, communication, systèmes temps réel",
    foundationSkills: ["Electronics basics", "Programming fundamentals", "Mathematics and physics", "Circuit design", "Communication protocols"],
    licenseSkills: ["Embedded programming", "Microcontroller systems", "Communication protocols", "Real-time systems", "Hardware-software integration", "Testing and debugging", "System documentation"],
    masterSkills: ["Advanced embedded systems", "IoT architecture", "Wireless communication", "System optimization", "Security for embedded systems", "Project leadership", "Innovation"],
    industryDemandSkills: ["IoT development", "Embedded systems", "Wireless communication", "Real-time programming", "Hardware integration"],
    collegeTeachingGaps: ["Limited IoT platforms", "Minimal cloud integration", "Basic security for embedded systems"],
    marketDemandSkills: ["IoT platforms", "Cloud connectivity", "Embedded security", "Edge computing", "Industrial IoT"],
    technicalRoadmap: ["IoT development platforms", "Cloud services for IoT", "Embedded security practices", "Edge computing technologies", "Industrial communication protocols"],
    softSkills: ["System thinking", "Hardware-software integration", "Problem diagnosis", "Technical documentation", "Cross-disciplinary collaboration"],
    projectIdeas: ["IoT monitoring system", "Home automation project", "Industrial sensor network", "Wireless communication system", "Embedded security solution"]
  }
];

class ComprehensiveCareerJSONGenerator {
  
  // Enhanced matching algorithm
  private findMatchingData(university: string, course: string): TrainingData | null {
    const universityLower = university.toLowerCase();
    const courseLower = course.toLowerCase();
    
    // Exact match priority
    let match = trainingData.find(data => 
      data.etablissement.toLowerCase().includes(universityLower) &&
      data.filiere.toLowerCase().includes(courseLower)
    );
    
    // University match with partial course match
    if (!match) {
      match = trainingData.find(data => 
        data.etablissement.toLowerCase().includes(universityLower) &&
        (data.filiere.toLowerCase().includes(courseLower.split(' ')[0]) ||
         courseLower.includes(data.filiere.toLowerCase().split(' ')[0]))
      );
    }
    
    // Course field matching
    if (!match) {
      const courseKeywords = ['informatique', 'data', 'intelligence', 'cyber', 'sécurité', 'réseau', 'web', 'mobile', 'embarqué'];
      match = trainingData.find(data => 
        courseKeywords.some(keyword => 
          courseLower.includes(keyword) && data.filiere.toLowerCase().includes(keyword)
        )
      );
    }
    
    return match || null;
  }

  // Generate comprehensive system instruction
  generateInstruction(university: string, course: string): string {
    const matchingData = this.findMatchingData(university, course);
    
    const baseInstruction = `You are an expert career counselor specializing in Moroccan IT education with deep knowledge of industry demands and academic programs.

CRITICAL INSTRUCTION: 
You MUST respond with ONLY a valid JSON object. No additional text, explanations, or formatting outside the JSON structure. The response must be ready for Figma integration.

Required JSON structure with valid naming conventions:`;

    const jsonStructure = `{
  "success": true,
  "universityName": "${university}",
  "courseName": "${course}",
  "academicLevel": "Level from data",
  "programOverview": {
    "description": "Comprehensive program description",
    "duration": "Program duration",
    "mainFocus": "Primary focus areas"
  },
  "foundationSkills": [
    {
      "skillName": "Skill name",
      "description": "Detailed skill description",
      "importanceLevel": "Critical/High/Medium",
      "marketRelevance": "Why important in job market"
    }
  ],
  "licenseSkills": [
    {
      "skillName": "Bachelor level skill",
      "description": "Skill description",
      "practicalApplication": "How it's applied",
      "industryUsage": "Industry application"
    }
  ],
  "masterSkills": [
    {
      "skillName": "Master level skill", 
      "description": "Advanced skill description",
      "specializationArea": "Area of specialization",
      "careerImpact": "Impact on career progression"
    }
  ],
  "technologyStack": [
    {
      "technologyName": "Technology name",
      "category": "Frontend/Backend/Database/DevOps/AI",
      "description": "Technology description",
      "marketDemand": "Very High/High/Medium/Low",
      "learningPriority": "Critical/High/Medium/Low",
      "moroccanMarketRelevance": "Relevance in Morocco"
    }
  ],
  "learningRoadmap": {
    "foundationPhase": [
      {
        "stepName": "Learning step",
        "description": "What to learn",
        "duration": "Time needed",
        "prerequisites": "Required knowledge",
        "resources": "Learning resources"
      }
    ],
    "intermediatePhase": [
      {
        "stepName": "Intermediate step",
        "description": "Advanced learning",
        "duration": "Time needed",
        "practicalProjects": "Hands-on projects"
      }
    ],
    "advancedPhase": [
      {
        "stepName": "Advanced step",
        "description": "Expert level learning",
        "duration": "Time needed",
        "specialization": "Area of focus"
      }
    ]
  },
  "careerOpportunities": [
    {
      "jobTitle": "Job title",
      "jobDescription": "Role description",
      "requiredSkills": ["skill1", "skill2"],
      "salaryRange": {
        "entryLevel": "X,000 - Y,000 MAD",
        "experienced": "X,000 - Y,000 MAD",
        "senior": "X,000 - Y,000 MAD"
      },
      "demandLevel": "Very High/High/Medium",
      "growthProspect": "Growing/Stable/Declining",
      "companiesHiring": ["Company types"]
    }
  ],
  "skillsGapAnalysis": {
    "universityTeaching": {
      "strengths": ["What university teaches well"],
      "weaknesses": ["What's missing or limited"],
      "rating": "Good/Average/Needs Improvement"
    },
    "industryDemand": {
      "criticalSkills": ["Most demanded skills"],
      "emergingSkills": ["New trending skills"],
      "industryReadySkills": ["Skills that make resume stand out"]
    },
    "gapAnalysis": [
      {
        "skillArea": "Area name",
        "universityLevel": "Basic/Intermediate/Advanced/Not Covered",
        "industryNeed": "Critical/High/Medium",
        "actionRequired": "What student should do"
      }
    ]
  },
  "technicalRoadmapSuggestions": [
    {
      "category": "Backend/Frontend/DevOps/Data/Security",
      "recommendations": ["Specific recommendations"],
      "timeline": "Suggested timeline",
      "difficulty": "Beginner/Intermediate/Advanced"
    }
  ],
  "softSkillsDevelopment": [
    {
      "skillName": "Soft skill name",
      "description": "Why important",
      "developmentMethods": ["How to develop"],
      "industryRelevance": "Industry importance"
    }
  ],
  "projectIdeas": [
    {
      "projectName": "Project name",
      "description": "Project description",
      "skillsUsed": ["Skills demonstrated"],
      "difficulty": "Beginner/Intermediate/Advanced",
      "portfolioValue": "High/Medium/Low",
      "timeToComplete": "Estimated time"
    }
  ],
  "certificationsRecommended": [
    {
      "certificationName": "Certificate name",
      "provider": "Certification provider",
      "cost": "Cost in USD/MAD",
      "duration": "Time to complete",
      "industryValue": "Very High/High/Medium",
      "prerequisite": "Required knowledge",
      "validityPeriod": "How long valid"
    }
  ],
  "moroccanJobMarket": {
    "overallDemand": "Very High/High/Medium/Low",
    "trendAnalysis": "Growing/Stable/Declining",
    "keyIndustries": ["Industries hiring"],
    "averageSalaryRanges": {
      "freshGraduate": "X,000 - Y,000 MAD",
      "midLevel": "X,000 - Y,000 MAD",
      "senior": "X,000 - Y,000 MAD"
    },
    "topCompanies": ["Major employers"],
    "locationHotspots": ["Cities with opportunities"],
    "futureOutlook": "Market forecast"
  },
  "nextStepsAction": [
    {
      "actionItem": "Specific action",
      "description": "Detailed explanation",
      "timeline": "When to do it",
      "priority": "Critical/High/Medium/Low",
      "resources": "Where to find help",
      "measurableOutcome": "How to measure success"
    }
  ],
  "industryInsights": {
    "currentTrends": ["Industry trends"],
    "emergingTechnologies": ["New technologies"],
    "skillsInDemand": ["Most wanted skills"],
    "challengesFaced": ["Industry challenges"],
    "opportunitiesAvailable": ["Growth opportunities"]
  },
  "personalizedAdvice": {
    "strengthsToLeverage": ["Based on program"],
    "areasToImprove": ["Skills to develop"],
    "careerPathOptions": ["Possible career directions"],
    "differentiationStrategy": ["How to stand out"],
    "networkingAdvice": ["How to build network"]
  },
  "metadata": {
    "generatedAt": "ISO timestamp",
    "dataSource": "Source of information",
    "lastUpdated": "When data was last updated",
    "version": "Response version",
    "figmaReady": true
  }
}`;

    if (matchingData) {
      return `${baseInstruction}

ACADEMIC CONTEXT FROM DATABASE:
- Institution: ${matchingData.etablissement}
- Level: ${matchingData.niveau}  
- Field: ${matchingData.filiere}
- Core Modules: ${matchingData.modules}
- Technologies: ${matchingData.technologies}
- Core Competencies: ${matchingData.competences}
- Foundation Skills: ${matchingData.foundationSkills.join(', ')}
- License Skills: ${matchingData.licenseSkills.join(', ')}
- Master Skills: ${matchingData.masterSkills.join(', ')}
- Industry Demands: ${matchingData.industryDemandSkills.join(', ')}
- College Teaching Gaps: ${matchingData.collegeTeachingGaps.join(', ')}
- Technical Roadmap: ${matchingData.technicalRoadmap.join(', ')}
- Soft Skills: ${matchingData.softSkills.join(', ')}
- Project Ideas: ${matchingData.projectIdeas.join(', ')}

${jsonStructure}

Base your comprehensive response on the provided academic context and current Moroccan job market conditions. Ensure all field names follow camelCase convention for Figma compatibility.`;
    }
    
    return `${baseInstruction}

The user is asking about ${course} at ${university}. Research and provide comprehensive information.

${jsonStructure}

Focus on the Moroccan job market and provide realistic, actionable information with proper camelCase naming for Figma integration.`;
  }

  // Generate user prompt
  generateUserPrompt(university: string, course: string): string {
    return `Provide comprehensive career guidance for ${course} at ${university}. Include detailed analysis of skills gap between university teaching and industry demands, complete learning roadmap, project suggestions, and Moroccan job market insights. Respond in JSON format only with camelCase field names ready for Figma integration.`;
  }

  // Enhanced fallback JSON
  generateFallbackJSON(university: string, course: string): any {
    return {
      success: true,
      universityName: university,
      courseName: course,
      academicLevel: "Bachelor/License",
      programOverview: {
        description: `Comprehensive program in ${course} covering fundamental to advanced concepts`,
        duration: "3-5 years",
        mainFocus: "Computer science fundamentals with practical applications"
      },
      foundationSkills: [
        {
          skillName: "Programming Fundamentals",
          description: "Core programming concepts and logic building",
          importanceLevel: "Critical",
          marketRelevance: "Essential for all IT careers in Morocco"
        },
        {
          skillName: "Problem Solving",
          description: "Analytical thinking and systematic approach to challenges",
          importanceLevel: "Critical",
          marketRelevance: "Required across all technical roles"
        }
      ],
      licenseSkills: [
        {
          skillName: "Full-Stack Development",
          description: "Complete web application development",
          practicalApplication: "Building web applications",
          industryUsage: "High demand in Moroccan tech companies"
        }
      ],
      masterSkills: [
        {
          skillName: "System Architecture",
          description: "Design scalable software systems",
          specializationArea: "Software engineering",
          careerImpact: "Leads to senior technical roles"
        }
      ],
      technologyStack: [
        {
          technologyName: "JavaScript",
          category: "Frontend",
          description: "Modern web development language",
          marketDemand: "Very High",
          learningPriority: "Critical",
          moroccanMarketRelevance: "Essential for web development roles"
        }
      ],
      learningRoadmap: {
        foundationPhase: [
          {
            stepName: "Programming Basics",
            description: "Learn fundamental programming concepts",
            duration: "2-3 months",
            prerequisites: "Basic computer skills",
            resources: "Online courses, coding bootcamps"
          }
        ],
        intermediatePhase: [
          {
            stepName: "Web Development",
            description: "Build web applications",
            duration: "4-6 months",
            practicalProjects: "Personal portfolio, e-commerce site"
          }
        ],
        advancedPhase: [
          {
            stepName: "System Design",
            description: "Learn to design scalable systems",
            duration: "6-12 months",
            specialization: "Backend architecture"
          }
        ]
      },
      careerOpportunities: [
        {
          jobTitle: "Software Developer",
          jobDescription: "Design and develop software applications",
          requiredSkills: ["Programming", "Problem solving", "Teamwork"],
          salaryRange: {
            entryLevel: "8,000 - 12,000 MAD",
            experienced: "15,000 - 25,000 MAD",
            senior: "25,000 - 40,000 MAD"
          },
          demandLevel: "Very High",
          growthProspect: "Growing",
          companiesHiring: ["Startups", "Banks", "Telecom", "Government"]
        },
        {
          jobTitle: "Web Developer",
          jobDescription: "Create and maintain websites and web applications",
          requiredSkills: ["HTML/CSS", "JavaScript", "Frameworks"],
          salaryRange: {
            entryLevel: "7,000 - 11,000 MAD",
            experienced: "12,000 - 20,000 MAD",
            senior: "20,000 - 35,000 MAD"
          },
          demandLevel: "High",
          growthProspect: "Growing",
          companiesHiring: ["Digital agencies", "E-commerce", "Media companies"]
        }
      ],
      skillsGapAnalysis: {
        universityTeaching: {
          strengths: ["Programming fundamentals", "Theoretical knowledge", "Mathematics"],
          weaknesses: ["Industry practices", "Modern frameworks", "Soft skills"],
          rating: "Good foundation but needs industry alignment"
        },
        industryDemand: {
          criticalSkills: ["Modern frameworks", "Cloud computing", "DevOps"],
          emergingSkills: ["AI/ML", "Blockchain", "IoT"],
          industryReadySkills: ["Full-stack development", "Database management", "API design"]
        },
        gapAnalysis: [
          {
            skillArea: "Modern Web Frameworks",
            universityLevel: "Basic",
            industryNeed: "Critical",
            actionRequired: "Self-learn React, Angular, or Vue.js"
          },
          {
            skillArea: "Cloud Computing",
            universityLevel: "Not Covered",
            industryNeed: "High",
            actionRequired: "Get AWS or Azure certification"
          }
        ]
      },
      technicalRoadmapSuggestions: [
        {
          category: "Frontend",
          recommendations: ["Master React.js", "Learn TypeScript", "Understand responsive design"],
          timeline: "3-6 months",
          difficulty: "Intermediate"
        },
        {
          category: "Backend",
          recommendations: ["Learn Node.js or Python Django", "Master database design", "Understand RESTful APIs"],
          timeline: "4-8 months",
          difficulty: "Intermediate"
        },
        {
          category: "DevOps",
          recommendations: ["Learn Docker", "Understand CI/CD", "Basic cloud services"],
          timeline: "2-4 months",
          difficulty: "Beginner"
        }
      ],
      softSkillsDevelopment: [
        {
          skillName: "Communication",
          description: "Technical and client communication skills",
          developmentMethods: ["Join tech communities", "Practice presentations", "Write technical blogs"],
          industryRelevance: "Critical for career advancement"
        },
        {
          skillName: "Teamwork",
          description: "Collaborative development and project management",
          developmentMethods: ["Open source contributions", "Team projects", "Agile methodology"],
          industryRelevance: "Essential for all roles"
        }
      ],
      projectIdeas: [
        {
          projectName: "E-commerce Platform",
          description: "Full-stack online shopping website",
          skillsUsed: ["Frontend framework", "Backend API", "Database design", "Payment integration"],
          difficulty: "Advanced",
          portfolioValue: "High",
          timeToComplete: "2-3 months"
        },
        {
          projectName: "Task Management App",
          description: "Project management tool with user authentication",
          skillsUsed: ["CRUD operations", "User authentication", "Responsive design"],
          difficulty: "Intermediate",
          portfolioValue: "High",
          timeToComplete: "1-2 months"
        },
        {
          projectName: "Weather Dashboard",
          description: "Real-time weather application with API integration",
          skillsUsed: ["API integration", "Data visualization", "Responsive design"],
          difficulty: "Beginner",
          portfolioValue: "Medium",
          timeToComplete: "2-4 weeks"
        }
      ],
      certificationsRecommended: [
        {
          certificationName: "AWS Certified Cloud Practitioner",
          provider: "Amazon Web Services",
          cost: "100 USD",
          duration: "2-3 months",
          industryValue: "High",
          prerequisite: "Basic IT knowledge",
          validityPeriod: "3 years"
        },
        {
          certificationName: "Google Professional Cloud Developer",
          provider: "Google Cloud",
          cost: "200 USD",
          duration: "3-4 months",
          industryValue: "High",
          prerequisite: "Programming experience",
          validityPeriod: "2 years"
        },
        {
          certificationName: "Oracle Certified Professional, Java SE",
          provider: "Oracle",
          cost: "300 USD",
          duration: "4-6 months",
          industryValue: "Very High",
          prerequisite: "Java programming knowledge",
          validityPeriod: "Lifetime"
        }
      ],
      moroccanJobMarket: {
        overallDemand: "Very High",
        trendAnalysis: "Growing rapidly with digital transformation",
        keyIndustries: ["Banking", "Telecommunications", "E-commerce", "Government", "Startups", "Outsourcing"],
        averageSalaryRanges: {
          freshGraduate: "6,000 - 10,000 MAD",
          midLevel: "12,000 - 20,000 MAD",
          senior: "22,000 - 40,000 MAD"
        },
        topCompanies: ["Attijariwafa Bank", "BMCE Bank", "Maroc Telecom", "Orange", "Capgemini", "Sopra Steria", "Accenture"],
        locationHotspots: ["Casablanca", "Rabat", "Mohammedia", "Fez", "Marrakech"],
        futureOutlook: "Strong growth expected with increasing digitalization"
      },
      nextStepsAction: [
        {
          actionItem: "Build a Professional Portfolio",
          description: "Create 3-5 projects showcasing different skills",
          timeline: "3-6 months",
          priority: "Critical",
          resources: "GitHub, portfolio websites, project tutorials",
          measurableOutcome: "Complete portfolio with live demos"
        },
        {
          actionItem: "Network with Industry Professionals",
          description: "Join tech communities and attend events",
          timeline: "Ongoing",
          priority: "High",
          resources: "LinkedIn, tech meetups, professional associations",
          measurableOutcome: "Build 20+ professional connections"
        },
        {
          actionItem: "Apply for Internships",
          description: "Gain practical work experience",
          timeline: "During final year",
          priority: "Critical",
          resources: "Job portals, university career services, company websites",
          measurableOutcome: "Secure 3-6 month internship"
        },
        {
          actionItem: "Get Industry Certifications",
          description: "Obtain relevant professional certifications",
          timeline: "1-2 years",
          priority: "High",
          resources: "Online certification platforms, training centers",
          measurableOutcome: "2-3 industry certifications"
        }
      ],
      industryInsights: {
        currentTrends: ["Digital transformation", "Cloud migration", "AI integration", "Remote work tools", "Cybersecurity focus"],
        emergingTechnologies: ["Artificial Intelligence", "Machine Learning", "Blockchain", "IoT", "Edge Computing"],
        skillsInDemand: ["Cloud computing", "DevOps", "Full-stack development", "Data analysis", "Cybersecurity"],
        challengesFaced: ["Skills shortage", "Rapid technology change", "Remote work adaptation", "Digital security concerns"],
        opportunitiesAvailable: ["Government digitalization projects", "Fintech growth", "E-commerce expansion", "Outsourcing growth"]
      },
      personalizedAdvice: {
        strengthsToLeverage: ["Strong mathematical foundation", "Problem-solving skills", "Academic discipline"],
        areasToImprove: ["Industry exposure", "Modern technology stack", "Soft skills", "Portfolio development"],
        careerPathOptions: ["Software Developer", "Web Developer", "System Administrator", "Data Analyst", "IT Consultant"],
        differentiationStrategy: ["Specialize in emerging technologies", "Build strong portfolio", "Develop bilingual communication", "Focus on business understanding"],
        networkingAdvice: ["Join local tech communities", "Attend university alumni events", "Participate in hackathons", "Engage on professional social media"]
      },
      metadata: {
        generatedAt: new Date().toISOString(),
        dataSource: "fallback-comprehensive-data",
        lastUpdated: new Date().toISOString(),
        version: "2.0",
        figmaReady: true
      }
    };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Request body is empty. Please send university and course in JSON format.',
        example: {
          universityName: "ENSA",
          courseName: "Génie Informatique"
        }
      }, { status: 400 });
    }

    const { university, course, universityName, courseName } = body;
    const finalUniversity = universityName || university;
    const finalCourse = courseName || course;

    if (!finalUniversity || !finalCourse) {
      return NextResponse.json({
        success: false,
        error: 'Both university and course are required',
        received: { university: finalUniversity, course: finalCourse },
        example: {
          universityName: "ENSA",
          courseName: "Génie Informatique"
        }
      }, { status: 400 });
    }

    const startTime = Date.now();
    
    const jsonGenerator = new ComprehensiveCareerJSONGenerator();
    const systemInstruction = jsonGenerator.generateInstruction(finalUniversity, finalCourse);
    const userPrompt = jsonGenerator.generateUserPrompt(finalUniversity, finalCourse);

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4-turbo-preview', // Using GPT-4 for better comprehensive responses
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
        temperature: 0.1, // Very low temperature for consistent JSON structure
        max_tokens: 4000, // Increased for comprehensive response
      });

      const aiResponse = completion.choices[0].message.content;
      const responseTime = Date.now() - startTime;

      let parsedResponse;
      try {
        const cleanedResponse = aiResponse?.trim();
        const jsonStart = cleanedResponse?.indexOf('{');
        const jsonEnd = cleanedResponse?.lastIndexOf('}') + 1;
        
        if (jsonStart !== -1 && jsonEnd > jsonStart) {
          const jsonString = cleanedResponse?.slice(jsonStart, jsonEnd);
          parsedResponse = JSON.parse(jsonString || '{}');
          
          // Ensure Figma compatibility
          if (parsedResponse.metadata) {
            parsedResponse.metadata.figmaReady = true;
          }
        } else {
          throw new Error('No valid JSON found in response');
        }
      } catch (parseError) {
        console.warn('Failed to parse AI response as JSON, using enhanced fallback');
        parsedResponse = jsonGenerator.generateFallbackJSON(finalUniversity, finalCourse);
      }

      // Enhanced metadata
      const finalResponse = {
        ...parsedResponse,
        metadata: {
          ...parsedResponse.metadata,
          responseTime,
          tokens: completion.usage?.total_tokens || null,
          model: completion.model,
          source: 'comprehensive-ai-analysis',
          hasMatchingData: jsonGenerator.findMatchingData(finalUniversity, finalCourse) !== null,
          timestamp: new Date().toISOString(),
          figmaReady: true,
          version: "2.0"
        }
      };

      return NextResponse.json(finalResponse);

    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      
      const fallbackResponse = jsonGenerator.generateFallbackJSON(finalUniversity, finalCourse);
      fallbackResponse.metadata = {
        ...fallbackResponse.metadata,
        responseTime: Date.now() - startTime,
        error: "OpenAI API unavailable, using comprehensive fallback data"
      };

      return NextResponse.json(fallbackResponse);
    }

  } catch (error: any) {
    console.error('API Error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || "Internal server error",
      universityName: body?.universityName || body?.university || "",
      courseName: body?.courseName || body?.course || "",
      metadata: {
        responseTime: 0,
        tokens: 0,
        model: "error",
        source: "error-response",
        timestamp: new Date().toISOString(),
        figmaReady: true
      }
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Comprehensive Career Guidance API is running",
    version: "2.0",
    features: [
      "Skills gap analysis",
      "Learning roadmap",
      "Moroccan job market insights",
      "Project recommendations",
      "Certification guidance",
      "Figma-ready JSON format"
    ],
    usage: "Send POST request with universityName and courseName in JSON format",
    example: {
      universityName: "ENSA",
      courseName: "Génie Informatique"
    },
    endpoint: "POST /api/career-guidance",
    figmaCompatible: true
  });
}