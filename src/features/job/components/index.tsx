"use client";

import * as React from "react";
import CustomPagination from "@/components/Pagination";
import Container from "@/components/Container";
import useJobPost from "@/features/job/apis/getJob";
import {
  Calendar,
  MapPin,
  Building,
  Copy,
  UserRound,
  HandCoins,
} from "lucide-react";

interface JobPost {
  title: string;
  companyName: string;
  location: string;
  workplaceType: string | null;
  publishedAt: string; // ISO date format e.g. "2025-07-02"
  salary: string | null;
  jobType: string | null;
  jobLink: string;
  companyUrl: string;
  applicationsCount: string;
  experienceLevel: string;
  contractType: string;
  sector: string;
  publisher: {
    name: string | null;
    email: string | null;
  };
  companyDetails: {
    size: string | null;
    industry: string | null;
    website: string | null;
  };
  description: string;
  postedTime: string;
}

export default function Jobs() {
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
    getJobList();
  }, [pagination]);

  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Container className="my-10">
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
                <div className="absolute top-4 right-4 flex flex-row gap-x-2 items-center">
                  <h2 className="font-bold text-sm text-gray-400">
                    {job.postedTime}
                  </h2>
                  <button
                    className="text-gray-400 hover:text-green-600 p-1"
                    title="Share"
                    onClick={() => handleCopy(job.companyUrl)}
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
                      {job.companyName}
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
                      Posted on {job.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-gray-400">
                        <UserRound />
                      </span>
                      Applications Count {job.applicationsCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-gray-400">
                        <HandCoins />
                      </span>
                      Salary {job.salary}
                    </span>
                  </div>
                  <div className="flex flex-wrap flex-row gap-3 mt-6">
                    <div className="text-sm bg-blue-100 text-blue-600 p-2 rounded-lg">
                      {job.contractType}
                    </div>
                    <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-sm">
                      {job.experienceLevel}
                    </div>
                    <div className="bg-green-100 text-green-600 p-2 rounded-lg text-sm">
                      {job.sector}
                    </div>
                  </div>
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
