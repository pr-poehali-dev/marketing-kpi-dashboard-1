import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
  target?: string;
  period?: string;
}

const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon,
  target,
  period,
}: MetricCardProps) => {
  return (
    <Card className="bg-white/70 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/50 p-4 md:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-black/25 hover:scale-[1.02] backdrop-blur-xl rounded-2xl group">
      <div className="flex items-center justify-between mb-3 md:mb-5">
        <div className="p-2 md:p-3 bg-gradient-to-br from-zinc-100/80 to-zinc-50/60 dark:from-zinc-700/60 dark:to-zinc-600/40 rounded-xl border border-zinc-200/40 dark:border-zinc-600/30 shadow-sm group-hover:shadow-md transition-all duration-300">
          <Icon
            name={icon}
            size={18}
            className="text-zinc-700 dark:text-zinc-300 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center space-x-1.5 md:space-x-2 px-2 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-zinc-50/80 to-white/60 dark:from-zinc-700/40 dark:to-zinc-600/30 rounded-xl border border-zinc-200/40 dark:border-zinc-600/30 shadow-sm">
          <Icon
            name={changeType === "positive" ? "TrendingUp" : "TrendingDown"}
            size={14}
            className={`md:w-4 md:h-4 ${
              changeType === "positive"
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-rose-600 dark:text-rose-400"
            }`}
          />
          <span
            className={`text-sm md:text-base font-bold ${
              changeType === "positive"
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-rose-600 dark:text-rose-400"
            }`}
          >
            {change}
          </span>
        </div>
      </div>

      <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mb-1.5 md:mb-2 font-medium">
        {title}
      </p>
      <p className="text-xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-2 md:mb-3 tracking-tight">
        {value}
      </p>

      {target && period && (
        <div className="flex items-center justify-between text-xs md:text-sm pt-2 md:pt-3 border-t border-zinc-200/40 dark:border-zinc-600/30">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium">
            План:{" "}
            <span className="font-semibold text-zinc-600 dark:text-zinc-300">
              {target}
            </span>
          </span>
          <span className="text-zinc-400 dark:text-zinc-500 text-xs font-medium">
            {period}
          </span>
        </div>
      )}
    </Card>
  );
};

export default MetricCard;
