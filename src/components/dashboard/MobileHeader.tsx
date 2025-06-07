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
    <div className="flex items-center justify-between mb-8 p-4 bg-white/60 dark:bg-zinc-800/40 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50 backdrop-blur-xl shadow-lg shadow-zinc-900/5 dark:shadow-black/20">
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="p-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-700/60 border border-zinc-200/60 dark:border-zinc-600/50 mr-4 md:hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
        >
          <Icon
            name="Menu"
            size={20}
            className="text-zinc-700 dark:text-zinc-300"
          />
        </button>
        <div>
          <h1 className="font-bold text-zinc-800 dark:text-zinc-100 text-xl md:text-2xl tracking-tight">
            Marketing KPI
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-medium hidden sm:block">
            Анализ ключевых показателей эффективности
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Select defaultValue="01.06.2025 - 31.06.2025">
          <SelectTrigger className="w-[140px] md:w-[200px] bg-white/80 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-zinc-600/50 text-zinc-800 dark:text-zinc-200 text-xs md:text-sm rounded-xl shadow-sm backdrop-blur-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white/95 dark:bg-zinc-800/95 border border-zinc-300/60 dark:border-zinc-600/50 rounded-xl backdrop-blur-xl shadow-xl">
            <SelectItem value="01.06.2025 - 31.06.2025">Июнь 2025</SelectItem>
            <SelectItem value="01.06.2024 - 31.06.2024">Июнь 2024</SelectItem>
            <SelectItem value="01.06.2023 - 31.06.2023">Июнь 2023</SelectItem>
          </SelectContent>
        </Select>
        <div className="p-2 bg-zinc-100/80 dark:bg-zinc-700/50 rounded-xl border border-zinc-200/60 dark:border-zinc-600/50 shadow-sm hidden sm:block">
          <Icon
            name="Calendar"
            size={16}
            className="text-zinc-600 dark:text-zinc-400"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
