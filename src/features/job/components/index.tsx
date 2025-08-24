"use client";

import * as React from "react";
import Link from "next/link";

import CustomPagination from "@/components/Pagination";
import Container from "@/components/Container";
import { getCookie } from "@/libs/Cookie";
import useJobPost from "@/features/job/apis/getJob";
import {
  Calendar,
  MapPin,
  Building,
  Copy,
  ExternalLink,
  Laptop,
} from "lucide-react";
import debounce from "lodash/debounce";

function getRepeatIntervalCode(days: number) {
  const seconds = days * 24 * 60 * 60; // Convert days to seconds
  return `r${seconds}`;
}
interface JobPost {
  title: string;
  company: string;
  location: string;
  workplaceType: string | null;
  postDate: string; // ISO date format e.g. "2025-07-02"
  salary: string | null;
  jobType: string | null;
  jobLink: string;
  companyLink: string;
  description: string;
  experienceLevel: string;
  employmentType: string;
  industry: string;
  publisher: {
    name: string | null;
    email: string | null;
  };
  companyDetails: {
    size: string | null;
    industry: string | null;
    website: string | null;
  };
}

export default function Jobs() {
  const [jobTitle, setJobTitle] = React.useState("Software developer");
  const [location, setLocation] = React.useState("United States");
  const [publication, setPublication] = React.useState(
    getRepeatIntervalCode(30)
  );
  const [workPlace, setWorkPlace] = React.useState("all");
  const [load, setLoad] = React.useState<boolean>(true);
  const [store, setStore] = React.useState<{
    store: JobPost[];
    total: number;
  }>({
    store: [],
    total: 0,
  });
  const [pagination, setPagination] = React.useState<{
    limit: number;
    pageNo: number;
  }>({
    limit: 20,
    pageNo: 1,
  });

  const { getJobPost } = useJobPost();

  const getJobList = async () => {
    setLoad(true);

    const { data, total } = await getJobPost({
      jobTitle: jobTitle,
      location: location,
      publication: publication,
      workPlace: workPlace,
      limit: pagination.limit,
      pageNo: pagination.pageNo,
    });

    if (data.length > 0) {
      setStore({ store: data, total: total });
    } else {
      setStore({ store: [], total: 0 });
    }

    setLoad(false);
  };

  React.useEffect(() => {
    if (getCookie("jobTitle")) {
      setJobTitle(decodeURIComponent(`${getCookie("jobTitle")}`));
    }
    if (getCookie("location")) {
      setLocation(decodeURIComponent(`${getCookie("location")}`));
    }
    if (getCookie("publication")) {
      setPublication(decodeURIComponent(`${getCookie("publication")}`));
    }
    if (getCookie("workPlace")) {
      setWorkPlace(decodeURIComponent(`${getCookie("workPlace")}`));
    }
    getJobList();
  }, []);

  React.useEffect(() => {
    getJobList();
  }, [pagination]);

  const debouncedSearch = debounce(() => {
    const handleSetCookie = () => {
      const key = "contentChange";
      const value = "true";
      const days = 1;
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${key}=${encodeURIComponent(
        value
      )}; expires=${expires.toUTCString()}; path=/`;
    };
    handleSetCookie();
    getJobList();
  }, 3000);

  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Container className="mb-10">
      {/* Title Section */}
      <section className="pt-8 md:pt-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center rounded-full bg-green-100 w-10 h-10">
            <Laptop className="text-green-500" />
          </span>
          <h1 className="font-extrabold text-2xl md:text-3xl text-gray-900 flex items-center gap-2">
            Explore Latest IT & Software Jobs
          </h1>
        </div>
        <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base">
          Real job openings for developers and tech professionals — no login
          required.
        </p>
        {/* Search & Filters */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(event) => {
                setJobTitle(event.target.value);
                debouncedSearch();
              }}
              placeholder="Job title or keyword"
              className="text-gray-900 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 bg-[#f8fafc]"
            />
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
                debouncedSearch();
              }}
              type="text"
              placeholder="Location"
              className="text-gray-900 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 bg-[#f8fafc]"
            />
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Publication Duration
            </label>
            <select
              value={publication}
              onChange={(event) => {
                setPublication(event.target.value);
                debouncedSearch();
              }}
              className=" text-gray-900 w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-green-200"
            >
              <option value={getRepeatIntervalCode(1)}>Last 24 hours</option>
              <option value={getRepeatIntervalCode(7)}>Last Week</option>
              <option value={getRepeatIntervalCode(30)}>Last Month</option>
              {/* <option value={getRepeatIntervalCode(365)}>Last Year</option> */}
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Job Type
            </label>
            <select
              value={workPlace}
              onChange={(event) => {
                setWorkPlace(event.target.value);
                debouncedSearch();
              }}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-900"
            >
              <option value="on_site">On Site</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="all">All Types</option>
            </select>
          </div>
          <div className="flex w-[100px]">
            <button
              onClick={() => getJobList()}
              className="h-10 w-full mt-5 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md text-sm transition"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="flex flex-col gap-6">
        {load
          ? [...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2 relative animate-pulse"
              >
                <div className="h-50 bg-gray-200 dark:bg-gray-200 rounded w-full"></div>
              </div>
            ))
          : store.store.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2 relative"
              >
                {/* Top right icons */}
                <div className="absolute top-4 right-4">
                  <button
                    className="text-gray-400 hover:text-green-600 p-1"
                    title="Share"
                    onClick={() => handleCopy(job.companyLink)}
                  >
                    <Copy />
                  </button>
                </div>
                <div>
                  <h2 className="font-bold text-lg text-gray-900 mb-3">
                    {job.title}
                  </h2>
                  <div className="flex flex-col gap-2 text-sm text-gray-600 my-1">
                    <span className="flex items-center gap-1">
                      <span className="text-gray-400">
                        <Building />
                      </span>
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-gray-400">
                        <MapPin />
                      </span>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-gray-400">
                        <Calendar />
                      </span>
                      Posted on {job.postDate}
                    </span>
                  </div>
                  <div className="flex flex-wrap flex-row gap-3 mt-6">
                    <div className="text-sm bg-blue-100 text-blue-600 p-2 rounded-lg">
                      {job.employmentType}
                    </div>
                    <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-sm">
                      {job.experienceLevel}
                    </div>
                    <div className="bg-green-100 text-green-600 p-2 rounded-lg text-sm">
                      {job.industry}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end mt-2 md:mt-0 md:ml-4 w-full md:w-auto">
                  <Link
                    href={job.companyLink}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md text-sm flex items-center gap-2 transition w-full md:w-auto justify-center"
                    target="_blank"
                  >
                    Apply Now{" "}
                    <span className="text-base">
                      <ExternalLink />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        {/* Pagination */}
        <div className="mt-5 flex justify-end">
          <CustomPagination
            limit={pagination.limit}
            startingAfter={pagination.pageNo}
            total={store.total}
            onChange={(page) => setPagination({ ...pagination, pageNo: page })}
          />
        </div>
      </section>
    </Container>
  );
}
