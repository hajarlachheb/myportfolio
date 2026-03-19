"use client";

const FLOWERS = [
  { top: "6%", left: "3%", size: 18, rotate: 0, delay: 0, opacity: 0.18 },
  { top: "14%", right: "5%", size: 14, rotate: 30, delay: 1.2, opacity: 0.14 },
  { top: "32%", left: "6%", size: 12, rotate: -15, delay: 2.5, opacity: 0.12 },
  { top: "48%", right: "4%", size: 16, rotate: 20, delay: 0.8, opacity: 0.16 },
  { top: "65%", left: "2%", size: 13, rotate: 45, delay: 3.1, opacity: 0.13 },
  { top: "78%", right: "6%", size: 15, rotate: -25, delay: 1.8, opacity: 0.15 },
  { top: "90%", left: "5%", size: 11, rotate: 10, delay: 0.4, opacity: 0.11 },
];

const MOONS = [
  { top: "10%", right: "8%", size: 16, delay: 0.6, opacity: 0.15 },
  { top: "38%", left: "4%", size: 13, delay: 2.0, opacity: 0.12 },
  { top: "55%", right: "3%", size: 11, delay: 1.4, opacity: 0.10 },
  { top: "72%", left: "7%", size: 14, delay: 3.4, opacity: 0.13 },
  { top: "88%", right: "5%", size: 10, delay: 0.2, opacity: 0.11 },
];

function KawaiiFlower({ size, rotate, color }: { size: number; rotate: number; color: string }) {
  const r = size * 0.28;
  const cx = size / 2;
  const cy = size / 2;
  const petalD = size * 0.38;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotate}deg)` }}>
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const px = cx + Math.cos(rad) * petalD;
        const py = cy + Math.sin(rad) * petalD;
        return <circle key={angle} cx={px} cy={py} r={r} fill={color} />;
      })}
      <circle cx={cx} cy={cy} r={r * 0.7} fill={color} opacity={0.6} />
    </svg>
  );
}

function KawaiiMoon({ size, color }: { size: number; color: string }) {
  const r = size * 0.4;
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r={r} fill={color} />
      <circle cx={cx + r * 0.35} cy={cy - r * 0.15} r={r * 0.75} fill="var(--paper)" />
    </svg>
  );
}

export function KawaiiDeco() {
  const color = "var(--accent)";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {FLOWERS.map((f, i) => (
        <span
          key={`f${i}`}
          className="absolute kawaii-float"
          style={{
            top: f.top,
            left: "left" in f ? f.left : undefined,
            right: "right" in f ? (f as any).right : undefined,
            opacity: f.opacity,
            animationDelay: `${f.delay}s`,
          }}
        >
          <KawaiiFlower size={f.size} rotate={f.rotate} color={color} />
        </span>
      ))}
      {MOONS.map((m, i) => (
        <span
          key={`m${i}`}
          className="absolute kawaii-float"
          style={{
            top: m.top,
            left: "left" in m ? m.left : undefined,
            right: "right" in m ? (m as any).right : undefined,
            opacity: m.opacity,
            animationDelay: `${m.delay}s`,
          }}
        >
          <KawaiiMoon size={m.size} color={color} />
        </span>
      ))}
    </div>
  );
}
