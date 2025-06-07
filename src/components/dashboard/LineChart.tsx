interface LineChartData {
  month: string;
  value: number;
}

interface LineChartProps {
  selectedYear: string;
  dataType: "leads" | "conversions";
  color?: string;
}

const yearlyData = {
  leads: {
    "2023": [
      { month: "Янв", value: 120 },
      { month: "Фев", value: 140 },
      { month: "Мар", value: 180 },
      { month: "Апр", value: 160 },
      { month: "Май", value: 200 },
      { month: "Июн", value: 220 },
      { month: "Июл", value: 190 },
      { month: "Авг", value: 240 },
      { month: "Сен", value: 210 },
      { month: "Окт", value: 280 },
      { month: "Ноя", value: 260 },
      { month: "Дек", value: 300 },
    ],
    "2024": [
      { month: "Янв", value: 150 },
      { month: "Фев", value: 170 },
      { month: "Мар", value: 210 },
      { month: "Апр", value: 190 },
      { month: "Май", value: 240 },
      { month: "Июн", value: 260 },
      { month: "Июл", value: 230 },
      { month: "Авг", value: 280 },
      { month: "Сен", value: 250 },
      { month: "Окт", value: 320 },
      { month: "Ноя", value: 300 },
      { month: "Дек", value: 350 },
    ],
    "2025": [
      { month: "Янв", value: 180 },
      { month: "Фев", value: 200 },
      { month: "Мар", value: 250 },
      { month: "Апр", value: 230 },
      { month: "Май", value: 280 },
      { month: "Июн", value: 310 },
      { month: "Июл", value: 290 },
      { month: "Авг", value: 340 },
      { month: "Сен", value: 320 },
      { month: "Окт", value: 380 },
      { month: "Ноя", value: 360 },
      { month: "Дек", value: 400 },
    ],
  },
  conversions: {
    "2023": [
      { month: "Янв", value: 24 },
      { month: "Фев", value: 28 },
      { month: "Мар", value: 36 },
      { month: "Апр", value: 32 },
      { month: "Май", value: 40 },
      { month: "Июн", value: 44 },
      { month: "Июл", value: 38 },
      { month: "Авг", value: 48 },
      { month: "Сен", value: 42 },
      { month: "Окт", value: 56 },
      { month: "Ноя", value: 52 },
      { month: "Дек", value: 60 },
    ],
    "2024": [
      { month: "Янв", value: 30 },
      { month: "Фев", value: 34 },
      { month: "Мар", value: 42 },
      { month: "Апр", value: 38 },
      { month: "Май", value: 48 },
      { month: "Июн", value: 52 },
      { month: "Июл", value: 46 },
      { month: "Авг", value: 56 },
      { month: "Сен", value: 50 },
      { month: "Окт", value: 64 },
      { month: "Ноя", value: 60 },
      { month: "Дек", value: 70 },
    ],
    "2025": [
      { month: "Янв", value: 36 },
      { month: "Фев", value: 40 },
      { month: "Мар", value: 50 },
      { month: "Апр", value: 46 },
      { month: "Май", value: 56 },
      { month: "Июн", value: 62 },
      { month: "Июл", value: 58 },
      { month: "Авг", value: 68 },
      { month: "Сен", value: 64 },
      { month: "Окт", value: 76 },
      { month: "Ноя", value: 72 },
      { month: "Дек", value: 80 },
    ],
  },
};

const LineChart = ({
  selectedYear,
  dataType,
  color = "#9b87f5",
}: LineChartProps) => {
  const data =
    yearlyData[dataType][selectedYear as keyof typeof yearlyData.leads];
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue;

  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 300;
      const y = 150 - ((item.value - minValue) / range) * 120;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="h-40">
      <svg width="100%" height="160" viewBox="0 0 300 160">
        <defs>
          <linearGradient
            id={`areaGradient-${dataType}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Area under the line */}
        <path
          d={`M 0,150 L ${points} L 300,150 Z`}
          fill={`url(#areaGradient-${dataType})`}
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="transition-all duration-300"
        />

        {/* Data points */}
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 300;
          const y = 150 - ((item.value - minValue) / range) * 120;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill={color}
              className="transition-all duration-300 hover:r-4"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default LineChart;
