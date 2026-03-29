"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioItems, PortfolioItem } from "@/lib/data";
import {
  cloudinaryUrl,
  cloudinaryVideoUrl,
  cloudinaryVideoThumbnail,
  CloudinaryAsset,
  CLOUDINARY_CLOUD_NAME,
} from "@/lib/cloudinary";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function aspectClass(width: number, height: number): string {
  const r = width / height;
  if (r > 1.4) return "aspect-video";
  if (r < 0.8) return "aspect-[9/16]";
  return "aspect-square";
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick 1 image + 1 video per brand folder */
function pickOnePerBrand(assets: CloudinaryAsset[]): CloudinaryAsset[] {
  const seen: Record<string, { image: boolean; video: boolean }> = {};
  const result: CloudinaryAsset[] = [];

  for (const asset of assets) {
    const f = asset.asset_folder;
    if (!seen[f]) seen[f] = { image: false, video: false };
    const type = asset.resource_type;

    if (type === "image" && !seen[f].image) {
      seen[f].image = true;
      result.push(asset);
    } else if (type === "video" && !seen[f].video) {
      seen[f].video = true;
      result.push(asset);
    }
  }

  return result;
}

// ─── Info overlay (shared) ────────────────────────────────────────────────────

function InfoOverlay({ category, title }: { category: string; title: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/55 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <p className="text-[#c9a96e] text-[9px] tracking-[0.25em] uppercase mb-1.5">{category}</p>
        <p className="text-[#f0ece4] text-sm font-medium leading-tight">{title}</p>
      </div>
    </>
  );
}

// ─── Image card ───────────────────────────────────────────────────────────────

interface ImageCardProps {
  src: string;
  title: string;
  category: string;
  aspect: string;
  index: number;
}

function ImageCard({ src, title, category, aspect, index }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="break-inside-avoid mb-3 lg:mb-4 group relative overflow-hidden cursor-pointer"
    >
      <div className={`relative ${aspect} overflow-hidden bg-[#111]`}>
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <InfoOverlay category={category} title={title} />
      </div>
    </motion.div>
  );
}

// ─── Video card (autoplay) ────────────────────────────────────────────────────

interface VideoCardProps {
  publicId: string;
  title: string;
  category: string;
  aspect: string;
  index: number;
}

function VideoCard({ publicId, title, category, aspect, index }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const src = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_mp4,q_auto,w_800/${publicId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="break-inside-avoid mb-3 lg:mb-4 group relative overflow-hidden cursor-pointer"
    >
      <div className={`relative ${aspect} overflow-hidden bg-[#111]`}>
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Subtle video indicator */}
        <div className="absolute top-3 right-3 w-7 h-7 bg-[#080808]/70 flex items-center justify-center border border-[#2a2a2a] opacity-60 group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-[#c9a96e] text-[8px]">▶</span>
        </div>
        <InfoOverlay category={category} title={title} />
      </div>
    </motion.div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function Skeleton({ count }: { count: number }) {
  const ratios = ["aspect-[9/16]", "aspect-video", "aspect-square", "aspect-[9/16]", "aspect-square", "aspect-video"];
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`break-inside-avoid mb-3 lg:mb-4 ${ratios[i % 6]} bg-[#111] animate-pulse`} />
      ))}
    </div>
  );
}

// ─── Render one asset ─────────────────────────────────────────────────────────

function AssetCard({ asset, index }: { asset: CloudinaryAsset; index: number }) {
  const isVideo = asset.resource_type === "video";
  const title =
    asset.context?.custom?.caption ||
    asset.display_name ||
    asset.filename ||
    "Untitled";
  const category =
    asset.context?.custom?.category ||
    asset.tags?.[0] ||
    asset.asset_folder ||
    (isVideo ? "Video" : "Photo");
  const aspect = aspectClass(asset.width || 9, asset.height || 16);

  if (isVideo) {
    return (
      <VideoCard
        publicId={asset.public_id}
        title={title}
        category={category}
        aspect={aspect}
        index={index}
      />
    );
  }

  return (
    <ImageCard
      src={cloudinaryUrl(asset.public_id, { width: 800, quality: "auto" })}
      title={title}
      category={category}
      aspect={aspect}
      index={index}
    />
  );
}

// ─── Static fallback ─────────────────────────────────────────────────────────

const staticAspect: Record<PortfolioItem["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[9/16]",
  landscape: "aspect-video",
};

// ─── Main grid ────────────────────────────────────────────────────────────────

interface PortfolioGridProps {
  /** Show only 1 image + 1 video per brand (home page preview) */
  preview?: boolean;
  /** Shuffle order randomly (portfolio page) */
  shuffle?: boolean;
  limit?: number;
}

export default function PortfolioGrid({ preview, shuffle: doShuffle, limit }: PortfolioGridProps) {
  const [assets, setAssets] = useState<CloudinaryAsset[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => r.json())
      .then((data: CloudinaryAsset[]) => {
        if (!Array.isArray(data) || data.length === 0) return;

        let result = data;

        if (preview) {
          result = pickOnePerBrand(result);
        }

        if (doShuffle) {
          result = shuffle(result);
        }

        setAssets(result);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [preview, doShuffle]);

  const skeletonCount = limit || (preview ? 14 : 12);

  if (loading) return <Skeleton count={skeletonCount} />;

  // ── Live Cloudinary ──
  if (assets && assets.length > 0) {
    const items = limit ? assets.slice(0, limit) : assets;
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4">
        {items.map((a, i) => (
          <AssetCard key={a.public_id} asset={a} index={i} />
        ))}
      </div>
    );
  }

  // ── Static fallback ──
  const staticItems = limit ? portfolioItems.slice(0, limit) : portfolioItems;
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4">
      {staticItems.map((item, i) => {
        const isVideo = item.type === "video";
        if (isVideo) {
          return (
            <VideoCard
              key={item.id}
              publicId={item.publicId}
              title={item.title}
              category={item.category}
              aspect={staticAspect[item.aspect]}
              index={i}
            />
          );
        }
        return (
          <ImageCard
            key={item.id}
            src={cloudinaryUrl(item.publicId, { width: 800, quality: "auto" })}
            title={item.title}
            category={item.category}
            aspect={staticAspect[item.aspect]}
            index={i}
          />
        );
      })}
    </div>
  );
}
