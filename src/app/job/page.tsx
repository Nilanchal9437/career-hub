import { Suspense } from "react";
import Jobs from "@/features/job/components";

function JobsPage() {
  return (
    <Suspense fallback={<></>}>
      <Jobs />
    </Suspense>
  );
}

export default JobsPage;
