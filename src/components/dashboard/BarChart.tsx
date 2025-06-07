interface BarChartProps {
  data: Array<{
    month: string;
    revenue?: number;
    target?: number;
    value?: number;
    secondValue?: number;
  }>;
}

const BarChart = ({ data }: BarChartProps) => {
  const maxValue = Math.max(
    ...data.map((d) =>
      Math.max(d.revenue || d.value || 0, d.target || d.secondValue || 0),
    ),
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
                  height: `${((item.revenue || item.value || 0) / maxValue) * 100}%`,
                  width: "12px",
                }}
                title={`Факт: ${item.revenue || item.value || 0}`}
              />
              {(item.target || item.secondValue) && (
                <div
                  className="bg-purple-500 rounded-t-sm transition-all duration-300 hover:bg-purple-400"
                  style={{
                    height: `${((item.target || item.secondValue || 0) / maxValue) * 100}%`,
                    width: "12px",
                  }}
                  title={`План: ${item.target || item.secondValue || 0}`}
                />
              )}
            </div>
            <span className="text-xs text-gray-400">{item.month}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-4">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-xs text-gray-500">Факт</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span className="text-xs text-gray-500">План</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
