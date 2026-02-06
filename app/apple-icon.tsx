import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fdf5f7 0%, #fce4ec 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 140,
            height: 140,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = (i * 72 - 90) * (Math.PI / 180);
            const x = 70 + 48 * Math.cos(angle);
            const y = 70 + 48 * Math.sin(angle);
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: x - 24,
                  top: y - 24,
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, #e8b4b8 0%, #e8a4b0 100%)",
                  boxShadow: "0 4px 12px rgba(45,42,38,0.1)",
                }}
              />
            );
          })}
          <div
            style={{
              position: "absolute",
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "linear-gradient(145deg, #f5d0d4 0%, #e8a4b0 100%)",
              boxShadow: "inset 0 2px 0 rgba(255,255,255,0.6)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
