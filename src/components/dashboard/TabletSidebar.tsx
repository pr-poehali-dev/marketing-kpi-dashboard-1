import Icon from "@/components/ui/icon";
import { useTheme } from "@/hooks/use-theme";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  icon: string;
  active?: boolean;
  badge?: number;
}

interface TabletSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems: NavItem[] = [
  { name: "Дашборд", icon: "LayoutDashboard", active: true },
  { name: "Трафик", icon: "TrendingUp" },
  { name: "Визуализация", icon: "Eye" },
  { name: "Графики", icon: "BarChart3" },
  { name: "Управление", icon: "GitBranch" },
  { name: "Соц. сети", icon: "Smartphone", badge: 3 },
  { name: "Уведомления", icon: "Bell", badge: 2 },
  { name: "Помощь", icon: "HelpCircle" },
  { name: "Настройки", icon: "Settings" },
  { name: "Выход", icon: "LogOut" },
];

const TabletSidebar = ({ isOpen, onClose }: TabletSidebarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-72 p-0 bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/50 dark:from-zinc-900/90 dark:via-zinc-800/95 dark:to-zinc-900/80 backdrop-blur-xl border-zinc-200/60 dark:border-zinc-700/50"
      >
        <div className="h-full p-5 flex flex-col">
          <SheetHeader className="mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg shadow-indigo-500/25"></div>
              <SheetTitle className="text-zinc-800 dark:text-zinc-100 font-bold text-lg tracking-tight text-left">
                MKD
              </SheetTitle>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 ml-10 font-medium text-left">
              Marketing Studio
            </p>
          </SheetHeader>

          {/* User Profile */}
          <div className="flex items-center mb-6 p-3 rounded-xl bg-gradient-to-r from-zinc-100/80 to-zinc-50/60 dark:from-zinc-800/60 dark:to-zinc-700/40 border border-zinc-200/60 dark:border-zinc-600/30 shadow-sm backdrop-blur-sm">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 mr-3 overflow-hidden shadow-lg shadow-emerald-500/20">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=36&h=36&fit=crop&crop=face"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-zinc-800 dark:text-zinc-100 font-semibold text-sm">
                Александр
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium">
                Менеджер
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1.5 flex-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={onClose}
                className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  item.active
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-[1.01]"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100/80 dark:hover:bg-zinc-700/50 hover:scale-[1.005] hover:shadow-sm"
                }`}
              >
                <div className="flex items-center">
                  <Icon
                    name={item.icon}
                    size={16}
                    className={`mr-3 transition-transform duration-300 ${item.active ? "" : "group-hover:scale-110"}`}
                  />
                  {item.name}
                </div>
                {item.badge && (
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full font-bold shadow-sm ${
                      item.badge === 3
                        ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white"
                        : "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center justify-center pt-5 border-t border-zinc-200/60 dark:border-zinc-700/50">
            <div className="flex items-center space-x-3">
              <Icon
                name="Sun"
                size={16}
                className={`transition-all duration-300 ${
                  theme === "light"
                    ? "text-amber-500 scale-110"
                    : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400"
                }`}
              />
              <button
                onClick={toggleTheme}
                className="w-12 h-6 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-600 dark:to-zinc-700 rounded-full relative cursor-pointer transition-all duration-300 hover:shadow-lg shadow-inner"
              >
                <div
                  className={`w-4 h-4 bg-white dark:bg-zinc-100 rounded-full absolute top-1 transition-all duration-300 shadow-md ${
                    theme === "dark"
                      ? "translate-x-6 bg-gradient-to-br from-blue-400 to-indigo-500"
                      : "translate-x-1"
                  }`}
                ></div>
              </button>
              <Icon
                name="Moon"
                size={16}
                className={`transition-all duration-300 ${
                  theme === "dark"
                    ? "text-blue-400 scale-110"
                    : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400"
                }`}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TabletSidebar;
