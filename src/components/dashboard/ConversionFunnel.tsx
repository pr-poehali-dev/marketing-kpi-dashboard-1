interface ConversionFunnelProps {
  data: Array<{
    stage: string;
    value: number;
    color: string;
  }>;
}

const ConversionFunnel = ({ data }: ConversionFunnelProps) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const width = (item.value / maxValue) * 100;
        const conversionRate =
          index > 0
            ? ((item.value / data[index - 1].value) * 100).toFixed(1)
            : "100.0";

        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.stage}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {item.value.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({conversionRate}%)
                </span>
              </div>
            </div>
            <div className="relative h-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <div
                className="h-full rounded-lg transition-all duration-500 flex items-center justify-center"
                style={{
                  width: `${width}%`,
                  backgroundColor: item.color,
                }}
              >
                <span className="text-xs font-medium text-white">
                  {item.value.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConversionFunnel;
