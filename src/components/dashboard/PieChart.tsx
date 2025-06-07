interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

const PieChart = ({ data }: PieChartProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const createPath = (percentage: number, startAngle: number) => {
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;

    const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
    const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
    const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
    const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);

    return `M 50,50 L ${x1},${y1} A 40,40 0 ${largeArcFlag},1 ${x2},${y2} Z`;
  };

  const getLabelPosition = (percentage: number, startAngle: number) => {
    const angle = (percentage / 100) * 360;
    const midAngle = startAngle + angle / 2;
    const radius = 32;
    const x = 50 + radius * Math.cos((midAngle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((midAngle * Math.PI) / 180);
    return { x, y };
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <svg width="200" height="200" viewBox="0 0 100 100">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const startAngle = (cumulativePercentage / 100) * 360 - 90;
            const path = createPath(percentage, startAngle);
            const labelPos = getLabelPosition(percentage, startAngle);

            cumulativePercentage += percentage;

            return (
              <g key={index}>
                <path
                  d={path}
                  fill={item.color}
                  className="transition-all duration-300 hover:opacity-80"
                />
                {percentage > 8 && (
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-xs font-medium"
                    style={{ fontSize: "4.5px" }}
                  >
                    {percentage.toFixed(0)}%
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
