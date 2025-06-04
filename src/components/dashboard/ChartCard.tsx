import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const ChartCard = ({
  title,
  children,
  showYearSelector = false,
}: ChartCardProps) => {
  return (
    <Card className="bg-[#2A3441] border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold text-white">
          {title}
        </CardTitle>
        {showYearSelector && (
          <Select defaultValue="2021">
            <SelectTrigger className="w-[80px] bg-[#1A1F2C] border-gray-600 text-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2A3441] border-gray-600">
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ChartCard;
