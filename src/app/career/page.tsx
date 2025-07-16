"use client";
import { ReactNode } from "react";

function IconCircle({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${color}`}>{children}</span>
  );
}
function IconCheck({ className = "text-green-500" }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#DCFCE7"/><path d="M8 12l2 2l4-4" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconBook() {
  return (
    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F9F0"/><path d="M6 7h12M6 17h12M6 12h8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/></svg>
  );
}
function IconGrad() {
  return (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#DBEAFE"/><path d="M12 4l8 4-8 4-8-4 8-4zm0 8v8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconHat() {
  return (
    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#F3E8FF"/><path d="M12 4l8 4-8 4-8-4 8-4zm0 8v8" stroke="#A21CAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconInfo({ className = "text-blue-400" }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#DBEAFE"/><path d="M12 16v-4M12 8h.01" stroke="#3B82F6" strokeWidth="2"/></svg>
  );
}
function IconMarket({ className = "text-green-500" }) {
  return (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F9F0"/><path d="M4 16l4-4 4 4 4-8 4 8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/></svg>
  );
}
function IconX({ className = "text-red-400" }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FEE2E2"/><path d="M15 9l-6 6M9 9l6 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/></svg>
  );
}

const foundationSkills = [
  {
    icon: <IconCheck />, color: "bg-green-100", title: "Python deeply + problem solving", desc: "Master basics, coding challenges and logic-driven thinking"
  },
  {
    icon: <IconCheck />, color: "bg-green-100", title: "Learn Git & GitHub", desc: "Version control, collaboration, open source workflow"
  },
  {
    icon: <IconCheck />, color: "bg-green-100", title: "Logic Building & OOP", desc: "Object-oriented concepts, algorithms, real problems"
  },
  {
    icon: <IconCheck />, color: "bg-green-100", title: "Basic HTML, CSS, and JavaScript", desc: "Web fundamentals, build your first site"
  },
  {
    icon: <IconCheck />, color: "bg-green-100", title: "Intro to Data Structures", desc: "Arrays, lists, stacks, queues, trees, practical application"
  },
];
const bachelorSkills = [
  {
    icon: <IconCheck />, color: "bg-blue-100", title: "OOP 2 + solid projects", desc: "Build real-world apps, advanced OOP, functional programming"
  },
  {
    icon: <IconCheck />, color: "bg-blue-100", title: "Learn Django or FastAPI", desc: "Web backend, REST APIs, production-ready web applications"
  },
  {
    icon: <IconCheck />, color: "bg-blue-100", title: "SQL + NoSQL (MongoDB)", desc: "Databases, queries, data modeling"
  },
  {
    icon: <IconCheck />, color: "bg-blue-100", title: "API building + Integration", desc: "Connect frontend & backend, real-world APIs"
  },
  {
    icon: <IconCheck />, color: "bg-blue-100", title: "Data analysis foundations", desc: "Pandas, NumPy, data wrangling, visualization"
  },
  {
    icon: <IconCheck />, color: "bg-blue-100", title: "Version control & teamwork", desc: "Advanced Git, team workflow, open source"
  },
  {
    icon: <IconCheck />, color: "bg-blue-100", title: "Deploy projects", desc: "GitHub, LinkedIn, portfolio step to showcase expertise"
  },
];
const masterSkills = [
  {
    icon: <IconCheck />, color: "bg-purple-100", title: "ML frameworks mastery", desc: "scikit-learn, TensorFlow, PyTorch, real model building"
  },
  {
    icon: <IconCheck />, color: "bg-purple-100", title: "Work on real datasets", desc: "Kaggle, UCI, others, real data for exploratory projects"
  },
  {
    icon: <IconCheck />, color: "bg-purple-100", title: "Research projects", desc: "Original research, publish, present at conferences"
  },
  {
    icon: <IconCheck />, color: "bg-purple-100", title: "Contribute to AI tools", desc: "Open source, build tools for ML applications"
  },
  {
    icon: <IconCheck />, color: "bg-purple-100", title: "Publish your work", desc: "GitHub, LinkedIn, portfolio step to showcase expertise"
  },
];

function SkillGrid({ skills }: { skills: typeof foundationSkills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((s, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm p-4 flex gap-3 items-start border border-gray-100">
          <IconCircle color={s.color}>{s.icon}</IconCircle>
          <div>
            <div className="font-semibold text-gray-900 mb-1">{s.title}</div>
            <div className="text-xs text-gray-500 leading-snug">{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Career() {
  return (
    <div className="bg-[#f8fafc] min-h-screen w-full py-0 md:py-8">
      {/* Foundation Year */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <IconCircle color="bg-green-100"><IconBook /></IconCircle>
          <h2 className="font-bold text-2xl text-gray-900">Tronc Commun (Foundation Year)</h2>
        </div>
        <p className="text-gray-500 mb-6 ml-1">Build your coding mindset with strong foundation.</p>
        <SkillGrid skills={foundationSkills} />
      </section>

      {/* Bachelor's Level */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-14">
        <div className="flex items-center gap-3 mb-6">
          <IconCircle color="bg-blue-100"><IconGrad /></IconCircle>
          <h2 className="font-bold text-2xl text-gray-900">Licence (Bachelor's Level)</h2>
        </div>
        <p className="text-gray-500 mb-6 ml-1">Become job ready in Python + launch data fields.</p>
        <SkillGrid skills={bachelorSkills} />
      </section>

      {/* Master's Level */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-14">
        <div className="flex items-center gap-3 mb-6">
          <IconCircle color="bg-purple-100"><IconHat /></IconCircle>
          <h2 className="font-bold text-2xl text-gray-900">Masters Level</h2>
        </div>
        <p className="text-gray-500 mb-6 ml-1">Specialize in high-impact skills. Future proof skills.</p>
        <SkillGrid skills={masterSkills} />
      </section>

      {/* College vs Market */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-blue-100">
          <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-blue-200"><IconInfo className="text-blue-500" /></IconCircle><span className="font-semibold text-blue-900 text-lg">What Your College Teaches</span></div>
          <ul className="text-base text-blue-900 list-disc ml-7 mb-2">
            <li>Core Python programming</li>
            <li>Key topics: syntax, functions, OOP</li>
            <li>Probably more solo or specific academic projects</li>
            <li><span className="font-semibold text-green-700">Good foundation</span> but not enough for today's job market</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-green-100">
          <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-green-200"><IconMarket className="text-green-600" /></IconCircle><span className="font-semibold text-green-900 text-lg">What's Demanded in the Market</span></div>
          <ul className="text-base text-green-900 list-disc ml-7 mb-2">
            <li className="flex items-center gap-2"><IconCheck className="text-green-500" />Backend frameworks (Django, FastAPI)</li>
            <li className="flex items-center gap-2"><IconCheck className="text-green-500" />Databases (relational, SQL, ORM, GCP)</li>
            <li className="flex items-center gap-2"><IconCheck className="text-green-500" />Version control & CI/CD</li>
            <li className="flex items-center gap-2"><IconCheck className="text-green-500" />Data & ML skills</li>
            <li><span className="font-semibold text-green-700">Industry-ready skills</span> that make your resume stand out</li>
          </ul>
        </div>
      </section>

      {/* Global Job Market */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16">
        <h3 className="font-bold text-2xl text-gray-900 mb-8">What's Demanded in the Global Job Market</h3>
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-green-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-green-100"><span className="font-bold text-green-700 text-lg">1</span></IconCircle><span className="font-semibold text-green-700 text-lg">Entry-level Python Developer Skills</span></div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Backend framework: Django or FastAPI</li>
              <li>Version control & container basics</li>
              <li>SQL/NoSQL databases</li>
              <li>Optional: frontend basics (ReactJS/NextJS)</li>
              <li>ORM/SQL standards (PostgreSQL, MySQL)</li>
              <li>DevOps basics: Docker, CI/CD, cloud</li>
              <li>Soft skills: collaboration, teamwork</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-purple-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-purple-100"><span className="font-bold text-purple-700 text-lg">2</span></IconCircle><span className="font-semibold text-purple-700 text-lg">AI & Data Skills</span></div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>The AI/ML boom in 2024</li>
              <li>Python + libraries (scikit-learn, TensorFlow, PyTorch)</li>
              <li>ML Engineer, DataOps, DevSecOps</li>
              <li>AI/ML jobs are outpacing general software jobs in growth</li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-blue-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-blue-100"><span className="font-bold text-blue-700 text-lg">3</span></IconCircle><span className="font-semibold text-blue-700 text-lg">Market Growth & Gaps</span></div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Global AI/ML market projected to reach $1.71 trillion by 2035 – 25% CAGR</li>
              <li>AI job gap – 6x+ faster than non-AI jobs in places like India</li>
              <li>Thought of added value: e.g. Git, github, specialist sites (e.g. NLPI, predictive modeling) – huge recovery rates (e.g. 15%)</li>
            </ul>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-red-500 p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-red-100"><span className="font-bold text-red-700 text-lg">4</span></IconCircle><span className="font-semibold text-red-700 text-lg">University vs. Industry: Skill Gaps</span></div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Academic courses: offer thick basics</li>
              <li>Data Science & Statistics</li>
              <li className="flex items-center gap-2"><IconX className="text-red-400" />Skills needed: ML frameworks</li>
              <li className="flex items-center gap-2"><IconX className="text-red-400" />Hands-on cloud and DevOps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Comparison Table */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16">
        <h3 className="font-bold text-2xl text-gray-900 mb-6">University vs. Industry: Skills Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-sm text-base border border-gray-100">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold">Areas</th>
                <th className="px-4 py-3 text-left font-semibold">University Focus</th>
                <th className="px-4 py-3 text-left font-semibold">Industry Demand</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Python basics", "Syntax, functions, OOP", <span className="text-green-700 font-semibold">Core + frameworks & clean code practices</span>],
                ["Backend development", "Limited", "Django, FastAPI, REST APIs"],
                ["Containerization", "N/A", "Docker, CI/CD, DevOps, cloud"],
                ["AI/ML skills", "Basic stats, ML foundations", "scikit-learn, TensorFlow, PyTorch"],
                ["Soft skills", "Not emphasized", "Collaboration, teamwork, critical thinking"],
                ["Statistics", "Academic, theoretical", "Visualization, reporting, storytelling"],
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
      </section>

      {/* What You Should Learn Next */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16">
        <h3 className="font-bold text-2xl text-gray-900 mb-6">What You Should Learn Next</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-green-100"><IconCheck /></IconCircle><span className="font-semibold text-green-700 text-lg">Technical Stack Roadmap</span></div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Backend: Learn Django or FastAPI + ORM/REST API</li>
              <li>SQL/NoSQL (PostgreSQL, MySQL, MongoDB)</li>
              <li>Docker, container, AWS fundamentals</li>
              <li>All APIs: Flask, FastAPI, NumPy, Scikit Learn</li>
              <li>Greenfield: Ex: Explore skills like LLMs, API for natural automation</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-green-100"><IconCheck /></IconCircle><span className="font-semibold text-green-700 text-lg">Soft/Support Skills</span></div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Git workflows & teamwork</li>
              <li>CI/CD basics (GitHub Actions, Jenkins)</li>
              <li>Written communication & clarity</li>
              <li>Problem-solving methodology</li>
              <li>Collaborative development</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-purple-100"><IconHat /></IconCircle><span className="font-semibold text-purple-700 text-lg">Project Ideas</span></div>
            <ul className="text-base text-gray-700 list-disc ml-7">
              <li>Blog site or e-commerce backend</li>
              <li>Data viz, ML model: classification or regression</li>
              <li>Generator API: text, image, chatbot or video</li>
              <li>Any integration project with authentication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Take */}
      <section className="max-w-5xl mx-auto px-2 md:px-6 mt-16 mb-10">
        <div className="bg-blue-50 rounded-xl p-6 flex flex-col gap-2 shadow-sm border border-blue-100">
          <div className="flex items-center gap-2 mb-2"><IconCircle color="bg-blue-200"><IconInfo className="text-blue-500" /></IconCircle><span className="font-semibold text-blue-900 text-lg">Final Take</span></div>
          <div className="text-gray-700 text-base">
            Your university gives you the foundation, but the global job market demands a broader skillset in:
            <ul className="list-disc ml-7 mt-2">
              <li>Web/backend engineering</li>
              <li>Data science & ML</li>
              <li>Soft skills and AI-ready teamwork</li>
            </ul>
            <div className="mt-2">Adding these to your learning—especially technical skills—will make your resume stand out and position you well for both Python dev and advanced AI roles.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Page() {
  return <Career />;
}
