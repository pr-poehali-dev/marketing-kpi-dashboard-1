interface BarChartProps {
  data: Array<{
    month: string;
    value: number;
    secondValue?: number;
  }>;
}

const BarChart = ({ data }: BarChartProps) => {
  const maxValue = Math.max(
    ...data.map((d) => Math.max(d.value, d.secondValue || 0)),
  );

  return (
    <div className="h-64">
      <div className="flex items-end justify-between h-full space-x-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 flex-1"
          >
            <div className="flex items-end space-x-1 h-48">
              <div
                className="bg-blue-500 rounded-t-sm transition-all duration-300 hover:bg-blue-400"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  width: "12px",
                }}
              />
              {item.secondValue && (
                <div
                  className="bg-purple-500 rounded-t-sm transition-all duration-300 hover:bg-purple-400"
                  style={{
                    height: `${(item.secondValue / maxValue) * 100}%`,
                    width: "12px",
                  }}
                />
              )}
            </div>
            <span className="text-xs text-gray-400">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
