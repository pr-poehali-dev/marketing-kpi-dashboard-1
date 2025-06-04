import Icon from "@/components/ui/icon";

interface NavItem {
  name: string;
  icon: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { name: "Analytics", icon: "BarChart3", active: true },
  { name: "Products", icon: "Package" },
  { name: "Messages", icon: "MessageSquare" },
  { name: "Customers", icon: "Users" },
  { name: "Settings", icon: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1A1F2C] h-screen p-6 border-r border-gray-700">
      {/* Logo */}
      <div className="flex items-center mb-12">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
          <Icon name="Zap" size={16} className="text-white" />
        </div>
        <span className="text-white font-semibold text-lg">Business</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              item.active
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <Icon name={item.icon} size={18} className="mr-3" />
            {item.name}
          </button>
        ))}
      </nav>

      {/* Sign Out */}
      <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors mt-auto absolute bottom-6">
        <Icon name="LogOut" size={18} className="mr-3" />
        Sign Out
      </button>
    </div>
  );
};

export default Sidebar;
