"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const jobs = [
  // 20+ hardcoded jobs for demo
  ...Array.from({ length: 20 }).map((_, i) => ({
    title: [
      "Senior End User Computing Engineer",
      "Full Stack Developer",
      "DevOps Engineer",
      "UX/UI Designer",
      "Frontend Developer",
      "Backend Developer",
      "QA Engineer",
      "Product Manager",
      "Mobile App Developer",
      "Data Scientist",
      "Cloud Architect",
      "Network Engineer",
      "Security Analyst",
      "AI Engineer",
      "Database Administrator",
      "Business Analyst",
      "Scrum Master",
      "Technical Writer",
      "Support Engineer",
      "System Administrator",
    ][i % 20],
    company: [
      "Spektrum",
      "TechNova Solutions",
      "CloudSphere Inc.",
      "DesignHub",
      "Webify",
      "CodeBase",
      "TestPro",
      "Prodigy",
      "Appify",
      "DataGen",
      "Cloudify",
      "NetSecure",
      "SafeNet",
      "AIMinds",
      "DBMasters",
      "BizLogic",
      "AgileWorks",
      "DocuTech",
      "HelpDesk",
      "SysOps",
    ][i % 20],
    location: [
      "Tamaulipas, Mexico",
      "Remote, United States",
      "Toronto, Canada",
      "Mexico City, Mexico",
      "Berlin, Germany",
      "London, UK",
      "Paris, France",
      "Sydney, Australia",
      "Bangalore, India",
      "San Francisco, USA",
      "Singapore",
      "Amsterdam, Netherlands",
      "Zurich, Switzerland",
      "Tokyo, Japan",
      "Dublin, Ireland",
      "Madrid, Spain",
      "Rome, Italy",
      "Copenhagen, Denmark",
      "Cape Town, South Africa",
      "Stockholm, Sweden",
    ][i % 20],
    date: [
      "July 9, 2025",
      "July 8, 2025",
      "July 7, 2025",
      "July 6, 2025",
      "July 5, 2025",
      "July 4, 2025",
      "July 3, 2025",
      "July 2, 2025",
      "July 1, 2025",
      "June 30, 2025",
      "June 29, 2025",
      "June 28, 2025",
      "June 27, 2025",
      "June 26, 2025",
      "June 25, 2025",
      "June 24, 2025",
      "June 23, 2025",
      "June 22, 2025",
      "June 21, 2025",
      "June 20, 2025",
    ][i % 20],
    tags: [
      [
        { label: "Full Time", color: "bg-green-100 text-green-700" },
        { label: "Senior Level", color: "bg-blue-100 text-blue-700" },
        { label: "IT Support", color: "bg-purple-100 text-purple-700" },
      ],
      [
        { label: "Full Time", color: "bg-green-100 text-green-700" },
        { label: "Mid Level", color: "bg-yellow-100 text-yellow-700" },
        { label: "Software Development", color: "bg-pink-100 text-pink-700" },
      ],
      [
        { label: "Full Time", color: "bg-green-100 text-green-700" },
        { label: "Senior Level", color: "bg-blue-100 text-blue-700" },
        { label: "DevOps", color: "bg-purple-100 text-purple-700" },
      ],
      [
        { label: "Full Time", color: "bg-green-100 text-green-700" },
        { label: "Mid Level", color: "bg-yellow-100 text-yellow-700" },
        { label: "Design", color: "bg-pink-100 text-pink-700" },
      ],
    ][i % 4],
  })),
];

function IconCheck() {
  return (
    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F9F0"/><path d="M8 12l2 2l4-4" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconBriefcase() {
  return (
    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" fill="#E6F9F0"/><rect x="3" y="7" width="18" height="13" rx="2" stroke="#22C55E" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#22C55E" strokeWidth="2"/></svg>
  );
}
function IconLocation() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1 1 16 0c0 4.627-3.582 10-8 10z" stroke="#A3A3A3" strokeWidth="2"/><circle cx="12" cy="11" r="3" stroke="#A3A3A3" strokeWidth="2"/></svg>
  );
}
function IconCalendar() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" stroke="#A3A3A3" strokeWidth="2"/><path d="M16 3v4M8 3v4M3 9h18" stroke="#A3A3A3" strokeWidth="2"/></svg>
  );
}
function IconShare() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
  );
}
function IconExternal() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3h7v7"/><path d="M5 19l14-14"/></svg>
  );
}

const PAGE_SIZE = 10;

export default function JobsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedJobs = jobs.slice(start, end);
  const hasMore = end < jobs.length;

  const handleLoadMore = () => {
    router.push(`?page=${page + 1}`);
  };

  return (
    <div className="bg-[#f4f7fa] min-h-screen w-full pb-10">
      {/* Title Section */}
      <section className="max-w-5xl mx-auto px-4 pt-8 md:pt-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center rounded-full bg-green-100 w-10 h-10">
            <IconCheck />
          </span>
          <h1 className="font-extrabold text-2xl md:text-3xl text-gray-900 flex items-center gap-2">
            Explore Latest IT & Software Jobs
          </h1>
        </div>
        <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base">
          Real job openings for developers and tech professionals — no login required.
        </p>
        {/* Search & Filters */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Search</label>
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 bg-[#f8fafc]"
            />
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Location</label>
            <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-green-200">
              <option>All Locations</option>
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Experience Level</label>
            <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-green-200">
              <option>All Levels</option>
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Job Type</label>
            <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-green-200">
              <option>All Types</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="max-w-5xl mx-auto px-4 flex flex-col gap-6">
        {paginatedJobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2 relative md:flex-row md:items-center md:justify-between"
          >
            {/* Top right icons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="text-gray-400 hover:text-green-600 p-1" title="Share">
                <IconShare />
              </button>
              <button className="text-gray-400 hover:text-green-600 p-1" title="Open in new tab">
                <IconExternal />
              </button>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-lg text-gray-900 mb-1 flex items-center gap-2">
                <span className="inline-flex items-center justify-center rounded bg-green-100 w-7 h-7"><IconBriefcase /></span>
                {job.title}
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-1 sm:gap-2 text-sm text-gray-600 mb-1">
                <span className="flex items-center gap-1">
                  <span className="text-gray-400"><IconBriefcase /></span> {job.company}
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-1">
                  <span className="text-gray-400"><IconLocation /></span> {job.location}
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-1">
                  <span className="text-gray-400"><IconCalendar /></span> Posted on {job.date}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <Link
                href="#"
                className="text-green-600 text-sm font-semibold flex items-center gap-1 hover:underline"
              >
                View More <span className="text-base">▼</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 items-end mt-2 md:mt-0 md:ml-4 w-full md:w-auto">
              <Link
                href="#"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md text-sm flex items-center gap-1 transition w-full md:w-auto justify-center"
                target="_blank"
              >
                Apply Now <span className="text-base">↗️</span>
              </Link>
            </div>
          </div>
        ))}
        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-4">
            <button className="bg-white border border-green-500 text-green-600 font-semibold px-6 py-2 rounded-md shadow-sm hover:bg-green-50 transition" onClick={handleLoadMore}>
              Load More Jobs
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
