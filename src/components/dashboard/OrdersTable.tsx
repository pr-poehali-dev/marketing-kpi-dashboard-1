import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Order {
  id: string;
  customer: string;
  location: string;
  date: string;
  status: "Delivered" | "Processing" | "Pending";
  amount: string;
}

const orders: Order[] = [
  {
    id: "#234",
    customer: "Emma",
    location: "London",
    date: "22.06.2022",
    status: "Delivered",
    amount: "$120",
  },
  {
    id: "#235",
    customer: "John Doe",
    location: "USA",
    date: "21.06.2022",
    status: "Processing",
    amount: "$85",
  },
  {
    id: "#236",
    customer: "Sarah",
    location: "Canada",
    date: "20.06.2022",
    status: "Pending",
    amount: "$95",
  },
  {
    id: "#237",
    customer: "Robert",
    location: "New York",
    date: "19.06.2022",
    status: "Delivered",
    amount: "$140",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-500";
    case "Processing":
      return "bg-yellow-500";
    case "Pending":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const OrdersTable = () => {
  return (
    <Card className="bg-[#2A3441] border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-white">
          Customer order
        </CardTitle>
        <Icon name="MoreHorizontal" size={20} className="text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {orders.map((order, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg ${getStatusColor(order.status)} bg-opacity-10 border border-opacity-20`}
              style={{
                borderColor: getStatusColor(order.status).replace("bg-", ""),
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Icon name="User" size={14} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {order.customer}
                  </p>
                  <p className="text-xs text-gray-400">{order.location}</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-white">{order.date}</p>
                <p className="text-xs text-gray-400">Date</p>
              </div>

              <div className="text-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)} text-white`}
                >
                  {order.status}
                </span>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium text-white">{order.amount}</p>
                <p className="text-xs text-gray-400">Price</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;
