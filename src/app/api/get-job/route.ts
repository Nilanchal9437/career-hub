import { NextRequest, NextResponse } from "next/server";
import apifyClient from "@/libs/ApifyClient";

export async function GET(req: NextRequest) {
  try {
    const limit: any = req.nextUrl.searchParams.get("limit");
    const pageNo: any = req.nextUrl.searchParams.get("pageNo");
    const startingAfter: number = (parseInt(pageNo) - 1) * parseInt(limit);

    const datasetId: any = req.cookies.get("defaultDatasetId");

    if (!datasetId?.value) {
      const input = {
        title: "Software developer, Data Science, AI, DevOps, Cybersecurity",
        publishedAt: "",
        workplaceType: "all",
        proxy: {
          useApifyProxy: true,
          apifyProxyGroups: ["RESIDENTIAL"],
        },
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
        err: err,
      },
      { status: 500 }
    );
  }
}
