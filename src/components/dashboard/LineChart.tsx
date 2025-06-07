interface LineChartProps {
  data: Array<{
    month: string;
    value: number;
  }>;
  color?: string;
}

const LineChart = ({ data, color = "#9b87f5" }: LineChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue;

  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 300;
      const y = 200 - ((item.value - minValue) / range) * 160;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="h-full w-full min-h-[200px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 200"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Area under the line */}
        <path d={`M 0,180 L ${points} L 300,180 Z`} fill="url(#areaGradient)" />

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
          const y = 180 - ((item.value - minValue) / range) * 140;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill={color}
              className="transition-all duration-300 hover:r-5"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default LineChart;
