import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Umair — Creative Strategy & Digital Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top row — logo + status */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "1px solid #c9a96e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#c9a96e", fontSize: "18px", fontWeight: "700", letterSpacing: "2px" }}>U</span>
          </div>
          <span style={{ color: "#c9a96e", fontSize: "14px", letterSpacing: "4px", textTransform: "uppercase" }}>
            Umair
          </span>
          <div style={{ marginLeft: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ color: "#6b6b6b", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>
              Available for Projects
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ color: "#5a5a5a", fontSize: "13px", letterSpacing: "6px", textTransform: "uppercase" }}>
            Creative Strategy × Digital Growth
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f0ece4", fontSize: "80px", fontWeight: "300", lineHeight: "0.9", letterSpacing: "-3px" }}>
              Creative
            </span>
            <span style={{ color: "#f0ece4", fontSize: "80px", fontWeight: "300", lineHeight: "0.9", letterSpacing: "-3px" }}>
              Strategy ×
            </span>
            <span
              style={{
                fontSize: "80px",
                fontWeight: "300",
                lineHeight: "0.9",
                letterSpacing: "-3px",
                background: "linear-gradient(135deg, #c9a96e 0%, #e8d5b0 50%, #c9a96e 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Digital Growth
            </span>
          </div>
        </div>

        {/* Bottom stats row */}
        <div style={{ display: "flex", alignItems: "center", gap: "48px", borderTop: "1px solid #1e1e1e", paddingTop: "24px" }}>
          {[
            { value: "13M+", label: "Organic Reach" },
            { value: "45+", label: "Brand Partners" },
            { value: "6+", label: "Years Experience" },
            { value: "6", label: "Sectors" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ color: "#c9a96e", fontSize: "28px", fontWeight: "300" }}>{s.value}</span>
              <span style={{ color: "#5a5a5a", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Decorative vertical line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "38%",
            width: "1px",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.08), transparent)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
