import { NextRequest, NextResponse } from "next/server";
import apifyClient from "@/libs/ApifyClient";

export async function GET(req: NextRequest) {
  try {
    const limit: any = req.nextUrl.searchParams.get("limit");
    const pageNo: any = req.nextUrl.searchParams.get("pageNo");
    const startingAfter: number = (parseInt(pageNo) - 1) * parseInt(limit);

    const datasetId: any = req.cookies.get("defaultDatasetId");
    const lastFetchTime: any = req.cookies.get("lastFetchTime");
    const now = Date.now();
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

    if (
      !lastFetchTime ||
      now - Number(lastFetchTime) > TWENTY_FOUR_HOURS ||
      !datasetId?.value
    ) {
      const input = {
        jobTitle: "Software Developer",
        location: "All location",
        publishDuration: "r2592000",
        workplaceType: "all",
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

        response.cookies.set("defaultDatasetId", `${actor.defaultDatasetId}`, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 24 * 60 * 60,
          priority: "high",
        });

        response.cookies.set("lastFetchTime", `${now.toString()}`, {
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
    console.error("Error in getting job post :::", err?.message);
    return NextResponse.json(
      {
        status: false,
        message: "something went wrong getting job post",
        data: [],
        total: 0,
        err: err
      },
      { status: 500 }
    );
  }
}
