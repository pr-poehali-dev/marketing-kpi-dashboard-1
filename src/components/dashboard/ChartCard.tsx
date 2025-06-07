import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface ChartCardProps {
  title: string;
  children: (selectedYear: string) => React.ReactNode;
  showYearSelector?: boolean;
}

const yearOptions = [
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
];

const ChartCard = ({ title, children, showYearSelector }: ChartCardProps) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  return (
    <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {showYearSelector && (
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[80px] bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-300">
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
      {children(selectedYear)}
    </Card>
  );
};

export default ChartCard;
