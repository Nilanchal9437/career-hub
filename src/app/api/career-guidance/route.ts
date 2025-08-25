import { NextRequest, NextResponse } from "next/server";
import openai from "@/libs/openaiClient";

// === COMPLETE EXCEL DATA ===
const excelData = [
  {
    etablissement: "Faculté des Sciences",
    niveau: "Master",
    filiere: "Informatique / Data Science",
    modules: "IA, Vision, Sécurité, Cloud, Big Data",
    technologies: "Python, Keras, OpenCV, Spark, Hadoop, Flask"
  },
  {
    etablissement: "ENSA",
    niveau: "Licence/Ingénieur",
    filiere: "Génie Informatique",
    modules: "POO, Bases de données, Réseaux, Web, Mobile, UML, Cloud, Sécurité",
    technologies: "Java, Python, MySQL, PHP, HTML/CSS, Android Studio, Git, UML tools"
  },
  {
    etablissement: "ENSA",
    niveau: "Tronc commun",
    filiere: "Cycle préparatoire",
    modules: "Algorithmique, Programmation C, Structures de données, Systèmes d'exploitation, Maths, Physique, Électronique, Communication",
    technologies: "C, MATLAB, Maple, LabVIEW, Linux, Word, PowerPoint"
  },
  {
    etablissement: "UIR",
    niveau: "Master",
    filiere: "Big Data / SSI / IA",
    modules: "Machine Learning, Cryptographie, Dev Web, Data Lakes",
    technologies: "Hadoop, Spark, Python, Tableau, Docker, RSA/SSL"
  },
  {
    etablissement: "UIR",
    niveau: "Licence",
    filiere: "Ingénierie informatique",
    modules: "POO, BD, Web, Algo, Architecture des SI",
    technologies: "Java, Python, HTML, CSS, SQL"
  },
  {
    etablissement: "ENSET",
    niveau: "Master",
    filiere: "Systèmes Informatiques Distribués",
    modules: "Cloud, Sécurité, IA, DevOps, Testing",
    technologies: "AWS, Jenkins, Selenium, Python, Docker"
  },
  {
    etablissement: "ENSET",
    niveau: "Licence Pro",
    filiere: "Métiers du développement logiciel",
    modules: "Développement Web, POO, Gestion projets, Réseaux",
    technologies: "PHP, Laravel, JavaScript, MySQL, Git"
  },
  {
    etablissement: "ENSIAS",
    niveau: "Ingénieur/Master",
    filiere: "IA, Data, SSI, Génie logiciel",
    modules: "Deep learning, NLP, Cloud computing, Sécurité, IoT",
    technologies: "TensorFlow, Keras, Spark, AWS, GCP, Docker, Cisco tools"
  },
  {
    etablissement: "ENSIAS",
    niveau: "Tronc commun",
    filiere: "1re année ingénieur",
    modules: "Mathématiques, Algorithmique, Informatique fondamentale, Communication",
    technologies: "C, Python, Word, Excel"
  },
  {
    etablissement: "ENSAM",
    niveau: "Ingénieur",
    filiere: "Systèmes embarqués / Télécom",
    modules: "Microcontrôleurs, Réseaux, Electrotechnique, Signal",
    technologies: "Arduino, Proteus, Python, MATLAB"
  }
];

// === UNIVERSAL RESPONSE GENERATOR ===
class UniversalCareerGenerator {
  private findExactMatch(university: string, course: string) {
    return excelData.find(data => 
      data.etablissement.toLowerCase().includes(university.toLowerCase()) && 
      data.filiere.toLowerCase().includes(course.toLowerCase())
    );
  }

  private getProgramContext(data: any) {
    const contexts: Record<string, any> = {
      "Tronc commun": {
        type: "Foundation Year",
        focus: "Basic Sciences & Programming Fundamentals",
        duration: "2 years",
        level: "Undergraduate"
      },
      "Licence/Ingénieur": {
        type: "Bachelor's Degree",
        focus: "Comprehensive Software Engineering",
        duration: "3-5 years",
        level: "Undergraduate"
      },
      "Master": {
        type: "Master's Degree",
        focus: "Advanced Specialization",
        duration: "2 years",
        level: "Graduate"
      },
      "Ingénieur": {
        type: "Engineering Degree",
        focus: "Professional Engineering",
        duration: "3 years",
        level: "Graduate"
      },
      "Licence Pro": {
        type: "Professional Bachelor",
        focus: "Applied Skills",
        duration: "1 year",
        level: "Undergraduate"
      }
    };

    const key = data.niveau;
    return contexts[key] || contexts["Licence/Ingénieur"];
  }

  private generateSkillsForLevel(level: string, technologies: string[], modules: string) {
    const techList = technologies;
    
    const foundation = [
      {
        skillName: techList[0] || "Programming Fundamentals",
        description: `Master ${techList[0] || 'core programming'} syntax and problem-solving techniques`,
        importanceLevel: "Critical",
        marketRelevance: `Essential for all ${level.toLowerCase()} level positions`
      },
      {
        skillName: "Problem Solving",
        description: "Develop algorithmic thinking and systematic approach to challenges",
        importanceLevel: "Critical",
        marketRelevance: "Required across all technical roles"
      },
      {
        skillName: "Data Structures",
        description: "Understanding arrays, linked lists, trees, and graphs",
        importanceLevel: "High",
        marketRelevance: "Foundation for efficient programming"
      }
    ];

    const license = level.includes("Licence") || level.includes("Ingénieur") ? [
      {
        skillName: "Database Management",
        description: "SQL and NoSQL database design and optimization",
        practicalApplication: "Store and retrieve application data efficiently",
        industryUsage: "Essential for backend development"
      },
      {
        skillName: "Web Development",
        description: "Frontend and backend web application development",
        practicalApplication: "Build responsive web applications",
        industryUsage: "Core skill for web developers"
      },
      {
        skillName: "Version Control",
        description: "Git workflows and collaborative development",
        practicalApplication: "Manage code changes and team collaboration",
        industryUsage: "Standard in all software teams"
      }
    ] : [];

    const master = level.includes("Master") || level.includes("Ingénieur") ? [
      {
        skillName: "Cloud Architecture",
        description: "Design and deploy scalable cloud solutions",
        specializationArea: "Cloud Computing",
        careerImpact: "Leads to senior cloud engineering roles"
      },
      {
        skillName: "Advanced Security",
        description: "Implement security best practices and protocols",
        specializationArea: "Cybersecurity",
        careerImpact: "Critical for security-focused positions"
      },
      {
        skillName: "Machine Learning",
        description: "Build predictive models and AI applications",
        specializationArea: "Data Science/AI",
        careerImpact: "Opens doors to AI/ML roles"
      }
    ] : [];

    return { foundation, license, master };
  }

  private generateCareerOpportunities(level: string, technologies: string) {
    const baseSalary = {
      "Tronc commun": { entry: "5,000-8,000", mid: "10,000-15,000", senior: "20,000-30,000" },
      "Licence/Ingénieur": { entry: "8,000-12,000", mid: "15,000-25,000", senior: "25,000-40,000" },
      "Master": { entry: "12,000-18,000", mid: "20,000-35,000", senior: "35,000-60,000" },
      "Ingénieur": { entry: "15,000-22,000", mid: "25,000-45,000", senior: "40,000-70,000" }
    };

    const salary = baseSalary[level as keyof typeof baseSalary] || baseSalary["Licence/Ingénieur"];

    return [
      {
        jobTitle: level.includes("Master") ? "Senior Software Engineer" : "Software Developer",
        jobDescription: `Develop software solutions using ${technologies.split(", ").slice(0,3).join(", ")}`,
        requiredSkills: technologies.split(", ").slice(0,4),
        salaryRange: {
          entryLevel: `${salary.entry} MAD`,
          experienced: `${salary.mid} MAD`,
          senior: `${salary.senior} MAD`
        },
        demandLevel: "Very High",
        growthProspect: "Growing",
        companiesHiring: ["Attijariwafa Bank", "Maroc Telecom", "Capgemini", "Orange", "Startups"]
      }
    ];
  }

  private generateProjectIdeas(technologies: string, level: string) {
    const techs = technologies.split(", ");
    
    const projects = {
      "Tronc commun": [
        {
          projectName: "Scientific Calculator",
          description: "Build a calculator using C for mathematical operations",
          skillsUsed: [techs[0] || "C", "Algorithms", "Problem solving"],
          difficulty: "Beginner",
          portfolioValue: "Medium",
          timeToComplete: "2-4 weeks"
        }
      ],
      "Licence/Ingénieur": [
        {
          projectName: "E-commerce Platform",
          description: "Full-stack web application with payment integration",
          skillsUsed: [techs[1] || "Java", techs[4] || "MySQL", "HTML/CSS", "JavaScript"],
          difficulty: "Intermediate",
          portfolioValue: "High",
          timeToComplete: "2-3 months"
        }
      ],
      "Master": [
        {
          projectName: "AI-Powered Analytics Dashboard",
          description: "Real-time data analysis and visualization platform",
          skillsUsed: [techs[0] || "Python", "Machine Learning", "Cloud services", "React"],
          difficulty: "Advanced",
          portfolioValue: "Very High",
          timeToComplete: "3-4 months"
        }
      ]
    };

    return projects[level as keyof typeof projects] || projects["Licence/Ingénieur"];
  }

  private generateTechnologyStack(technologies: string) {
    const techMap: Record<string, any> = {
      "Python": { category: "Backend", demand: "Very High", relevance: "Essential for data science and web development" },
      "Java": { category: "Backend", demand: "High", relevance: "Enterprise applications and Android development" },
      "JavaScript": { category: "Frontend", demand: "Very High", relevance: "Web development standard" },
      "React.js": { category: "Frontend", demand: "Very High", relevance: "Popular frontend framework" },
      "MySQL": { category: "Database", demand: "High", relevance: "Relational database standard" },
      "AWS": { category: "Cloud", demand: "Very High", relevance: "Dominant cloud platform in Morocco" },
      "Docker": { category: "DevOps", demand: "High", relevance: "Containerization standard" },
      "TensorFlow": { category: "AI/ML", demand: "High", relevance: "Leading ML framework" }
    };

    return technologies.split(", ").map(tech => ({
      technologyName: tech.trim(),
      category: techMap[tech.trim()]?.category || "Other",
      description: `Core technology for ${tech.trim()} development`,
      marketDemand: techMap[tech.trim()]?.demand || "Medium",
      learningPriority: techMap[tech.trim()] ? "Critical" : "Medium",
      moroccanMarketRelevance: techMap[tech.trim()]?.relevance || `Widely used in Moroccan companies`
    }));
  }

  async generateCompleteResponse(university: string, course: string): Promise<any> {
    const match = this.findExactMatch(university, course);
    
    if (!match) {
      return this.generateFallback(university, course);
    }

    const context = this.getProgramContext(match);
    const skills = this.generateSkillsForLevel(match.niveau, match.technologies.split(', '), match.modules);
    
    // Generate comprehensive structure
    return {
      success: true,
      universityName: university,
      courseName: course,
      academicLevel: context.level,
      programOverview: {
        description: `The ${match.filiere} at ${university} provides comprehensive training in ${match.modules}. This program prepares students for careers in ${context.focus.toLowerCase()}.`,
        duration: context.duration,
        mainFocus: context.focus
      },
      foundationSkills: skills.foundation,
      licenseSkills: skills.license,
      masterSkills: skills.master,
      technologyStack: this.generateTechnologyStack(match.technologies),
      learningRoadmap: {
        foundationPhase: [
          {
            stepName: "Core Programming",
            description: `Master ${match.technologies.split(", ")[0]} programming fundamentals`,
            duration: "3-4 months",
            prerequisites: "High school diploma",
            resources: ["Online tutorials", "University materials", "Moroccan YouTube channels"]
          },
          {
            stepName: "Mathematics & Logic",
            description: "Strengthen mathematical foundations for engineering",
            duration: "2-3 months",
            prerequisites: "Basic mathematics",
            resources: ["Khan Academy", "Coursera", "YouCode.ma"]
          }
        ],
        intermediatePhase: [
          {
            stepName: "Web Development",
            description: "Build complete web applications",
            duration: "4-6 months",
            practicalProjects: "E-commerce site, portfolio website"
          }
        ],
        advancedPhase: [
          {
            stepName: "Specialization",
            description: `Focus on ${match.filiere} advanced topics`,
            duration: "6-12 months",
            specialization: match.filiere
          }
        ]
      },
      careerOpportunities: this.generateCareerOpportunities(match.niveau, match.technologies),
      skillsGapAnalysis: {
        universityTeaching: {
          strengths: ["Strong theoretical foundation", match.modules],
          weaknesses: ["Limited practical experience", "Outdated tools"],
          rating: "Good foundation with practical gaps"
        },
        industryDemand: {
          criticalSkills: [...match.technologies.split(", "), "Cloud platforms", "Agile methodology"],
          emergingSkills: ["AI/ML", "Blockchain", "IoT"],
          industryReadySkills: ["Git/GitHub", "Docker", "CI/CD"]
        },
        gapAnalysis: [
          {
            skillArea: "Practical Experience",
            universityLevel: "Limited",
            industryNeed: "Critical",
            actionRequired: "Complete 2-3 real projects"
          },
          {
            skillArea: "Modern Tools",
            universityLevel: "Basic",
            industryNeed: "High",
            actionRequired: "Self-learn latest frameworks"
          }
        ]
      },
      technicalRoadmapSuggestions: [
        {
          category: "Backend",
          recommendations: ["Master primary language", "Learn database design", "Understand APIs"],
          timeline: "6-12 months",
          difficulty: "Intermediate"
        },
        {
          category: "Frontend",
          recommendations: ["HTML/CSS mastery", "JavaScript frameworks", "Responsive design"],
          timeline: "4-6 months",
          difficulty: "Intermediate"
        }
      ],
      softSkillsDevelopment: [
        {
          skillName: "Teamwork",
          description: "Collaborative development in multicultural teams",
          developmentMethods: ["University projects", "Hackathons", "GitHub collaborations"],
          industryRelevance: "Essential for all technical roles"
        },
        {
          skillName: "Communication",
          description: "Technical communication in French and English",
          developmentMethods: ["Presentations", "Technical writing", "Client interactions"],
          industryRelevance: "Critical for career advancement"
        }
      ],
      projectIdeas: this.generateProjectIdeas(match.technologies, match.niveau),
      certificationsRecommended: [
        {
          certificationName: "AWS Cloud Practitioner",
          provider: "Amazon Web Services",
          cost: "100 USD",
          duration: "1-2 months",
          industryValue: "Very High",
          prerequisite: "Basic IT knowledge",
          validityPeriod: "3 years"
        },
        {
          certificationName: "Google Data Analytics",
          provider: "Google",
          cost: "39 USD/month",
          duration: "3-6 months",
          industryValue: "High",
          prerequisite: "Basic statistics",
          validityPeriod: "Lifetime"
        }
      ],
      moroccanJobMarket: {
        overallDemand: "Very High",
        trendAnalysis: "Growing rapidly with digital transformation",
        keyIndustries: ["Banking", "Telecom", "Outsourcing", "E-commerce", "Government"],
        averageSalaryRanges: {
          freshGraduate: "8,000 - 15,000 MAD",
          midLevel: "15,000 - 30,000 MAD",
          senior: "25,000 - 50,000 MAD"
        },
        topCompanies: ["Attijariwafa Bank", "Maroc Telecom", "Capgemini", "Orange", "Sopra Steria"],
        locationHotspots: ["Casablanca", "Rabat", "Mohammedia", "Tangier"],
        futureOutlook: "Strong growth expected with increasing digitalization"
      },
      nextStepsAction: [
        {
          actionItem: "Build Portfolio",
          description: "Create 3-5 projects using technologies from your program",
          timeline: "Next 6 months",
          priority: "Critical",
          resources: "GitHub, university labs, online tutorials",
          measurableOutcome: "Complete portfolio with live demos"
        },
        {
          actionItem: "Get Certified",
          description: "Earn relevant industry certifications",
          timeline: "Next 3-6 months",
          priority: "High",
          resources: "AWS, Google, Microsoft certifications",
          measurableOutcome: "2-3 industry certificates"
        }
      ],
      industryInsights: {
        currentTrends: ["Digital transformation", "Cloud migration", "AI integration"],
        emergingTechnologies: ["AI/ML", "Blockchain", "IoT", "Edge computing"],
        skillsInDemand: ["Full-stack development", "Cloud computing", "Data science", "Cybersecurity"],
        challengesFaced: ["Skills shortage", "Rapid technology change", "Remote work adaptation"],
        opportunitiesAvailable: ["Government digitalization", "Fintech growth", "E-commerce expansion"]
      },
      personalizedAdvice: {
        strengthsToLeverage: ["Strong mathematical foundation", "Problem-solving skills", "University reputation"],
        areasToImprove: ["Industry exposure", "Modern technology stack", "Soft skills", "Portfolio development"],
        careerPathOptions: ["Software Developer", "Data Analyst", "Cloud Engineer", "Security Specialist"],
        differentiationStrategy: ["Specialize in emerging technologies", "Build strong portfolio", "Develop bilingual communication"],
        networkingAdvice: ["Join local tech communities", "Attend university alumni events", "Participate in hackathons", "Engage on LinkedIn"]
      }
    };
  }

  private generateFallback(university: string, course: string) {
    // Return comprehensive fallback for unmatched combinations
    return this.generateCompleteResponse(university, course);
  }
}

// === CACHED RESPONSES FOR SPEED ===
const cache = new Map<string, any>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// === API ENDPOINTS ===
export async function POST(req: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body = await req.json();
    const { university, course, universityName, courseName } = body;
    
    const finalUniversity = universityName || university;
    const finalCourse = courseName || course;

    if (!finalUniversity || !finalCourse) {
      return NextResponse.json({
        success: false,
        error: "Both university and course are required",
        example: { universityName: "ENSA", courseName: "Génie Informatique" }
      }, { status: 400 });
    }

    // Check cache
    const cacheKey = `${finalUniversity}-${finalCourse}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json({
        ...cached.data,
        metadata: {
          ...cached.data.metadata,
          responseTime: Date.now() - startTime,
          cached: true,
          timestamp: new Date().toISOString()
        }
      });
    }

    // Generate new response
    const generator = new UniversalCareerGenerator();
    const response = await generator.generateCompleteResponse(finalUniversity, finalCourse);
    
    // Cache the response
    cache.set(cacheKey, {
      data: response,
      timestamp: Date.now()
    });

    return NextResponse.json({
      ...response,
      metadata: {
        ...response.metadata,
        responseTime: Date.now() - startTime,
        cached: false,
        source: "excel-data-complete",
        figmaReady: true,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({
      success: false,
      error: error.message || "Internal server error"
    }, { status: 500 });
  }
}