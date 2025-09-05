"use client";

import * as React from "react";
import {
  CircleCheck,
  Book,
  GraduationCap,
  Cpu,
  BriefcaseBusiness,
  BookMarked,
} from "lucide-react";
import useCareerGuidance from "@/features/career/api/get";
import { getCookie } from "@/libs/Cookie";
import Container from "@/components/Container";

const universities = [
  {
    id: 1,
    name: "Faculté des Sciences",
    courses: [
      { id: 1, name: "Informatique / Data Science" },
      { id: 2, name: "Informatique" },
    ],
  },
  {
    id: 2,
    name: "ENSA",
    courses: [
      { id: 1, name: "Génie Informatique" },
      { id: 2, name: "Big Data / Cybersécurité" },
      { id: 3, name: "Tronc commun" },
    ],
  },
  {
    id: 3,
    name: "UIR",
    courses: [
      { id: 1, name: "Big Data / SSI / IA" },
      { id: 2, name: "Ingénierie informatique" },
    ],
  },
  {
    id: 4,
    name: "ENSET",
    courses: [
      { id: 1, name: "Systèmes Informatiques Distribués" },
      { id: 2, name: "Métiers du développement logiciel" },
    ],
  },
  {
    id: 5,
    name: "ENSIAS",
    courses: [
      { id: 1, name: "IA, Data, SSI, Génie logiciel" },
      { id: 2, name: "Tronc commun" },
    ],
  },
  {
    id: 6,
    name: "ENSAM",
    courses: [
      { id: 1, name: "Systèmes embarqués / Télécom" },
      { id: 2, name: "Tronc commun" },
    ],
  },
];

function IconCircle({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${color}`}
    >
      {children}
    </span>
  );
}

const COLORS = {
  green: {
    border: "border-green-500",
    bg: "bg-green-100",
    text: "text-green-700",
  },
  pink: { border: "border-pink-600", bg: "bg-pink-100", text: "text-pink-700" },
  yellow: {
    border: "border-yellow-600",
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  purple: {
    border: "border-purple-500",
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
};

// components/LearningRoadmapSkeleton.tsx
function LearningRoadmapSkeleton() {
  return (
    <div className="animate-pulse space-y-10">
      {/* Course Name */}
      <section className="mx-auto px-2 md:px-6 pt-8">
        <div className="h-6 w-56 bg-gray-300 rounded-md mb-4"></div>
      </section>

      {/* Foundation Phase */}
      <section className="mx-auto px-2 md:px-6 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="h-6 w-64 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-4 flex gap-3 items-center border border-gray-100"
            >
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
                <div className="h-3 w-64 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intermediate Phase */}
      <section className="mx-auto px-2 md:px-6 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="h-6 w-64 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-4 flex gap-3 items-center border border-gray-100"
            >
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
                <div className="h-3 w-64 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Phase */}
      <section className="mx-auto px-2 md:px-6 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="h-6 w-64 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-4 flex gap-3 items-center border border-gray-100"
            >
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
                <div className="h-3 w-64 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const keyTranslations: Record<string, string> = {
  universityName: "Nom de l’université",
  courseName: "Nom du cours",
  academicLevel: "Niveau académique",
  programOverview: "Aperçu du programme",
  description: "Description",
  duration: "Durée",
  mainFocus: "Axe principal",
  technologyStack: "Pile technologique",
  technologyName: "Nom de la technologie",
  category: "Catégorie",
  marketDemand: "Demande sur le marché",
  learningPriority: "Priorité d’apprentissage",
  moroccanMarketRelevance: "Pertinence pour le marché marocain",
  learningRoadmap: "Feuille de route d’apprentissage",
  foundationPhase: "Phase de base",
  intermediatePhase: "Phase intermédiaire",
  advancedPhase: "Phase avancée",
  careerOpportunities: "Opportunités de carrière",
  jobTitle: "Intitulé du poste",
  jobDescription: "Description du poste",
  requiredSkills: "Compétences requises",
  salaryRange: "Échelle salariale",
  entryLevel: "Débutant",
  experienced: "Expérimenté",
  senior: "Senior",
  demandLevel: "Niveau de demande",
  growthProspect: "Perspectives de croissance",
  companiesHiring: "Entreprises qui recrutent",
  skillsGapAnalysis: "Analyse des écarts de compétences",
  strengths: "Forces",
  weaknesses: "Faiblesses",
  rating: "Évaluation",
  industryDemand: "Demande du secteur",
  criticalSkills: "Compétences critiques",
  emergingSkills: "Compétences émergentes",
  industryReadySkills: "Compétences prêtes pour l’industrie",
  gapAnalysis: "Analyse des écarts",
  technicalRoadmapSuggestions: "Suggestions de feuille de route technique",
  softSkillsDevelopment: "Développement des compétences comportementales",
  projectIdeas: "Idées de projets",
  certificationsRecommended: "Certifications recommandées",
  moroccanJobMarket: "Marché de l’emploi marocain",
  overallDemand: "Demande globale",
  trendAnalysis: "Analyse des tendances",
  keyIndustries: "Secteurs clés",
  averageSalaryRanges: "Fourchettes salariales moyennes",
  freshGraduate: "Jeune diplômé",
  midLevel: "Niveau intermédiaire",
  topCompanies: "Entreprises principales",
  locationHotspots: "Lieux stratégiques",
  futureOutlook: "Perspectives futures",
  nextStepsAction: "Prochaines étapes et actions",
  industryInsights: "Aperçus du secteur",
  currentTrends: "Tendances actuelles",
  emergingTechnologies: "Technologies émergentes",
  skillsInDemand: "Compétences demandées",
  challengesFaced: "Défis rencontrés",
  opportunitiesAvailable: "Opportunités disponibles",
  personalizedAdvice: "Conseils personnalisés",
  strengthsToLeverage: "Forces à exploiter",
  areasToImprove: "Axes d’amélioration",
  careerPathOptions: "Options de parcours professionnel",
  differentiationStrategy: "Stratégie de différenciation",
  networkingAdvice: "Conseils en réseautage",
  metadata: "Métadonnées",
  generatedAt: "Généré le",
  dataSource: "Source des données",
  lastUpdated: "Dernière mise à jour",
  tokens: "Jetons",
  source: "Source",
  hasMatchingData: "Données correspondantes",
  timestamp: "Horodatage",
};

// Helper → format camelCase → Normal text
const formatName = (str: string) => {
  return keyTranslations[str] || str.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
};


interface ColorTheme {
  border: string;
  bg: string;
  text: string;
}

interface GenerateCardProps {
  objName: string;
  data: any;
  color: ColorTheme; // 🎨 color passed as prop
}

const GenerateCard: React.FC<GenerateCardProps> = ({
  objName,
  data,
  color,
}) => {
  const renderObject = (item: any, idx?: number) => (
    <div
      key={idx}
      className={`bg-white rounded-xl shadow-sm border-l-4 p-6 flex flex-col gap-2 border border-gray-100 ${color.border}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`${color.bg} w-8 h-8 flex items-center justify-center rounded-full`}
        >
          <span className={`font-bold ${color.text} text-lg`}>
            {idx !== undefined ? idx + 1 : 1}
          </span>
        </div>
        <span className={`font-semibold ${color.text} text-lg capitalize`}>
          {formatName(objName)}
        </span>
      </div>

      {Object.entries(item).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className={`font-semibold ${color.text} capitalize`}>
            {formatName(key)}:
          </span>

          {Array.isArray(value) ? (
            <ul className="text-base text-gray-700 list-disc ml-4">
              {value.map((v, i) => (
                <li key={i}>{typeof v === "object" ? JSON.stringify(v) : v}</li>
              ))}
            </ul>
          ) : typeof value === "object" && value !== null ? (
            <ul className="text-base text-gray-700 list-disc ml-4">
              {Object.entries(value).map(([subKey, subVal]) => (
                <li key={subKey}>
                  <strong lang="fr">{formatName(subKey)}:</strong>{" "}
                  {typeof subVal === "object"
                    ? JSON.stringify(subVal)
                    : String(subVal)}
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-gray-700 ml-2">{String(value)}</span>
          )}
        </div>
      ))}
    </div>
  );

  if (Array.isArray(data)) {
    // Check if the first element is an object to decide rendering
    if (data.length > 0 && typeof data[0] === "object" && data[0] !== null) {
      return <>{data.map((item, idx) => renderObject(item, idx))}</>;
    } else {
      // Array of strings or primitives - simple map
      return (
        <div
          className={`bg-white rounded-xl shadow-sm border-l-4 p-6 flex flex-col gap-2 border border-gray-100 ${color.border}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span lang="fr" className={`font-semibold ${color.text} text-lg capitalize`}>
              {formatName(objName)}
            </span>
          </div>

          <ul className="list-disc ml-6 text-gray-700">
            {data.map((item, idx) => (
              <li key={idx}>{String(item)}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
  if (typeof data === "object" && data !== null) {
    return renderObject(data);
  }
  return null;
};

function Career() {
  const [load, setLoad] = React.useState<boolean>(true);
  const [store, setStore] = React.useState<any>(null);

  const { getCareerGuidance } = useCareerGuidance();

  const getCareer = async () => {
    setLoad(true);
    const { data } = await getCareerGuidance({
      university: `${decodeURIComponent(
        getCookie("selectedUniversity") ?? universities[0].name
      )}`,
      course: `${decodeURIComponent(
        getCookie("selectedCourse") ?? universities[0].courses[0].name
      )}`,
    });

    if (data.success) {
      setStore(data);
    } else {
      setStore(null);
    }
    setLoad(false);
  };

  React.useEffect(() => {
    getCareer();
  }, []);

  return (
    <Container className="py-0 md:py-8">
      {load ? (
        <LearningRoadmapSkeleton />
      ) : (
        <>
          <section className="mx-auto px-2 md:px-6 pt-8">
            <h2 className="font-bold text-2xl text-gray-900">
              {store?.courseName}
            </h2>
          </section>
          {/* Foundation Year */}
          <section className="mx-auto px-2 md:px-6 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle color="bg-green-100">
                <Book className="text-green-500" />
              </IconCircle>
              <h2 className="font-bold text-2xl text-gray-900">Tronc Commun</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.foundationSkills &&
                typeof store?.foundationSkills === "object" &&
                Object.keys(store?.foundationSkills).map((semester: string) => (
                  <div key={semester} className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
                      {semester.replace(/^semester/, "Semestre ")}
                    </h3>
                    <div className="space-y-3">
                      {Array.isArray(store?.foundationSkills[semester]) &&
                        store?.foundationSkills[semester].map(
                          (skill: string, i: number) => (
                            <div
                              key={i}
                              className="bg-white rounded-xl shadow-sm p-2 flex gap-3 items-start border border-gray-100 items-center"
                            >
                              <IconCircle color="bg-green-100">
                                <BookMarked className="text-green-500" />
                              </IconCircle>
                              <div>
                                <div className="font-semibold text-gray-900 pt-1">
                                  {skill}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Bachelor's Level */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle color="bg-blue-100">
                <GraduationCap className="text-blue-500" />
              </IconCircle>
              <h2 className="font-bold text-2xl text-gray-900">Licence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.licenseSkills &&
                typeof store?.licenseSkills === "object" &&
                Object.keys(store?.licenseSkills).map((semester: string) => (
                  <div key={semester} className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
                      {semester.replace(/^semester/, "Semestre ")}
                    </h3>
                    <div className="space-y-3">
                      {Array.isArray(store?.licenseSkills[semester]) &&
                        store?.licenseSkills[semester].map(
                          (skill: string, i: number) => (
                            <div
                              key={i}
                              className="bg-white rounded-xl shadow-sm p-2 flex gap-3 items-start border border-gray-100 items-center"
                            >
                              <IconCircle color="bg-green-100">
                                <BookMarked className="text-green-500" />
                              </IconCircle>
                              <div>
                                <div className="font-semibold text-gray-900 pt-1">
                                  {skill}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Master's Level */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle color="bg-purple-100">
                <Cpu className="text-purple-500" />
              </IconCircle>
              <h2 className="font-bold text-2xl text-gray-900">Master Level</h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Spécialisez-vous dans des compétences à fort impact. Des
              compétences à l&absp;épreuve du futur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.masterSkills &&
                typeof store?.masterSkills === "object" &&
                Object.keys(store?.masterSkills).map((semester: string) => (
                  <div key={semester} className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
                      {semester.replace(/^semester/, "Semestre ")}
                    </h3>
                    <div className="space-y-3">
                      {Array.isArray(store?.masterSkills[semester]) &&
                        store?.masterSkills[semester].map(
                          (skill: string, i: number) => (
                            <div
                              key={i}
                              className="bg-white rounded-xl shadow-sm p-2 flex gap-3 items-start border border-gray-100 items-center"
                            >
                              <IconCircle color="bg-green-100">
                                <BookMarked className="text-green-500" />
                              </IconCircle>
                              <div>
                                <div className="font-semibold text-gray-900 pt-1">
                                  {skill}
                                </div>
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Moroccan Job Market */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle color="bg-green-100">
                <BriefcaseBusiness className="text-green-500" />
              </IconCircle>
              <h2 className="font-bold text-2xl text-gray-900">
                {"Marché de l’emploi marocain"}
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              {
                "Aperçus du marché de l’emploi local, des opportunités et des tendances."
              }
            </p>

            {/* Market Overview and Key Industries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="font-semibold text-lg text-green-900 mb-3">
                  {"Aperçu du marché"}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800 font-medium">
                      Demande Globale:
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        store?.moroccanJobMarket?.overallDemand === "High"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {store?.moroccanJobMarket?.overallDemand}
                    </span>
                  </div>
                  <div className="text-green-800">
                    <span className="font-medium">Trend:</span>
                    <p className="text-sm mt-1">
                      {store?.moroccanJobMarket?.trendAnalysis}
                    </p>
                  </div>
                  <div className="text-green-800">
                    <span className="font-medium">Outlook:</span>
                    <p className="text-sm mt-1">
                      {store?.moroccanJobMarket?.futureOutlook}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-semibold text-lg text-blue-900 mb-3">
                  Secteurs clés
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {store?.moroccanJobMarket?.keyIndustries &&
                    Array.isArray(store?.moroccanJobMarket?.keyIndustries) &&
                    store?.moroccanJobMarket?.keyIndustries.map(
                      (industry: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-blue-800 text-sm">
                            {industry}
                          </span>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>

            {/* Top Companies and Location Hotspots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-50 rounded-xl p-6 shadow-sm border border-yellow-100">
                <h3 className="font-semibold text-lg text-yellow-900 mb-3">
                  Entreprises principales
                </h3>
                <div className="space-y-2">
                  {store?.moroccanJobMarket?.topCompanies &&
                    Array.isArray(store?.moroccanJobMarket?.topCompanies) &&
                    store?.moroccanJobMarket?.topCompanies.map(
                      (company: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <CircleCheck className="text-yellow-600 text-sm" />
                          <span className="text-yellow-800 text-sm">
                            {company}
                          </span>
                        </div>
                      )
                    )}
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                <h3 className="font-semibold text-lg text-purple-900 mb-3">
                  Lieux stratégiques
                </h3>
                <div className="space-y-2">
                  {store?.moroccanJobMarket?.locationHotspots &&
                    Array.isArray(store?.moroccanJobMarket?.locationHotspots) &&
                    store?.moroccanJobMarket?.locationHotspots.map(
                      (location: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <CircleCheck className="text-purple-600 text-sm" />
                          <span className="text-purple-800 text-sm">
                            {location}
                          </span>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>

            {/* Salary Ranges */}
            {store?.moroccanJobMarket?.averageSalaryRanges && (
              <div className="bg-indigo-50 rounded-xl p-6 shadow-sm border border-indigo-100">
                <h3 className="font-semibold text-lg text-indigo-900 mb-3">
                  Fourchettes de salaires moyens
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-700">
                      {
                        store?.moroccanJobMarket?.averageSalaryRanges
                          ?.freshGraduate
                      }
                    </div>
                    <div className="text-indigo-600 text-sm">Jeune diplômé</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-700">
                      {store?.moroccanJobMarket?.averageSalaryRanges?.midLevel}
                    </div>
                    <div className="text-indigo-600 text-sm">
                      Niveau intermédiaire
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-700">
                      {store?.moroccanJobMarket?.averageSalaryRanges?.senior}
                    </div>
                    <div className="text-indigo-600 text-sm">Niveau senior</div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Technology Stack */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle color="bg-blue-100">
                <Cpu className="text-blue-500" />
              </IconCircle>
              <h2 className="font-bold text-2xl text-gray-900">
                Pile technologique
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Technologies essentielles et leur pertinence sur le marché pour
              votre parcours professionnel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.technologyStack &&
                Array.isArray(store?.technologyStack) &&
                store?.technologyStack.map((tech: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <IconCircle color="bg-blue-100">
                        <Cpu className="text-blue-500" />
                      </IconCircle>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {tech?.technologyName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {tech?.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      {tech?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tech?.marketDemand === "High"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {tech?.marketDemand} Demande
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tech?.learningPriority === "High"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {tech?.learningPriority} Priorité
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                      <span className="font-medium">Marché marocain:</span>{" "}
                      {tech?.moroccanMarketRelevance}
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Next Steps & Actions */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle color="bg-purple-100">
                <GraduationCap className="text-purple-500" />
              </IconCircle>
              <h2 className="font-bold text-2xl text-gray-900">
                Prochaines étapes et actions
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Mesures concrètes pour faire progresser votre carrière et
              développer vos compétences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.nextStepsAction &&
                Array.isArray(store?.nextStepsAction) &&
                store?.nextStepsAction.map((action: string, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <IconCircle color="bg-purple-100">
                        <CircleCheck className="text-purple-500" />
                      </IconCircle>
                      <span className="font-medium text-gray-900">
                        {action}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Personalized Advice */}
          <section className="mx-auto px-2 md:px-6 mt-14">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle color="bg-pink-100">
                <Book className="text-pink-500" />
              </IconCircle>
              <h2 className="font-bold text-2xl text-gray-900">
                Conseils personnalisés
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Recommandations sur mesure pour vous aider à exploiter vos atouts
              et à améliorer vos axes de progression.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-xl p-6 shadow-sm border border-pink-100">
                <h3 className="font-semibold text-lg text-pink-900 mb-3">
                  Forces à exploiter
                </h3>
                <ul className="space-y-2">
                  {store?.personalizedAdvice?.strengthsToLeverage &&
                    Array.isArray(
                      store?.personalizedAdvice?.strengthsToLeverage
                    ) &&
                    store?.personalizedAdvice?.strengthsToLeverage.map(
                      (strength: string, index: number) => (
                        <li
                          key={index}
                          className="text-pink-800 flex items-center gap-2"
                        >
                          <CircleCheck className="text-pink-500 text-sm" />
                          <span className="text-sm">{strength}</span>
                        </li>
                      )
                    )}
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 shadow-sm border border-orange-100">
                <h3 className="font-semibold text-lg text-orange-900 mb-3">
                  {"Axes d’amélioration"}
                </h3>
                <ul className="space-y-2">
                  {store?.personalizedAdvice?.areasToImprove &&
                    Array.isArray(store?.personalizedAdvice?.areasToImprove) &&
                    store?.personalizedAdvice?.areasToImprove.map(
                      (area: string, index: number) => (
                        <li
                          key={index}
                          className="text-orange-800 flex items-center gap-2"
                        >
                          <CircleCheck className="text-orange-500 text-sm" />
                          <span className="text-sm">{area}</span>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>

            {/* Career Path Options and Networking Advice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="font-semibold text-lg text-blue-900 mb-3">
                  Options de parcours professionnel
                </h3>
                <div className="space-y-2">
                  {store?.personalizedAdvice?.careerPathOptions &&
                    Array.isArray(
                      store?.personalizedAdvice?.careerPathOptions
                    ) &&
                    store?.personalizedAdvice?.careerPathOptions.map(
                      (path: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-blue-800 text-sm">{path}</span>
                        </div>
                      )
                    )}
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="font-semibold text-lg text-green-900 mb-3">
                  Conseils en réseautage
                </h3>
                <ul className="space-y-2">
                  {store?.personalizedAdvice?.networkingAdvice &&
                    Array.isArray(
                      store?.personalizedAdvice?.networkingAdvice
                    ) &&
                    store?.personalizedAdvice?.networkingAdvice.map(
                      (advice: string, index: number) => (
                        <li
                          key={index}
                          className="text-green-800 flex items-center gap-2"
                        >
                          <CircleCheck className="text-green-500 text-sm" />
                          <span className="text-sm">{advice}</span>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </section>

          {/* College vs Market */}
          <section className="mx-auto px-2 md:px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <IconCircle color="bg-blue-200">
                  <GraduationCap className="text-blue-600" />
                </IconCircle>
                <span className="font-semibold text-lg">
                  Ce que votre université enseigne
                </span>
              </div>
              <span className="font-semibold text-sm">Forces</span>
              <ul className="text-base text-blue-900 list-disc ml-4 mb-2">
                {store?.skillsGapAnalysis?.universityTeaching?.strengths &&
                  Array.isArray(
                    store?.skillsGapAnalysis?.universityTeaching?.strengths
                  ) &&
                  store?.skillsGapAnalysis?.universityTeaching?.strengths
                    .length > 0 &&
                  store?.skillsGapAnalysis?.universityTeaching?.strengths.map(
                    (item: any, index: number) => (
                      <li className="flex items-center gap-2 mb-2" key={index}>
                        <CircleCheck className="text-blue-500" />
                        {item}
                      </li>
                    )
                  )}
              </ul>
              <span className="font-semibold text-sm">Faiblesses</span>
              <ul className="text-base text-blue-900 list-disc ml-4 mb-2">
                {store?.skillsGapAnalysis?.universityTeaching?.weaknesses &&
                  Array.isArray(
                    store?.skillsGapAnalysis?.universityTeaching?.weaknesses
                  ) &&
                  store?.skillsGapAnalysis?.universityTeaching?.weaknesses
                    .length > 0 &&
                  store?.skillsGapAnalysis?.universityTeaching?.weaknesses.map(
                    (item: any, index: number) => (
                      <li className="flex items-center gap-2 mb-2" key={index}>
                        <CircleCheck className="text-blue-500" />
                        {item}
                      </li>
                    )
                  )}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <IconCircle color="bg-green-200">
                  <BriefcaseBusiness className="text-green-600" />
                </IconCircle>
                <span className="font-semibold text-green-900 text-lg">
                  Ce qui est demandé sur le marché
                </span>
              </div>
              <span className="font-semibold text-sm">Demande du secteur</span>
              <ul className="text-base text-blue-900 list-disc ml-4 mb-2">
                {store?.skillsGapAnalysis?.industryDemand?.criticalSkills &&
                  Array.isArray(
                    store?.skillsGapAnalysis?.industryDemand?.criticalSkills
                  ) &&
                  store?.skillsGapAnalysis?.industryDemand?.criticalSkills
                    .length > 0 &&
                  store?.skillsGapAnalysis?.industryDemand?.criticalSkills.map(
                    (item: any, index: number) => (
                      <li className="flex items-center gap-2 mb-2" key={index}>
                        <CircleCheck className="text-green-500" />
                        {item}
                      </li>
                    )
                  )}
              </ul>
              <span className="font-semibold text-sm">
                Compétences émergentes
              </span>
              <ul className="text-base text-blue-900 list-disc ml-4 mb-2">
                {store?.skillsGapAnalysis?.industryDemand?.emergingSkills &&
                  Array.isArray(
                    store?.skillsGapAnalysis?.industryDemand?.emergingSkills
                  ) &&
                  store?.skillsGapAnalysis?.industryDemand?.emergingSkills
                    .length > 0 &&
                  store?.skillsGapAnalysis?.industryDemand?.emergingSkills.map(
                    (item: any, index: number) => (
                      <li className="flex items-center gap-2 mb-2" key={index}>
                        <CircleCheck className="text-green-500" />
                        {item}
                      </li>
                    )
                  )}
              </ul>
              <span className="font-semibold text-sm">
                {"Compétences prêtes pour l’industrie"}
              </span>
              <ul className="text-base text-blue-900 list-disc ml-4 mb-2">
                {store?.skillsGapAnalysis?.industryDemand
                  ?.industryReadySkills &&
                  Array.isArray(
                    store?.skillsGapAnalysis?.industryDemand
                      ?.industryReadySkills
                  ) &&
                  store?.skillsGapAnalysis?.industryDemand?.industryReadySkills
                    .length > 0 &&
                  store?.skillsGapAnalysis?.industryDemand?.industryReadySkills.map(
                    (item: any, index: number) => (
                      <li className="flex items-center gap-2 mb-2" key={index}>
                        <CircleCheck className="text-green-500" />
                        {item}
                      </li>
                    )
                  )}
              </ul>
            </div>
          </section>

          {/* Global Job Market */}
          <section className="mx-auto px-2 md:px-6 mt-16">
            <h3 className="font-bold text-2xl text-gray-900 mb-8">
              {"Ce qui est demandé sur le marché mondial de l’emploi"}
            </h3>
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              {store?.careerOpportunities && (
                <GenerateCard
                  objName="Opportunités de carrière"
                  data={store?.careerOpportunities}
                  color={COLORS.green}
                />
              )}
              {/* Card 2 */}
              {store?.technicalRoadmapSuggestions && (
                <GenerateCard
                  objName="Suggestions de feuille de route technique"
                  data={store?.technicalRoadmapSuggestions}
                  color={COLORS.pink}
                />
              )}
              {/* Card 3 */}
              {store?.softSkillsDevelopment && (
                <GenerateCard
                  objName="Développement des compétences comportementales"
                  data={store?.softSkillsDevelopment}
                  color={COLORS.purple}
                />
              )}
              {/* Card 4 */}
              {store?.projectIdeas && (
                <GenerateCard
                  objName="Idées de projets"
                  data={store?.projectIdeas}
                  color={COLORS.yellow}
                />
              )}
            </div>
          </section>

          {/* Skills Comparison Table */}
          <section className="mx-auto px-2 md:px-6 mt-16">
            <h3 className="font-bold text-2xl text-gray-900 mb-6">
              Compétences universitaires
            </h3>
            <div className="flex flex-col gap-y-5">
              {store?.certificationsRecommended && (
                <GenerateCard
                  objName="Certifications recommandées"
                  data={store?.certificationsRecommended}
                  color={COLORS.yellow}
                />
              )}
              {store?.technologyStack && (
                <GenerateCard
                  objName="Pile technologique"
                  data={store?.technologyStack}
                  color={COLORS.pink}
                />
              )}
              {store?.industryInsights && (
                <GenerateCard
                  objName="Aperçus du secteur"
                  data={store?.industryInsights}
                  color={COLORS.green}
                />
              )}
              {store?.programOverview && (
                <GenerateCard
                  objName="Aperçu du programme"
                  data={store?.programOverview}
                  color={COLORS.purple}
                />
              )}
            </div>
          </section>
        </>
      )}
    </Container>
  );
}

export default Career;
