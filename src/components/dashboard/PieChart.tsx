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

  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="#1A1F2C" />
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const startAngle = (cumulativePercentage / 100) * 360 - 90;
            const path = createPath(percentage, startAngle);
            cumulativePercentage += percentage;

            return (
              <path
                key={index}
                d={path}
                fill={item.color}
                className="transition-all duration-300 hover:opacity-80"
              />
            );
          })}
        </svg>
      </div>

      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-400">{item.name}</span>
            <span className="text-sm text-white font-medium">
              {((item.value / total) * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
