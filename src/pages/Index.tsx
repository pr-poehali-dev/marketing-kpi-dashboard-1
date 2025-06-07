import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import MetricCard from "@/components/dashboard/MetricCard";
import ChartCard from "@/components/dashboard/ChartCard";
import PieChart from "@/components/dashboard/PieChart";
import BarChart from "@/components/dashboard/BarChart";
import LineChart from "@/components/dashboard/LineChart";
import OrdersTable from "@/components/dashboard/OrdersTable";
import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

const Index = () => {
  // Mock data for charts
  const usersData = [
    { name: "Desktop", value: 2890, color: "#FEF7CD" },
    { name: "Mobile", value: 1500, color: "#FEC6A1" },
    { name: "Tablet", value: 500, color: "#E5DEFF" },
  ];

  const subscriptionsData = [
    { name: "Basic", value: 801, color: "#33C3F0" },
    { name: "Pro", value: 300, color: "#0EA5E9" },
    { name: "Enterprise", value: 100, color: "#1EAEDB" },
  ];

  const salesData = [
    { month: "Jan", value: 400, secondValue: 200 },
    { month: "Feb", value: 300, secondValue: 150 },
    { month: "Mar", value: 600, secondValue: 400 },
    { month: "Apr", value: 800, secondValue: 600 },
    { month: "May", value: 500, secondValue: 300 },
    { month: "Jun", value: 700, secondValue: 500 },
    { month: "Jul", value: 900, secondValue: 700 },
    { month: "Aug", value: 650, secondValue: 450 },
    { month: "Sep", value: 800, secondValue: 600 },
    { month: "Oct", value: 750, secondValue: 550 },
    { month: "Nov", value: 900, secondValue: 700 },
    { month: "Dec", value: 1000, secondValue: 800 },
  ];

  const userActivityData = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 600 },
    { month: "Mar", value: 800 },
    { month: "Apr", value: 700 },
    { month: "May", value: 900 },
    { month: "Jun", value: 1200 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#1A1F2C] transition-colors duration-200">
      <Sidebar />

      <div className="flex-1 p-8">
        <Header />

        {/* Metrics Row */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Заказы"
            value="201"
            change="+2.5%"
            changeType="positive"
            icon="ShoppingCart"
          />
          <MetricCard
            title="Одобрено"
            value="36"
            change="+1.3%"
            changeType="positive"
            icon="CheckCircle"
          />
          <MetricCard
            title="Пользователи"
            value="4.890"
            change="+4.1%"
            changeType="positive"
            icon="Users"
          />
          <MetricCard
            title="Подписки"
            value="1.201"
            change="-0.8%"
            changeType="negative"
            icon="CreditCard"
          />
        </div>

        {/* Revenue and Financial Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Месячный итог"
            value="25410"
            change="-0.5%"
            changeType="negative"
            icon="DollarSign"
          />
          <MetricCard
            title="Выручка"
            value="1352"
            change="+3.2%"
            changeType="positive"
            icon="TrendingUp"
          />

          {/* Financial Summary Cards */}
          <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <Icon
                  name="Receipt"
                  size={20}
                  className="text-gray-600 dark:text-gray-300"
                />
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Icon name="FileText" size={20} className="text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Оплаченные счета
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              $30256.23
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Текущий финансовый год
            </p>
          </Card>

          <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <Icon
                  name="Wallet"
                  size={20}
                  className="text-gray-600 dark:text-gray-300"
                />
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="DollarSign" size={20} className="text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Полученные средства
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              $150256.23
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Текущий финансовый год
            </p>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <ChartCard title="Динамика продаж" showYearSelector>
            <BarChart data={salesData} />
          </ChartCard>

          <div className="grid grid-cols-2 gap-4">
            <ChartCard title="Пользователи">
              <PieChart data={usersData} />
            </ChartCard>
            <ChartCard title="Подписки">
              <PieChart data={subscriptionsData} />
            </ChartCard>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-6">
          <ChartCard title="Общая активность пользователей" showYearSelector>
            <LineChart data={userActivityData} color="#9b87f5" />
          </ChartCard>

          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
