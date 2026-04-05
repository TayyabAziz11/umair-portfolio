// ─── SERVER-ONLY ─────────────────────────────────────────────────────────────
// Uses Node.js Cloudinary SDK. Never import this in client components.

import { v2 as cloudinary } from "cloudinary";
import type { CloudinaryAsset } from "./cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const BRAND_FOLDERS = [
  "Espresso",
  "Klay",
  "level 2",
  "Manas",
  "PITS",
  "Sulafah",
  "Chatterbox",
  "Delphi",
  "Shahid Afridi Store",
  "Salman Farms Milk",
  "AFM",
  "Ai Content",
];

// ─── Fetch all portfolio assets from all brand folders ────────────────────────

export async function fetchPortfolioAssets(): Promise<CloudinaryAsset[]> {
  try {
    const folderExpression = BRAND_FOLDERS.map(
      (f) => `asset_folder="${f}"`
    ).join(" OR ");

    let allAssets: CloudinaryAsset[] = [];
    let nextCursor: string | undefined;

    do {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const search: any = cloudinary.search
        .expression(folderExpression)
        .with_field("context")
        .with_field("tags")
        .sort_by("created_at", "desc")
        .max_results(500);

      if (nextCursor) search.next_cursor(nextCursor);

      const result = await search.execute();
      allAssets.push(...result.resources);
      nextCursor = result.next_cursor;
    } while (nextCursor);

    return allAssets;
  } catch (err) {
    console.error("[Cloudinary] fetchPortfolioAssets failed:", err);
    return [];
  }
}

// ─── Fetch assets from a single folder ───────────────────────────────────────

export async function fetchFolderAssets(
  folder: string
): Promise<CloudinaryAsset[]> {
  try {
    const result = await cloudinary.search
      .expression(`asset_folder="${folder}"`)
      .with_field("context")
      .with_field("tags")
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();

    return result.resources;
  } catch (err) {
    console.error(`[Cloudinary] fetchFolderAssets("${folder}") failed:`, err);
    return [];
  }
}
