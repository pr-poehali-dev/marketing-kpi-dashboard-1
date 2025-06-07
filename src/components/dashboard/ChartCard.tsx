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

const yearOptions = [
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
];

const ChartCard = ({ title, children, showYearSelector }: ChartCardProps) => {
  return (
    <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors duration-200">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {showYearSelector && (
          <Select defaultValue="2023">
            <SelectTrigger className="w-[70px] md:w-[80px] bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-300 text-xs md:text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-600">
              {yearOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      {children}
    </Card>
  );
};

export default ChartCard;
