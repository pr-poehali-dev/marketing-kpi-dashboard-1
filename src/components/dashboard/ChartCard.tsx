import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  showYearSelector?: boolean;
}

const ChartCard = ({ title, children, showYearSelector }: ChartCardProps) => {
  return (
    <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {showYearSelector && (
          <Select defaultValue="2023">
            <SelectTrigger className="w-[80px] bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-600">
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>
      {children}
    </Card>
  );
};

export default ChartCard;
