import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
}

const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon,
}: MetricCardProps) => {
  return (
    <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <Icon
            name={icon}
            size={20}
            className="text-gray-600 dark:text-gray-300"
          />
        </div>
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
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
    </Card>
  );
};

export default MetricCard;
