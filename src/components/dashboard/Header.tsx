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
    <div className="flex items-center justify-between mb-10 p-6 bg-white/60 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50 backdrop-blur-xl shadow-xl shadow-zinc-900/5 dark:shadow-black/20 transition-colors duration-200">
      <div>
        <h1 className="font-bold text-zinc-800 dark:text-zinc-100 text-3xl tracking-tight">
          Marketing KPI Dashboard
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-base font-medium">
          Анализ ключевых показателей эффективности маркетинга
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <Select defaultValue="01.06.2025 - 31.06.2025">
          <SelectTrigger className="w-[220px] bg-white/80 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-zinc-600/50 text-zinc-800 dark:text-zinc-200 rounded-xl shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white/95 dark:bg-zinc-800/95 border border-zinc-300/60 dark:border-zinc-600/50 rounded-xl backdrop-blur-xl shadow-xl">
            <SelectItem value="01.06.2025 - 31.06.2025">
              01.06.2025 - 31.06.2025
            </SelectItem>
            <SelectItem value="01.06.2024 - 31.06.2024">
              01.06.2024 - 31.06.2024
            </SelectItem>
            <SelectItem value="01.06.2023 - 31.06.2023">
              01.06.2023 - 31.06.2023
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="p-3 bg-zinc-100/80 dark:bg-zinc-700/50 rounded-xl border border-zinc-200/60 dark:border-zinc-600/50 shadow-sm">
          <Icon
            name="Calendar"
            size={18}
            className="text-zinc-600 dark:text-zinc-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
