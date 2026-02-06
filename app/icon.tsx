import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
        }}
      >
        {/* Flower: 5 petals + center */}
        <div
          style={{
            position: "relative",
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Petals (5 circles arranged in a circle) */}
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = (i * 72 - 90) * (Math.PI / 180);
            const x = 14 + 10 * Math.cos(angle);
            const y = 14 + 10 * Math.sin(angle);
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: x - 5,
                  top: y - 5,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, #e8b4b8 0%, #e8a4b0 100%)",
                  boxShadow: "0 1px 2px rgba(45,42,38,0.12)",
                }}
              />
            );
          })}
          {/* Center */}
          <div
            style={{
              position: "absolute",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(145deg, #f5d0d4 0%, #e8a4b0 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
