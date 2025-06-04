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
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <div className="mr-6">
          <h1 className="font-bold text-white text-2xl">
            Marketing KPI Dashboard
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Анализ ключевых показателей эффективности маркетинга
          </p>
        </div>
        <Select defaultValue="01.06.2023 - 31.06.2023">
          <SelectTrigger className="w-[200px] bg-[#2A3441] border-gray-600 text-gray-300">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#2A3441] border-gray-600">
            <SelectItem value="01.06.2023 - 31.06.2023">
              01.06.2023 - 31.06.2023
            </SelectItem>
            <SelectItem value="01.05.2023 - 31.05.2023">
              01.05.2023 - 31.05.2023
            </SelectItem>
            <SelectItem value="01.04.2023 - 30.04.2023">
              01.04.2023 - 30.04.2023
            </SelectItem>
          </SelectContent>
        </Select>
        <Icon name="Calendar" size={18} className="ml-2 text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Icon name="Moon" size={18} className="text-gray-400 mr-2" />
          <div className="w-10 h-6 bg-blue-500 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-transform"></div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
          <Icon name="User" size={16} className="text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;
