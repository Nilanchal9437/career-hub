"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";

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

function CareerGuidance() {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const router = useRouter();

  const universityOptions = universities.map((u) => ({
    value: u.id,
    label: u.name,
  }));

  const courseOptions =
    universities
      .find((u) => String(u.id) === selectedUniversity)
      ?.courses.map((c) => ({ value: c.id, label: c.name })) || [];

  const onSearch = () => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 2 * 24 * 60 * 60 * 1000);

    document.cookie = `contentChange=${encodeURIComponent(
      "true"
    )}; expires=${expires.toUTCString()}; path=/`;

    document.cookie = `jobTitle=${encodeURIComponent(
      courseOptions[parseInt(selectedCourse) - 1]?.label
    )}; expires=${expires.toUTCString()}; path=/`;

    router.push("/job");
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen w-full md:pb-10 pt-2 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-3xl mx-auto text-center mt-10 md:mt-16 px-4">
        <h1 className="font-extrabold text-2xl md:text-4xl text-gray-900 mb-3 flex items-center justify-center">
          <GraduationCap className="h-20 w-20" />
          <span>Improve Your Skills & Get Career Guidance</span>
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-8">
          Choose your career path and see the essential skills, jobs, and expert
          guidance to grow fast — no login needed.
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-6 md:p-8 mx-auto mb-8 flex flex-col gap-6">
        {/* University Select */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Select University
          </label>
          <select
            className="w-full border border-gray-200 rounded-md px-4 py-2 text-base  text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-200 mb-1"
            value={selectedUniversity}
            onChange={(e) => {
              setSelectedUniversity(e.target.value);
              setSelectedCourse("");
            }}
          >
            <option value="">Choose your university</option>
            {universityOptions.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
          <div className="text-gray-400 text-sm ml-1">
            Select the university
          </div>
        </div>
        {/* Course Select */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">
            Select Course
          </label>
          <select
            className="w-full border border-gray-200  text-gray-800 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-200 mb-1"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            disabled={!selectedUniversity}
          >
            <option value="">Choose your course</option>
            {courseOptions.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <div className="text-gray-400 text-sm ml-1">Select the course</div>
        </div>
      </div>

      {/* Start Button */}
      <div className="w-full flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md text-base flex items-center gap-2 transition shadow"
          disabled={!selectedUniversity || !selectedCourse}
          onClick={() => {
            onSearch();
          }}
        >
          <GraduationCap />
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default CareerGuidance;
