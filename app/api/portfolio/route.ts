import { NextResponse } from "next/server";
import { fetchPortfolioAssets } from "@/lib/cloudinary-server";

export const revalidate = 3600;

export async function GET() {
  const assets = await fetchPortfolioAssets();
  return NextResponse.json(assets, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
