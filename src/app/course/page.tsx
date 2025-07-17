"use client";

import { useState } from "react";

const universities = [
  {
    id: 1,
    name: "Faculté des Sciences",
    city: "Unknown",
    avatar: "F",
    color: "bg-blue-100 text-blue-600",
    courses: [
      {
        id: 1,
        name: "Informatique / Data Science",
        faculty: "Faculté des Sciences",
        type: ["Master"],
        description: "IA, Vision, Sécurité, Cloud, Big Data",
        skills: [
          "Modèles IA",
          "visualisation",
          "data science",
          "backend API"
        ],
        technologies: [
          "Python",
          "Keras",
          "OpenCV",
          "Spark",
          "Hadoop",
          "Flask"
        ]
      },
      {
        id: 2,
        name: "Informatique",
        faculty: "Faculté des Sciences",
        type: ["Licence"],
        description: "Algorithmique, Programmation, BD, Réseaux, Compilation",
        skills: [
          "Bases théoriques",
          "programmation",
          "conception logicielle"
        ],
        technologies: [
          "C",
          "Java",
          "Python",
          "SQL",
          "Linux"
        ]
      }
    ],
  },
  {
    id: 2,
    name: "ENSA",
    city: "Unknown",
    avatar: "E",
    color: "bg-green-100 text-green-600",
    courses: [
      {
        id: 1,
        name: "Génie Informatique",
        faculty: "ENSA",
        type: ["Licence/Ingénieur"],
        description: "POO, Bases de données, Réseaux, Web, Mobile, UML, Cloud, Sécurité",
        skills: [
          "Développement complet",
          "sécurité",
          "gestion projet",
          "dev web/mobile"
        ],
        technologies: [
          "Java",
          "Python",
          "MySQL",
          "PHP",
          "HTML/CSS",
          "Android Studio",
          "Git",
          "UML tools"
        ]
      },
      {
        id: 2,
        name: "Big Data / Cybersécurité",
        faculty: "ENSA",
        type: ["Master intégré"],
        description: "Big Data, IA, Machine Learning, Sécurité des SI, DevOps",
        skills: [
          "Analyse de données",
          "ML",
          "sécurité réseau",
          "CI/CD"
        ],
        technologies: [
          "Hadoop",
          "Spark",
          "Python",
          "Scikit-learn",
          "Docker",
          "Jenkins",
          "Wireshark"
        ]
      },
      {
        id: 3,
        name: "Tronc commun",
        faculty: "ENSA",
        type: ["Cycle préparatoire"],
        description: "Algorithmique, Programmation C, Structures de données, Systèmes d'exploitation, Maths, Physique, Électronique, Communication",
        skills: [
          "Logique",
          "programmation procédurale",
          "modélisation",
          "simulation",
          "communication"
        ],
        technologies: [
          "C",
          "MATLAB",
          "Maple",
          "LabVIEW",
          "Linux",
          "Word",
          "PowerPoint"
        ]
      }
    ],
  },
  {
    id: 3,
    name: "UIR",
    city: "Unknown",
    avatar: "U",
    color: "bg-red-100 text-red-600",
    courses: [
      {
        id: 1,
        name: "Big Data / SSI / IA",
        faculty: "UIR",
        type: ["Master"],
        description: "Machine Learning, Cryptographie, Dev Web, Data Lakes",
        skills: [
          "Big data",
          "IA appliquée",
          "sécurité",
          "visualisation"
        ],
        technologies: [
          "Hadoop",
          "Spark",
          "Python",
          "Tableau",
          "Docker",
          "RSA/SSL"
        ]
      },
      {
        id: 2,
        name: "Ingénierie informatique",
        faculty: "UIR",
        type: ["Licence"],
        description: "POO, BD, Web, Algo, Architecture des SI",
        skills: [
          "Développement logiciel",
          "base de données",
          "architecture logicielle"
        ],
        technologies: [
          "Java",
          "Python",
          "HTML",
          "CSS",
          "SQL"
        ]
      }
    ],
  },
  {
    id: 4,
    name: "ENSET",
    city: "Unknown",
    avatar: "E",
    color: "bg-orange-100 text-orange-600",
    courses: [
      {
        id: 1,
        name: "Systèmes Informatiques Distribués",
        faculty: "ENSET",
        type: ["Master"],
        description: "Cloud, Sécurité, IA, DevOps, Testing",
        skills: [
          "Administration système",
          "dev distribué",
          "testing",
          "cloud"
        ],
        technologies: [
          "AWS",
          "Jenkins",
          "Selenium",
          "Python",
          "Docker"
        ]
      },
      {
        id: 2,
        name: "Métiers du développement logiciel",
        faculty: "ENSET",
        type: ["Licence Pro"],
        description: "Développement Web, POO, Gestion projets, Réseaux",
        skills: [
          "Développement fullstack",
          "gestion projet",
          "collaboration"
        ],
        technologies: [
          "PHP",
          "Laravel",
          "JavaScript",
          "MySQL",
          "Git"
        ]
      }
    ],
  },
  {
    id: 5,
    name: "ENSIAS",
    city: "Unknown",
    avatar: "S",
    color: "bg-purple-100 text-purple-600",
    courses: [
      {
        id: 1,
        name: "IA, Data, SSI, Génie logiciel",
        faculty: "ENSIAS",
        type: ["Ingénieur/Master"],
        description: "Deep learning, NLP, Cloud computing, Sécurité, IoT",
        skills: [
          "IA",
          "cybersécurité",
          "traitement données",
          "déploiement cloud"
        ],
        technologies: [
          "TensorFlow",
          "Keras",
          "Spark",
          "AWS",
          "GCP",
          "Docker",
          "Cisco tools"
        ]
      },
      {
        id: 2,
        name: "Tronc commun",
        faculty: "ENSIAS",
        type: ["1re année ingénieur"],
        description: "Mathématiques, Algorithmique, Informatique fondamentale, Communication",
        skills: [
          "Analyse",
          "algo",
          "programmation",
          "expression orale/écrite"
        ],
        technologies: [
          "C",
          "Python",
          "Word",
          "Excel"
        ]
      }
    ],
  },
  {
    id: 6,
    name: "ENSAM",
    city: "Unknown",
    avatar: "A",
    color: "bg-yellow-100 text-yellow-600",
    courses: [
      {
        id: 1,
        name: "Systèmes embarqués / Télécom",
        faculty: "ENSAM",
        type: ["Ingénieur"],
        description: "Microcontrôleurs, Réseaux, Electrotechnique, Signal",
        skills: [
          "Électronique",
          "communication",
          "systèmes temps réel"
        ],
        technologies: [
          "Arduino",
          "Proteus",
          "Python",
          "MATLAB"
        ]
      },
      {
        id: 2,
        name: "Tronc commun",
        faculty: "ENSAM",
        type: ["Prépa intégrée"],
        description: "Mathématiques, Physique, Informatique de base",
        skills: [
          "Calcul scientifique",
          "algo de base",
          "raisonnement logique"
        ],
        technologies: [
          "C",
          "Excel",
          "MATLAB"
        ]
      }
    ],
  }
];


function IconUniversity() {
  return (
    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#FFFBEA"/><path d="M4 10l8-5 8 5" stroke="#FACC15" strokeWidth="2"/><path d="M4 10v6a2 2 0 002 2h12a2 2 0 002-2v-6" stroke="#FACC15" strokeWidth="2"/><path d="M9 21V9h6v12" stroke="#FACC15" strokeWidth="2"/></svg>
  );
}
function IconInfo() {
  return (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#A3A3A3" strokeWidth="2"/><path d="M12 16v-4M12 8h.01" stroke="#A3A3A3" strokeWidth="2"/></svg>
  );
}
function IconArrowRight() {
  return (
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconCheck() {
  return (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#DCFCE7"/><path d="M8 12l2 2l4-4" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

function Course() {
  const [tab, setTab] = useState("universities");
  const [search, setSearch] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState(universities[0]);
  const [selectedCourse, setSelectedCourse] = useState(universities[0].courses[0]);

  const filteredUniversities = universities.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen w-full pb-8">
      {/* Hero Banner */}
      <div className="w-full bg-green-500 py-10 md:py-14 px-4 text-center rounded-b-2xl mb-0">
        <h1 className="text-white font-extrabold text-2xl md:text-4xl mb-2">Explore Moroccan Universities & Courses</h1>
        <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto">Discover top universities in Morocco and explore their courses, career paths, and skills you can develop.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 md:px-6 mt-12">
        <div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col gap-4">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-100 mb-2">
            <button
              className={`flex items-center gap-2 px-3 py-2 font-semibold text-sm border-b-2 transition ${tab === "universities" ? "border-yellow-400 text-yellow-500 bg-yellow-50" : "border-transparent text-gray-500 hover:text-yellow-500"}`}
              onClick={() => setTab("universities")}
            >
              <IconUniversity /> Universities
            </button>
            <button
              className={`flex items-center gap-2 px-3 py-2 font-semibold text-sm border-b-2 transition ${tab === "about" ? "border-gray-300 text-gray-700 bg-gray-50" : "border-transparent text-gray-500 hover:text-gray-700"}`}
              onClick={() => setTab("about")}
            >
              <IconInfo /> About
            </button>
          </div>

          {tab === "universities" && (
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
              {/* University List */}
              <div className="bg-[#f9fafb] rounded-xl p-4 flex flex-col gap-2 border border-gray-100">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-semibold text-gray-800 text-base">Select a University</div>
                </div>
                {filteredUniversities.map((u) => (
                  <button
                    key={u.id}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg border transition text-left w-full relative 
                      ${selectedUniversity.id === u.id 
                        ? "bg-white border-green-400 shadow-sm border-l-4 border-l-green-500" 
                        : "bg-transparent border-transparent hover:border-green-200"}
                    `}
                    onClick={() => {
                      setSelectedUniversity(u);
                      setSelectedCourse(u.courses[0] || null);
                    }}
                  >
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full font-bold text-lg ${u.color}`}>{u.avatar}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm">{u.name}</div>
                      <div className="text-xs text-gray-400">{u.city}</div>
                    </div>
                    {selectedUniversity.id === u.id && <IconArrowRight />}
                  </button>
                ))}
              </div>

              {/* Course List */}
              <div className="bg-[#f9fafb] rounded-xl p-4 flex flex-col gap-2 border border-gray-100">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-semibold text-gray-800 text-base">Available Courses</div>
                  <div className="text-xs text-gray-400 font-medium truncate max-w-[120px] md:max-w-[160px] text-right">{selectedUniversity.name}</div>
                </div>
                {selectedUniversity.courses && selectedUniversity.courses.length > 0 ? (
                  selectedUniversity.courses.map((c) => (
                    <button
                      key={c.id}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg border transition text-left w-full relative 
                        ${selectedCourse && selectedCourse.id === c.id 
                          ? "bg-white border-green-400 shadow-sm border-l-4 border-l-green-500" 
                          : "bg-transparent border-transparent hover:border-green-200"}
                      `}
                      onClick={() => setSelectedCourse(c)}
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm">{c.name}</div>
                        <div className="text-xs text-green-600">{c.faculty}</div>
                      </div>
                      {selectedCourse && selectedCourse.id === c.id && <IconArrowRight />}
                    </button>
                  ))
                ) : (
                  <div className="text-gray-400 text-sm px-4 py-6">No courses available.</div>
                )}
              </div>

              {/* Course Details */}
              <div className="bg-[#f9fafb] rounded-xl p-4 flex flex-col gap-2 border border-gray-100 relative">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-semibold text-gray-800 text-base truncate max-w-[180px] md:max-w-full">
                    {selectedUniversity.name}
                    {selectedCourse ? ` • ${selectedCourse.faculty}` : ""}
                  </div>
                  {/* Search always visible on top right for desktop, on top for mobile */}
                  <input
                    type="text"
                    placeholder="Search universities..."
                    className="hidden md:block border border-gray-200 rounded-md px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-200 w-48"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                {selectedCourse ? (
                  <div className="bg-white rounded-xl p-4 flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bold text-lg text-gray-900">{selectedCourse.name}</span>
                      {selectedCourse.type.map((t, i) => (
                        <span key={i} className={`text-xs font-semibold rounded px-2 py-0.5 ${i === 0 ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <IconCheck />
                      <span className="font-semibold text-green-700 text-sm">Course Description</span>
                    </div>
                    <div className="text-gray-600 text-sm mb-2 leading-relaxed">{selectedCourse.description}</div>
                    <div className="font-semibold text-gray-700 text-sm mb-1">Skills You Will Learn</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.skills.map((s, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 rounded px-2 py-0.5 text-xs font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 text-sm px-4 py-6">Select a course to see details.</div>
                )}
                {/* Mobile search input */}
                <input
                  type="text"
                  placeholder="Search universities..."
                  className="block md:hidden border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-200 w-full mt-4"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          )}

          {tab === "about" && (
            <div className="p-4 text-gray-600 text-sm">
              Moroccan Universities Explorer helps students discover universities and courses across Morocco, providing valuable information about career paths and skills.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return <Course />;
}
