import Icon from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MobileHeaderProps {
  onMenuToggle: () => void;
}

const MobileHeader = ({ onMenuToggle }: MobileHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg bg-white dark:bg-[#2A3441] border border-gray-200 dark:border-gray-700 mr-3 md:hidden"
        >
          <Icon
            name="Menu"
            size={20}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>
        <div>
          <h1 className="font-bold text-gray-900 dark:text-white text-lg md:text-2xl">
            Marketing KPI
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm hidden sm:block">
            Анализ ключевых показателей эффективности
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Select defaultValue="01.06.2025 - 31.06.2025">
          <SelectTrigger className="w-[140px] md:w-[200px] bg-white dark:bg-[#2A3441] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 text-xs md:text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-[#2A3441] border-gray-300 dark:border-gray-600">
            <SelectItem value="01.06.2025 - 31.06.2025">Июнь 2025</SelectItem>
            <SelectItem value="01.06.2024 - 31.06.2024">Июнь 2024</SelectItem>
            <SelectItem value="01.06.2023 - 31.06.2023">Июнь 2023</SelectItem>
          </SelectContent>
        </Select>
        <Icon
          name="Calendar"
          size={16}
          className="ml-2 text-gray-500 dark:text-gray-400 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default MobileHeader;
