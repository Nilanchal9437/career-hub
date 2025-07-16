"use client";
import { useState } from "react";

const universities = [
  {
    id: 1,
    name: "Mohammed V University",
    city: "Rabat",
    avatar: "M",
    color: "bg-violet-100 text-violet-600",
    courses: [
      {
        id: 1,
        name: "Computer Science",
        faculty: "Faculty of Sciences",
        type: ["4-Year Program", "Bachelor's Degree"],
        description:
          "The Computer Science program at Mohammed V University provides students with a comprehensive foundation in computing principles, programming languages, algorithms, and software development. The curriculum combines theoretical knowledge with practical applications to prepare students for careers in the technology sector.",
        skills: [
          "Programming",
          "Algorithms",
          "Data Structures",
          "Database Design",
          "Web Development",
          "Software Engineering",
          "Operating Systems",
          "Networking",
        ],
      },
      {
        id: 2,
        name: "Business Administration",
        faculty: "Faculty of Economics",
        type: [],
        description: "Business Administration program details...",
        skills: ["Management", "Finance", "Marketing"],
      },
      {
        id: 3,
        name: "Civil Engineering",
        faculty: "School of Engineering",
        type: [],
        description: "Civil Engineering program details...",
        skills: ["Structures", "Materials", "Project Management"],
      },
      {
        id: 4,
        name: "Medicine",
        faculty: "Faculty of Medicine",
        type: [],
        description: "Medicine program details...",
        skills: ["Anatomy", "Physiology", "Clinical Skills"],
      },
      {
        id: 5,
        name: "Law",
        faculty: "Faculty of Law",
        type: [],
        description: "Law program details...",
        skills: ["Legal Research", "Contracts", "Advocacy"],
      },
    ],
  },
  {
    id: 2,
    name: "Cadi Ayyad University",
    city: "Marrakech",
    avatar: "C",
    color: "bg-purple-100 text-purple-600",
    courses: [],
  },
  {
    id: 3,
    name: "Hassan II University",
    city: "Casablanca",
    avatar: "H",
    color: "bg-indigo-100 text-indigo-600",
    courses: [],
  },
  {
    id: 4,
    name: "Al Akhawayn University",
    city: "Ifrane",
    avatar: "A",
    color: "bg-blue-100 text-blue-600",
    courses: [],
  },
  {
    id: 5,
    name: "Ibn Tofail University",
    city: "Kenitra",
    avatar: "I",
    color: "bg-cyan-100 text-cyan-600",
    courses: [],
  },
  {
    id: 6,
    name: "Abdelmalek Essaâdi University",
    city: "Tetouan",
    avatar: "AE",
    color: "bg-gray-100 text-gray-600",
    courses: [],
  },
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
    <div className="bg-[#f8fafc] min-h-screen w-full py-0 md:py-6">
      {/* Hero Banner */}
      <div className="w-full bg-green-500 py-10 md:py-14 px-4 text-center rounded-b-2xl mb-0">
        <h1 className="text-white font-extrabold text-2xl md:text-4xl mb-2">Explore Moroccan Universities & Courses</h1>
        <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto">Discover top universities in Morocco and explore their courses, career paths, and skills you can develop.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 md:px-6 -mt-12">
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
