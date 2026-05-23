export default function BalanceChart() {
  const W = 900;
  const H = 260;
  const left = 58;
  const right = 890;
  const bottom = 225;

  const points = [
    [left, 175],
    [left + 35, 135],
    [left + 80, 155],
    [left + 145, 120],
    [left + 215, 90],
    [left + 285, 118],
    [left + 360, 88],
    [left + 430, 105],
    [left + 505, 95],
    [left + 590, 100],
    [left + 675, 70],
    [left + 755, 78],
    [right, 58],
  ];

  const line = points.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `${line} ${right},${bottom} ${left},${bottom}`;

  const yLabels = [
    ["1,400", 30],
    ["1,200", 62],
    ["1,000", 94],
    ["800", 126],
    ["600", 158],
    ["400", 190],
    ["200", 222],
  ];

  const dates = ["13/05", "14/05", "15/05", "16/05", "17/05", "18/05", "19/05"];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Biểu đồ số dư{" "}
          <span className="text-sm font-normal text-slate-400">(7 ngày qua)</span>
        </h2>

        <button className="rounded-xl border border-white/10 bg-[#071226] px-5 py-2 text-sm font-semibold">
          7 ngày⌄
        </button>
      </div>

      <div className="relative mt-6 h-[300px] overflow-hidden rounded-2xl bg-[#081224]">
        <div className="absolute right-[5%] top-[58px] z-20 rounded-xl bg-slate-700/90 px-4 py-3 text-center shadow-2xl">
          <div className="text-lg font-bold">1,250.25 USDT</div>
          <div className="text-sm text-slate-300">19/05/2024</div>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full px-0"
        >
          <defs>
            <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {yLabels.map(([label, y]) => (
            <g key={label}>
              <text
                x="18"
                y={Number(y) + 5}
                fill="#94a3b8"
                fontSize="13"
                style={{ vectorEffect: "non-scaling-stroke" }}
              >
                {label}
              </text>

              <line
                x1={left}
                x2={right}
                y1={Number(y)}
                y2={Number(y)}
                stroke="rgba(148,163,184,0.14)"
                strokeWidth="1"
              />
            </g>
          ))}

          <polyline points={area} fill="url(#balanceFill)" />

          <polyline
            points={line}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />

          {points.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="5"
              fill="#3b82f6"
              stroke="#60a5fa"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {dates.map((d, i) => (
            <text
              key={d}
              x={left + i * ((right - left) / 6)}
              y="248"
              fill="#94a3b8"
              fontSize="13"
              textAnchor={i === 0 ? "start" : i === 6 ? "end" : "middle"}
            >
              {d}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}