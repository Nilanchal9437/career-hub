"use client";

import * as React from "react";
import {
  CircleCheck,
  Book,
  GraduationCap,
  Cpu,
  BriefcaseBusiness,
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

// Helper → format camelCase → Normal text
const formatName = (str: string) =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

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
                  <strong>{formatName(subKey)}:</strong>{" "}
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
    return <>{data.map((item, idx) => renderObject(item, idx))}</>;
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
              <h2 className="font-bold text-2xl text-gray-900">
                Tronc Commun (Foundation Year)
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.foundationSkills &&
                Array.isArray(store?.foundationSkills) &&
                store?.foundationSkills.length > 0 &&
                store?.foundationSkills?.map((s: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-2 flex gap-3 items-start border border-gray-100 items-center"
                  >
                    <IconCircle color="bg-green-100">
                      <CircleCheck className="text-green-500" />
                    </IconCircle>
                    <div>
                      <div className="font-semibold text-gray-900 pt-1">
                        {s?.skillName}
                      </div>
                      <div className="text-xs text-gray-500 leading-snug">
                        {s?.description}
                      </div>
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
              <h2 className="font-bold text-2xl text-gray-900">
                Licence (Bachelor's Level)
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.licenseSkills &&
                Array.isArray(store?.licenseSkills) &&
                store?.licenseSkills.length > 0 &&
                store?.licenseSkills?.map((s: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-2 flex gap-3 items-start border border-gray-100 items-center"
                  >
                    <IconCircle color="bg-green-100">
                      <CircleCheck className="text-green-500" />
                    </IconCircle>
                    <div>
                      <div className="font-semibold text-gray-900 pt-1">
                        {s?.skillName}
                      </div>
                      <div className="text-xs text-gray-500 leading-snug">
                        {s?.description}
                      </div>
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
              <h2 className="font-bold text-2xl text-gray-900">
                Masters Level
              </h2>
            </div>
            <p className="text-gray-500 mb-6 ml-1">
              Specialize in high-impact skills. Future proof skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store?.masterSkills &&
                Array.isArray(store?.masterSkills) &&
                store?.masterSkills.length > 0 &&
                store?.masterSkills?.map((s: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-2 flex gap-3 items-start border border-gray-100 items-center"
                  >
                    <IconCircle color="bg-green-100">
                      <CircleCheck className="text-green-500" />
                    </IconCircle>
                    <div>
                      <div className="font-semibold text-gray-900 pt-1">
                        {s?.skillName}
                      </div>
                      <div className="text-xs text-gray-500 leading-snug">
                        {s?.description}
                      </div>
                    </div>
                  </div>
                ))}
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
                  What Your College Teaches
                </span>
              </div>
              <span className="font-semibold text-sm">Strengths</span>
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
              <span className="font-semibold text-sm">Weaknesses</span>
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
                  What's Demanded in the Market
                </span>
              </div>
              <span className="font-semibold text-sm">Industry Demand</span>
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
              <span className="font-semibold text-sm">Emerging Skills</span>
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
                IndustryReady Skills
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
              What's Demanded in the Global Job Market
            </h3>
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              {store?.careerOpportunities && (
                <GenerateCard
                  objName="Career Opportunities"
                  data={store?.careerOpportunities}
                  color={COLORS.green}
                />
              )}
              {/* Card 2 */}
              {store?.technicalRoadmapSuggestions && (
                <GenerateCard
                  objName="TechnicalRoadmap Suggestions"
                  data={store?.technicalRoadmapSuggestions}
                  color={COLORS.pink}
                />
              )}
              {/* Card 3 */}
              {store?.softSkillsDevelopment && (
                <GenerateCard
                  objName="Soft Skills Development"
                  data={store?.softSkillsDevelopment}
                  color={COLORS.purple}
                />
              )}
              {/* Card 4 */}
              {store?.projectIdeas && (
                <GenerateCard
                  objName="Project Ideas"
                  data={store?.projectIdeas}
                  color={COLORS.yellow}
                />
              )}
            </div>
          </section>

          {/* Skills Comparison Table */}
          <section className="mx-auto px-2 md:px-6 mt-16">
            <h3 className="font-bold text-2xl text-gray-900 mb-6">
              University Skills
            </h3>
            <div className="flex flex-col gap-y-5">
              {store?.certificationsRecommended && (
                <GenerateCard
                  objName="Certifications Recommended"
                  data={store?.certificationsRecommended}
                  color={COLORS.yellow}
                />
              )}
              {store?.technologyStack && (
                <GenerateCard
                  objName="Technology Stack"
                  data={store?.technologyStack}
                  color={COLORS.pink}
                />
              )}
              {store?.industryInsights && (
                <GenerateCard
                  objName="Industry Insights"
                  data={store?.industryInsights}
                  color={COLORS.green}
                />
              )}
              {store?.programOverview && (
                <GenerateCard
                  objName="Program Overview"
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
