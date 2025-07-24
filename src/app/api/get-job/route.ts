import { NextRequest, NextResponse } from "next/server";
import apifyClient from "@/libs/ApifyClient";

export async function GET(req: NextRequest) {
  try {
    const limit: any = req.nextUrl.searchParams.get("limit");
    const pageNo: any = req.nextUrl.searchParams.get("pageNo");
    const jobTitle: any = req.nextUrl.searchParams.get("jobTitle");
    const location: any = req.nextUrl.searchParams.get("location");
    const publication: any = req.nextUrl.searchParams.get("publication");
    const workPlace: any = req.nextUrl.searchParams.get("workPlace");
    const startingAfter: number = (parseInt(pageNo) - 1) * parseInt(limit);

    const datasetId: any = req.cookies.get("defaultDatasetId");
    const contentChange: any = req.cookies.get("contentChange");
    
    if (contentChange?.value === "true" || !datasetId?.value) {
      const input = {
        jobTitle: jobTitle,
        location: location,
        publishDuration: publication,
        workplaceType: workPlace,
        requirePublisherEmail: true,
        includeCompanyDetails: true,
      };

      const actor = await apifyClient
        .actor(`${process.env.NEXT_PUBLIC_ACTOR_ID}`)
        .call(input);

      const { items: res, total } = await apifyClient
        .dataset(actor.defaultDatasetId)
        .listItems({
          limit: parseInt(limit),
          offset: startingAfter,
        });

      if (res && Array.isArray(res) && res.length > 0) {
        const response = NextResponse.json(
          {
            status: true,
            message: "job post fetched successfully",
            data: res,
            total: total,
          },
          { status: 200 }
        );

        response.cookies.set("jobTitle", `${jobTitle}`, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
          priority: "high",
        });

        response.cookies.set("location", `${location}`, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
          priority: "high",
        });

        response.cookies.set("publication", `${publication}`, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
          priority: "high",
        });

        response.cookies.set("workPlace", `${workPlace}`, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
          priority: "high",
        });

        response.cookies.set("defaultDatasetId", `${actor.defaultDatasetId}`, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
          priority: "high",
        });

        response.cookies.set("contentChange", `${false}`, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
          priority: "high",
        });

        return response;
      } else {
        return NextResponse.json(
          {
            status: false,
            message: "something went wrong fetching  job post",
            data: [],
            total: 0,
          },
          { status: 500 }
        );
      }
    } else {
      const { items: res, total } = await apifyClient
        .dataset(datasetId?.value)
        .listItems({
          limit: parseInt(limit),
          offset: startingAfter,
        });

      if (res && Array.isArray(res) && res.length > 0) {
        const response = res;

        return NextResponse.json(
          {
            status: true,
            message: " job post fetched successfully",
            data: response,
            total: total,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            status: false,
            message: "something went wrong fetching  job post",
            data: [],
            total: 0,
          },
          { status: 500 }
        );
      }
    }
  } catch (err: any) {
    console.error("Error in getting Chat :::", err?.message);
    return NextResponse.json(
      {
        status: false,
        message: "something went wrong getting job post",
        data: [],
        total: 0,
      },
      { status: 500 }
    );
  }
}
