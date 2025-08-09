"use client";

import * as React from "react";
import { CircleCheck, Book, GraduationCap, Cpu } from "lucide-react";
import useCareerGuidance from "@/features/career/api/get";
import { getCookie } from "@/libs/Cookie";

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

function SkillGrid({ skills }: { skills: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-sm p-2 flex gap-3 items-start border border-gray-100 items-center"
        >
          <IconCircle color="bg-green-100">
            <CircleCheck className="text-green-500" />
          </IconCircle>
          <div>
            <div className="font-semibold text-gray-900">{s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Career() {
  const [store, setStore] = React.useState<any>(null);

  const { getCareerGuidance } = useCareerGuidance();

  const getCareer = async () => {
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
  };

  React.useEffect(() => {
    getCareer();
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen w-full py-0 md:py-8">
      {/* Foundation Year */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <IconCircle color="bg-green-100">
            <Book className="text-green-500" />
          </IconCircle>
          <h2 className="font-bold text-2xl text-gray-900">{store?.course}</h2>
        </div>
        <p className="text-gray-500 mb-6 ml-1">
          Build your coding mindset with strong foundation.
        </p>
        <SkillGrid skills={(store?.modules as string[]) ?? []} />
      </section>

      {/* Bachelor's Level */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-14">
        <div className="flex items-center gap-3 mb-6">
          <IconCircle color="bg-blue-100">
            <GraduationCap className="text-blue-500" />
          </IconCircle>
          <h2 className="font-bold text-2xl text-gray-900">
            {store?.level ?? ""}
          </h2>
        </div>
        <p className="text-gray-500 mb-6 ml-1">
          Become job ready in {store?.course} + launch data fields.
        </p>
        <SkillGrid skills={(store?.learningPath as string[]) ?? []} />
      </section>

      {/* Master's Level */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-14">
        <div className="flex items-center gap-3 mb-6">
          <IconCircle color="bg-purple-100">
            <Cpu className="text-purple-500" />
          </IconCircle>
          <h2 className="font-bold text-2xl text-gray-900">
            {store?.level ?? ""} Skills
          </h2>
        </div>
        <p className="text-gray-500 mb-6 ml-1">
          Specialize in high-impact skills. Future proof skills.
        </p>
        <SkillGrid skills={(store?.essentialSkills as string[]) ?? []} />
      </section>

      {/* College vs Market */}
      {/* <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <IconCircle color="bg-blue-200">
              <IconInfo className="text-blue-500" />
            </IconCircle>
            <span className="font-semibold text-blue-900 text-lg">
              What Your College Teaches
            </span>
          </div>
          <ul className="text-base text-blue-900 list-disc ml-7 mb-2">
            <li>Core Python programming</li>
            <li>Key topics: syntax, functions, OOP</li>
            <li>Probably more solo or specific academic projects</li>
            <li>
              <span className="font-semibold text-green-700">
                Good foundation
              </span>{" "}
              but not enough for today's job market
            </li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-green-100">
          <div className="flex items-center gap-2 mb-2">
            <IconCircle color="bg-green-200">
              <IconMarket className="text-green-600" />
            </IconCircle>
            <span className="font-semibold text-green-900 text-lg">
              What's Demanded in the Market
            </span>
          </div>
          <ul className="text-base text-green-900 list-disc ml-7 mb-2">
            <li className="flex items-center gap-2">
              <IconCheck className="text-green-500" />
              Backend frameworks (Django, FastAPI)
            </li>
            <li className="flex items-center gap-2">
              <IconCheck className="text-green-500" />
              Databases (relational, SQL, ORM, GCP)
            </li>
            <li className="flex items-center gap-2">
              <IconCheck className="text-green-500" />
              Version control & CI/CD
            </li>
            <li className="flex items-center gap-2">
              <IconCheck className="text-green-500" />
              Data & ML skills
            </li>
            <li>
              <span className="font-semibold text-green-700">
                Industry-ready skills
              </span>{" "}
              that make your resume stand out
            </li>
          </ul>
        </div>
      </section> */}

      {/* Global Job Market */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16">
        <h3 className="font-bold text-2xl text-gray-900 mb-8">
          What's Demanded in the Global Job Market
        </h3>
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-green-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <IconCircle color="bg-green-100">
                <span className="font-bold text-green-700 text-lg">1</span>
              </IconCircle>
              <span className="font-semibold text-green-700 text-lg">
                {store?.level ?? ""} level {store?.course} Developer Skills
              </span>
            </div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              {store?.essentialSkills.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-purple-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <IconCircle color="bg-purple-100">
                <span className="font-bold text-purple-700 text-lg">2</span>
              </IconCircle>
              <span className="font-semibold text-purple-700 text-lg">
                Industry Demand {store?.industryDemand ?? ""}
              </span>
            </div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              {store?.careerOpportunities.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-blue-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <IconCircle color="bg-blue-100">
                <span className="font-bold text-blue-700 text-lg">3</span>
              </IconCircle>
              <span className="font-semibold text-blue-700 text-lg">
                Market Growth & Gaps
              </span>
            </div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              {store?.nextSteps.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-red-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <IconCircle color="bg-red-100">
                <span className="font-bold text-red-700 text-lg">4</span>
              </IconCircle>
              <span className="font-semibold text-red-700 text-lg">
                University vs. Industry: Skill Gaps
              </span>
            </div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              {store?.recommendedCertifications.map(
                (item: string, index: number) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <ol className="ml-3 text-base text-gray-700 list-decimal list-inside">
              {store?.technologyStack.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Skills Comparison Table */}
      {/* <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16">
        <h3 className="font-bold text-2xl text-gray-900 mb-6">
          University vs. Industry: Skills Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-sm text-base border border-gray-100">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold">Areas</th>
                <th className="px-4 py-3 text-left font-semibold">
                  University Focus
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Industry Demand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Python basics",
                  "Syntax, functions, OOP",
                  <span className="text-green-700 font-semibold">
                    Core + frameworks & clean code practices
                  </span>,
                ],
                [
                  "Backend development",
                  "Limited",
                  "Django, FastAPI, REST APIs",
                ],
                ["Containerization", "N/A", "Docker, CI/CD, DevOps, cloud"],
                [
                  "AI/ML skills",
                  "Basic stats, ML foundations",
                  "scikit-learn, TensorFlow, PyTorch",
                ],
                [
                  "Soft skills",
                  "Not emphasized",
                  "Collaboration, teamwork, critical thinking",
                ],
                [
                  "Statistics",
                  "Academic, theoretical",
                  "Visualization, reporting, storytelling",
                ],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      {/* What You Should Learn Next */}
      {/* <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16">
        <h3 className="font-bold text-2xl text-gray-900 mb-6">
          What You Should Learn Next
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <IconCircle color="bg-green-100">
                <IconCheck />
              </IconCircle>
              <span className="font-semibold text-green-700 text-lg">
                Technical Stack Roadmap
              </span>
            </div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Backend: Learn Django or FastAPI + ORM/REST API</li>
              <li>SQL/NoSQL (PostgreSQL, MySQL, MongoDB)</li>
              <li>Docker, container, AWS fundamentals</li>
              <li>All APIs: Flask, FastAPI, NumPy, Scikit Learn</li>
              <li>
                Greenfield: Ex: Explore skills like LLMs, API for natural
                automation
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <IconCircle color="bg-green-100">
                <IconCheck />
              </IconCircle>
              <span className="font-semibold text-green-700 text-lg">
                Soft/Support Skills
              </span>
            </div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Git workflows & teamwork</li>
              <li>CI/CD basics (GitHub Actions, Jenkins)</li>
              <li>Written communication & clarity</li>
              <li>Problem-solving methodology</li>
              <li>Collaborative development</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <IconCircle color="bg-purple-100">
                <IconHat />
              </IconCircle>
              <span className="font-semibold text-purple-700 text-lg">
                Project Ideas
              </span>
            </div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Blog site or e-commerce backend</li>
              <li>Data viz, ML model: classification or regression</li>
              <li>Generator API: text, image, chatbot or video</li>
              <li>Any integration project with authentication</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Final Take */}
      {/* <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16 mb-10">
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <IconCircle color="bg-blue-200">
              <IconInfo className="text-blue-500" />
            </IconCircle>
            <span className="font-semibold text-blue-900 text-lg">
              Final Take
            </span>
          </div>
          <div className="text-gray-700 text-base">
            Your university gives you the foundation, but the global job market
            demands a broader skillset in:
            <ul className="list-disc ml-7 mt-2">
              <li>Web/backend engineering</li>
              <li>Data science & ML</li>
              <li>Soft skills and AI-ready teamwork</li>
            </ul>
            <div className="mt-2">
              Adding these to your learning—especially technical skills—will
              make your resume stand out and position you well for both Python
              dev and advanced AI roles.
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Career;
