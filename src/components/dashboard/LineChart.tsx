import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  data?: DataPoint[];
  lines?: Array<{
    dataKey: string;
    stroke: string;
    name?: string;
  }>;
  height?: number;
}

const LineChart = ({
  data = [],
  lines = [{ dataKey: "value", stroke: "#8884d8", name: "Значение" }],
  height = 300,
}: LineChartProps) => {
  // Проверяем, что data существует и не пустой
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Нет данных для отображения</p>
      </div>
    );
  }

  // Проверяем, что lines существует
  if (!lines || lines.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Не настроены линии графика</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {lines.map((line, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            name={line.name}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
