import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import MetricCard from "@/components/dashboard/MetricCard";
import ChartCard from "@/components/dashboard/ChartCard";
import PieChart from "@/components/dashboard/PieChart";
import BarChart from "@/components/dashboard/BarChart";
import LineChart from "@/components/dashboard/LineChart";
import ConversionFunnel from "@/components/dashboard/ConversionFunnel";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Mock data for marketing metrics
  const channelTrafficData = [
    { name: "Органический", value: 4500, color: "#10B981" },
    { name: "Платный", value: 2800, color: "#3B82F6" },
    { name: "Социальные сети", value: 1900, color: "#8B5CF6" },
    { name: "Прямой", value: 1200, color: "#F59E0B" },
    { name: "Email", value: 800, color: "#EF4444" },
  ];

  const conversionData = [
    { month: "Янв", leads: 850, conversions: 127 },
    { month: "Фев", leads: 920, conversions: 145 },
    { month: "Мар", leads: 1100, conversions: 176 },
    { month: "Апр", leads: 980, conversions: 152 },
    { month: "Май", leads: 1250, conversions: 200 },
    { month: "Июн", leads: 1400, conversions: 238 },
  ];

  const revenueData = [
    { month: "Янв", revenue: 284000, target: 300000 },
    { month: "Фев", revenue: 325000, target: 320000 },
    { month: "Мар", revenue: 378000, target: 350000 },
    { month: "Апр", revenue: 342000, target: 360000 },
    { month: "Май", revenue: 425000, target: 400000 },
    { month: "Июн", revenue: 487000, target: 450000 },
  ];

  const funnelData = [
    { stage: "Визиты", value: 12500, color: "#3B82F6" },
    { stage: "Лиды", value: 1400, color: "#10B981" },
    { stage: "Квалифицированные", value: 840, color: "#F59E0B" },
    { stage: "Конверсии", value: 238, color: "#EF4444" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#1A1F2C] transition-colors duration-200">
      <Sidebar />

      <div className="flex-1 p-8">
        <Header />

        {/* Продажи и финансы */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Продажи и финансы
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <MetricCard
              title="Общий объем продаж"
              value="2.1M"
              change="+12.5%"
              changeType="positive"
              icon="TrendingUp"
              target="2.3M"
              period="vs план"
            />
            <MetricCard
              title="Выручка"
              value="487.2K"
              change="+8.2%"
              changeType="positive"
              icon="DollarSign"
              target="450K"
              period="vs план"
            />
            <MetricCard
              title="Маржинальная прибыль"
              value="195K"
              change="+15.1%"
              changeType="positive"
              icon="PieChart"
              target="180K"
              period="vs план"
            />
            <MetricCard
              title="ROI/ROMI"
              value="320%"
              change="+5.8%"
              changeType="positive"
              icon="Target"
              target="300%"
              period="vs план"
            />
          </div>
        </div>

        {/* Лиды и конверсии */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Лиды и конверсии
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <MetricCard
              title="Общее количество лидов"
              value="1,400"
              change="+22.3%"
              changeType="positive"
              icon="Users"
              target="1,200"
              period="vs план"
            />
            <MetricCard
              title="Общее количество конверсий"
              value="238"
              change="+18.7%"
              changeType="positive"
              icon="CheckCircle"
              target="210"
              period="vs план"
            />
            <MetricCard
              title="Средняя стоимость лида (CPL)"
              value="85₽"
              change="-12.4%"
              changeType="positive"
              icon="Calculator"
              target="97₽"
              period="vs план"
            />
            <MetricCard
              title="Средняя стоимость конверсии (CPA)"
              value="500₽"
              change="-8.1%"
              changeType="positive"
              icon="CreditCard"
              target="543₽"
              period="vs план"
            />
          </div>
        </div>

        {/* Трафик */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Трафик и источники
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <MetricCard
              title="Общее число визитов"
              value="12,500"
              change="+16.2%"
              changeType="positive"
              icon="MousePointer"
              target="11,800"
              period="vs план"
            />
            <MetricCard
              title="Уникальные посетители"
              value="8,750"
              change="+19.8%"
              changeType="positive"
              icon="Eye"
              target="8,200"
              period="vs план"
            />
            <MetricCard
              title="Новые посетители"
              value="5,600"
              change="+25.3%"
              changeType="positive"
              icon="UserPlus"
              target="5,100"
              period="vs план"
            />
          </div>
        </div>

        {/* Графики и аналитика */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <ChartCard title="Выручка vs План" showYearSelector>
            <BarChart data={revenueData} />
          </ChartCard>

          <ChartCard title="Источники трафика">
            <PieChart data={channelTrafficData} />
          </ChartCard>

          <ChartCard title="Воронка конверсий">
            <ConversionFunnel data={funnelData} />
          </ChartCard>
        </div>

        {/* Эффективность и конверсии */}
        <div className="grid grid-cols-2 gap-6">
          <ChartCard title="Динамика лидов и конверсий" showYearSelector>
            <LineChart
              data={conversionData.map((item) => ({
                month: item.month,
                value: item.leads,
                secondValue: item.conversions * 10, // scaled for visibility
              }))}
              color="#10B981"
              showDualAxis
            />
          </ChartCard>

          <div className="grid grid-cols-2 gap-4">
            <MetricCard
              title="Коэффициент конверсии"
              value="17.0%"
              change="+2.1%"
              changeType="positive"
              icon="Percent"
              target="15.5%"
              period="vs план"
            />
            <MetricCard
              title="Lead-to-Customer Rate"
              value="63.8%"
              change="+4.3%"
              changeType="positive"
              icon="ArrowRight"
              target="60%"
              period="vs план"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
