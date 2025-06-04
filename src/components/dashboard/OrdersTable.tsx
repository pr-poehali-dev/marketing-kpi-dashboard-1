import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const OrdersTable = () => {
  const orders = [
    {
      id: "#12548796",
      customer: "Wade Warren",
      status: "Delivered",
      date: "15 Dec 2021",
      amount: "$124.97",
      statusColor: "green",
    },
    {
      id: "#12548797",
      customer: "Jane Cooper",
      status: "Cancelled",
      date: "14 Dec 2021",
      amount: "$365.02",
      statusColor: "red",
    },
    {
      id: "#12548798",
      customer: "Guy Hawkins",
      status: "Refunded",
      date: "13 Dec 2021",
      amount: "$45.88",
      statusColor: "orange",
    },
    {
      id: "#12548799",
      customer: "Kristin Watson",
      status: "Delivered",
      date: "12 Dec 2021",
      amount: "$65.00",
      statusColor: "green",
    },
  ];

  return (
    <Card className="bg-white dark:bg-[#2A3441] border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Orders
        </h3>
        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-3">
                <Icon
                  name="Package"
                  size={16}
                  className="text-gray-600 dark:text-gray-300"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {order.customer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {order.id}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900 dark:text-white">
                {order.amount}
              </p>
              <div className="flex items-center">
                <span
                  className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    order.statusColor === "green"
                      ? "bg-green-500"
                      : order.statusColor === "red"
                        ? "bg-red-500"
                        : "bg-orange-500"
                  }`}
                ></span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default OrdersTable;
