import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
  period?: string;
}

const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon,
  period,
}: MetricCardProps) => {
  return (
    <Card className="bg-[#2A3441] border-gray-700 p-6 hover:bg-[#2F3A48] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-gray-700 rounded-lg">
          <Icon name={icon} size={20} className="text-gray-300" />
        </div>
        {period && <span className="text-xs text-gray-500">{period}</span>}
      </div>

      <div className="space-y-1">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p
          className={`text-sm flex items-center ${
            changeType === "positive" ? "text-green-400" : "text-red-400"
          }`}
        >
          <Icon
            name={changeType === "positive" ? "TrendingUp" : "TrendingDown"}
            size={14}
            className="mr-1"
          />
          {change} за последний месяц
        </p>
      </div>
    </Card>
  );
};

export default MetricCard;
