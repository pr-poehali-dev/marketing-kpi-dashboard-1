import Icon from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8 transition-colors duration-200">
      <div>
        <h1 className="font-bold text-gray-900 dark:text-white text-2xl">
          Marketing KPI Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
          Анализ ключевых показателей эффективности маркетинга
        </p>
      </div>
      <div className="flex items-center">
        <Select defaultValue="01.01.2023 - 31.12.2023">
          <SelectTrigger className="w-[200px] bg-white dark:bg-[#2A3441] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-[#2A3441] border-gray-300 dark:border-gray-600">
            <SelectItem value="01.01.2025 - 31.12.2025">2025 год</SelectItem>
            <SelectItem value="01.01.2024 - 31.12.2024">2024 год</SelectItem>
            <SelectItem value="01.01.2023 - 31.12.2023">2023 год</SelectItem>
            <SelectItem value="01.01.2022 - 31.12.2022">2022 год</SelectItem>
            <SelectItem value="01.01.2021 - 31.12.2021">2021 год</SelectItem>
          </SelectContent>
        </Select>
        <Icon
          name="Calendar"
          size={18}
          className="ml-2 text-gray-500 dark:text-gray-400"
        />
      </div>
    </div>
  );
};

export default Header;
