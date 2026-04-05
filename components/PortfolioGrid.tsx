"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, PortfolioItem } from "@/lib/data";
import { cloudinaryUrl, CloudinaryAsset, CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary";

// ─── Sector → folder mapping ──────────────────────────────────────────────────

const SECTOR_FOLDERS: Record<string, string[]> = {
  Fashion:      ["Klay", "Manas", "Sulafah", "Shahid Afridi Store", "AFM"],
  "F&B":        ["Espresso", "Chatterbox", "PITS", "Salman Farms Milk"],
  Corporate:    ["Delphi", "level 2"],
  "AI Content": ["Ai Content"],
};

const FILTERS = ["All", "Fashion", "F&B", "Corporate", "AI Content"] as const;
type Filter = (typeof FILTERS)[number];

const INITIAL_COUNT = 30;
const LOAD_MORE_COUNT = 24;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function aspectClass(width: number, height: number): string {
  const r = width / height;
  if (r > 1.4) return "aspect-video";
  if (r < 0.8) return "aspect-[9/16]";
  return "aspect-square";
}

/** Interleave images and videos 2:1 (deterministic) */
function interleave(assets: CloudinaryAsset[]): CloudinaryAsset[] {
  const images = assets.filter((a) => a.resource_type !== "video");
  const videos = assets.filter((a) => a.resource_type === "video");
  const result: CloudinaryAsset[] = [];
  let ii = 0, vi = 0;
  while (ii < images.length || vi < videos.length) {
    for (let k = 0; k < 2 && ii < images.length; k++) result.push(images[ii++]);
    if (vi < videos.length) result.push(videos[vi++]);
  }
  return result;
}

/** Pick 1 image + 1 video per brand folder */
function pickOnePerBrand(assets: CloudinaryAsset[]): CloudinaryAsset[] {
  const seen: Record<string, { image: boolean; video: boolean }> = {};
  const result: CloudinaryAsset[] = [];
  for (const asset of assets) {
    const f = asset.asset_folder;
    if (!seen[f]) seen[f] = { image: false, video: false };
    if (asset.resource_type === "image" && !seen[f].image) { seen[f].image = true; result.push(asset); }
    else if (asset.resource_type === "video" && !seen[f].video) { seen[f].video = true; result.push(asset); }
  }
  return result;
}

// ─── Info overlay ─────────────────────────────────────────────────────────────

function InfoOverlay({ category, title }: { category: string; title: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/50 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-[#c9a96e] text-[9px] tracking-[0.25em] uppercase mb-1">{category}</p>
        <p className="text-[#f0ece4] text-sm font-medium leading-tight">{title}</p>
      </div>
    </>
  );
}

// ─── Image card ───────────────────────────────────────────────────────────────

function ImageCard({ src, title, category, aspect }: { src: string; title: string; category: string; aspect: string }) {
  return (
    <div className="break-inside-avoid mb-3 lg:mb-4 group relative overflow-hidden cursor-pointer">
      <div className={`relative ${aspect} overflow-hidden bg-[#111]`}>
        <img
          src={src}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <InfoOverlay category={category} title={title} />
      </div>
    </div>
  );
}

// ─── Video card — only plays when in viewport ─────────────────────────────────

function VideoCard({ publicId, title, category, aspect }: { publicId: string; title: string; category: string; aspect: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  const src = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_mp4,q_auto:low,w_600/${publicId}`;

  return (
    <div ref={containerRef} className="break-inside-avoid mb-3 lg:mb-4 group relative overflow-hidden cursor-pointer">
      <div className={`relative ${aspect} overflow-hidden bg-[#111]`}>
        <video
          ref={videoRef}
          src={inView ? src : undefined}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Video indicator */}
        <div className="absolute top-3 right-3 w-7 h-7 bg-[#080808]/70 flex items-center justify-center border border-[#2a2a2a] opacity-60 group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-[#c9a96e] text-[8px]">▶</span>
        </div>
        <InfoOverlay category={category} title={title} />
      </div>
    </div>
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

// ─── Render one Cloudinary asset ──────────────────────────────────────────────

function AssetCard({ asset }: { asset: CloudinaryAsset }) {
  const isVideo = asset.resource_type === "video";
  const title = asset.context?.custom?.caption || asset.display_name || asset.filename || "Untitled";
  const category = asset.context?.custom?.category || asset.tags?.[0] || asset.asset_folder || (isVideo ? "Video" : "Photo");
  const aspect = aspectClass(asset.width || 9, asset.height || 16);

  if (isVideo) return <VideoCard publicId={asset.public_id} title={title} category={category} aspect={aspect} />;
  return <ImageCard src={cloudinaryUrl(asset.public_id, { width: 800, quality: "auto" })} title={title} category={category} aspect={aspect} />;
}

// ─── Static fallback aspect map ───────────────────────────────────────────────

const staticAspect: Record<PortfolioItem["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[9/16]",
  landscape: "aspect-video",
};

// ─── Filter tabs ──────────────────────────────────────────────────────────────

function FilterTabs({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-5 py-2 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 border ${
            active === f
              ? "bg-[#c9a96e] text-[#080808] border-[#c9a96e]"
              : "bg-transparent text-[#6b6b6b] border-[#2a2a2a] hover:border-[#c9a96e]/50 hover:text-[#c9a96e]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

// ─── Main grid ────────────────────────────────────────────────────────────────

interface PortfolioGridProps {
  preview?: boolean;
  shuffle?: boolean;
  limit?: number;
  showFilters?: boolean;
}

export default function PortfolioGrid({ preview, shuffle: doShuffle, limit, showFilters }: PortfolioGridProps) {
  const [assets, setAssets] = useState<CloudinaryAsset[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Reset visible count when filter changes
  useEffect(() => { setVisibleCount(INITIAL_COUNT); }, [activeFilter]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => r.json())
      .then((data: CloudinaryAsset[]) => {
        if (!Array.isArray(data) || data.length === 0) return;
        let result = data;
        if (preview) result = pickOnePerBrand(result);
        if (doShuffle) result = interleave(result);
        setAssets(result);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [preview, doShuffle]);

  if (loading) return <Skeleton count={limit || (preview ? 14 : INITIAL_COUNT)} />;

  // ── Live Cloudinary path ──
  if (assets && assets.length > 0) {
    const filtered = activeFilter === "All"
      ? assets
      : assets.filter((a) => (SECTOR_FOLDERS[activeFilter] ?? []).includes(a.asset_folder));

    const visible = filtered.slice(0, limit ?? visibleCount);
    const hasMore = !limit && visibleCount < filtered.length;

    return (
      <>
        {showFilters && <FilterTabs active={activeFilter} onChange={setActiveFilter} />}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4"
          >
            {visible.map((a) => <AssetCard key={a.public_id} asset={a} />)}
          </motion.div>
        </AnimatePresence>
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
              className="px-10 py-4 border border-[#2a2a2a] text-[#6b6b6b] text-xs tracking-[0.2em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </>
    );
  }

  // ── Static fallback ──
  let staticItems = portfolioItems;

  if (preview) {
    const seen: Record<string, { image: boolean; video: boolean }> = {};
    staticItems = portfolioItems.filter((item) => {
      const cat = item.category;
      if (!seen[cat]) seen[cat] = { image: false, video: false };
      if (item.type === "image" && !seen[cat].image) { seen[cat].image = true; return true; }
      if (item.type === "video" && !seen[cat].video) { seen[cat].video = true; return true; }
      return false;
    });
  }

  if (activeFilter !== "All") {
    const folders = SECTOR_FOLDERS[activeFilter] ?? [];
    staticItems = staticItems.filter((item) => folders.includes(item.category));
  }

  if (doShuffle) {
    const imgs = staticItems.filter((i) => i.type !== "video");
    const vids = staticItems.filter((i) => i.type === "video");
    const mixed: typeof portfolioItems = [];
    let ii = 0, vi = 0;
    while (ii < imgs.length || vi < vids.length) {
      for (let k = 0; k < 2 && ii < imgs.length; k++) mixed.push(imgs[ii++]);
      if (vi < vids.length) mixed.push(vids[vi++]);
    }
    staticItems = mixed;
  }

  const staticVisible = staticItems.slice(0, limit ?? visibleCount);
  const staticHasMore = !limit && visibleCount < staticItems.length;

  return (
    <>
      {showFilters && <FilterTabs active={activeFilter} onChange={setActiveFilter} />}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4">
        {staticVisible.map((item) => {
          if (item.type === "video") {
            return <VideoCard key={item.id} publicId={item.publicId} title={item.title} category={item.category} aspect={staticAspect[item.aspect]} />;
          }
          return <ImageCard key={item.id} src={cloudinaryUrl(item.publicId, { width: 800, quality: "auto" })} title={item.title} category={item.category} aspect={staticAspect[item.aspect]} />;
        })}
      </div>
      {staticHasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
            className="px-10 py-4 border border-[#2a2a2a] text-[#6b6b6b] text-xs tracking-[0.2em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
          >
            Load More ({staticItems.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </>
  );
}
