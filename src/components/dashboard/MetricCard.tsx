import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
  target?: string;
  period?: string;
}

const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon,
  target,
  period,
}: MetricCardProps) => {
  return (
    <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <Icon
            name={icon}
            size={20}
            className="text-gray-600 dark:text-gray-300"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Icon
            name={changeType === "positive" ? "TrendingUp" : "TrendingDown"}
            size={16}
            className={
              changeType === "positive"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }
          />
          <span
            className={`text-sm font-medium ${
              changeType === "positive"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {change}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {value}
      </p>

      {target && period && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400 dark:text-gray-500">
            План: {target}
          </span>
          <span className="text-gray-400 dark:text-gray-500">{period}</span>
        </div>
      )}
    </Card>
  );
};

export default MetricCard;
