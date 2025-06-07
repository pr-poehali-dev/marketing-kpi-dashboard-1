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
    <Card className="bg-white/70 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/50 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-black/25 backdrop-blur-xl rounded-2xl group">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h3 className="text-lg md:text-xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
          {title}
        </h3>
        {showYearSelector && (
          <Select defaultValue="2025">
            <SelectTrigger className="w-[80px] md:w-[90px] bg-zinc-100/80 dark:bg-zinc-700/60 border border-zinc-200/60 dark:border-zinc-600/50 text-zinc-800 dark:text-zinc-200 text-sm md:text-base rounded-xl shadow-sm backdrop-blur-sm font-semibold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white/95 dark:bg-zinc-800/95 border border-zinc-200/60 dark:border-zinc-600/50 rounded-xl backdrop-blur-xl shadow-xl">
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
