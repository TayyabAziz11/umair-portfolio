// ─── CLIENT-SAFE ─────────────────────────────────────────────────────────────
// This file contains only URL helpers and types — safe to import in client components.
// Server-side fetch functions live in lib/cloudinary-server.ts

export const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CloudinaryAsset {
  public_id: string;
  resource_type: "image" | "video";
  format: string;
  width: number;
  height: number;
  secure_url: string;
  asset_folder: string;
  display_name?: string;
  filename?: string;
  context?: { custom?: { caption?: string; alt?: string; category?: string } };
  tags?: string[];
  created_at: string;
}

// ─── URL helpers ─────────────────────────────────────────────────────────────

export function cloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string | number;
    format?: string;
    crop?: string;
  } = {}
): string {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
  } = options;
  const transforms: string[] = [`f_${format}`, `q_${quality}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height) transforms.push(`c_${crop}`);
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms.join(",")}/${publicId}`;
}

export function cloudinaryVideoUrl(
  publicId: string,
  options: { width?: number; quality?: string | number } = {}
): string {
  const { width, quality = "auto" } = options;
  const transforms: string[] = [`f_auto`, `q_${quality}`];
  if (width) transforms.push(`w_${width}`);
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${transforms.join(",")}/${publicId}`;
}

export function cloudinaryVideoThumbnail(
  publicId: string,
  options: { width?: number } = {}
): string {
  const transforms: string[] = [`f_jpg`, `q_auto`, `so_0`];
  if (options.width) transforms.push(`w_${options.width}`);
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/${transforms.join(",")}/${publicId}.jpg`;
}
