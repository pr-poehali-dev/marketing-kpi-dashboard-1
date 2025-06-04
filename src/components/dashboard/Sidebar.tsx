import Icon from "@/components/ui/icon";
import { useTheme } from "@/hooks/use-theme";

interface NavItem {
  name: string;
  icon: string;
  active?: boolean;
  badge?: number;
}

const navItems: NavItem[] = [
  { name: "Дашборд", icon: "LayoutDashboard", active: true },
  { name: "Календарь", icon: "Calendar" },
  { name: "Визуализация", icon: "Eye" },
  { name: "Графики", icon: "BarChart3" },
  { name: "Управление", icon: "GitBranch" },
  { name: "Соц. сети", icon: "Smartphone", badge: 3 },
  { name: "Уведомления", icon: "Bell", badge: 2 },
  { name: "Помощь", icon: "HelpCircle" },
  { name: "Настройки", icon: "Settings" },
  { name: "Выход", icon: "LogOut" },
];

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-64 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 h-screen p-6 flex flex-col border-r border-slate-200 dark:border-slate-700">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-cyan-600 dark:text-cyan-400 font-bold text-xl tracking-wider">
          MKD
        </h1>
      </div>

      {/* User Profile */}
      <div className="flex items-center mb-8 p-3 rounded-lg bg-slate-200/60 dark:bg-slate-700/50">
        <div className="w-10 h-10 rounded-full bg-gray-400 mr-3 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-slate-800 dark:text-white font-medium text-sm">
            Mr. Human
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
              item.active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
            }`}
          >
            <div className="flex items-center">
              <Icon name={item.icon} size={18} className="mr-3" />
              {item.name}
            </div>
            {item.badge && (
              <span
                className={`px-2 py-1 text-xs rounded-full font-semibold ${
                  item.badge === 3
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-300 dark:border-slate-700">
        <Icon
          name="Sun"
          size={18}
          className={`text-slate-400 dark:text-gray-400 ${theme === "light" ? "text-yellow-500" : ""}`}
        />
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="w-12 h-6 bg-cyan-500 dark:bg-slate-600 rounded-full relative cursor-pointer transition-colors duration-200"
          >
            <div
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0.5"
              }`}
            ></div>
          </button>
        </div>
        <Icon
          name="Moon"
          size={18}
          className={`text-slate-400 dark:text-gray-400 ${theme === "dark" ? "text-blue-400" : ""}`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
