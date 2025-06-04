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
      const y = 150 - ((item.value - minValue) / range) * 120;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="h-40">
      <svg width="100%" height="160" viewBox="0 0 300 160">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Area under the line */}
        <path d={`M 0,150 L ${points} L 300,150 Z`} fill="url(#areaGradient)" />

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
