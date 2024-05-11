import { useEffect, useState } from "react";
import LodeOrderTable from "./LodeOderTabel";


const OrderList = () => {
  const [pendingOrderData, setPendingOrderData] = useState([]);

  useEffect(() => {
    fetch("https://e-shopbd-server.vercel.app/pendingOrderData")
      .then((res) => res.json())
      .then((data) => {
        // Filter out pending orders
        const pendingOrders = data.filter(
          (value) => value.status === "pending"
        );
        setPendingOrderData(pendingOrders);
      })
      .catch((error) => {
        console.error("Error fetching pending orders:", error);
      });
  }, []);

  const length = pendingOrderData.length;

  return (
    <div className="">
      <div>
        {length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between items-start">
            {pendingOrderData.map((item, index) => (
              <LodeOrderTable item={item} key={index}></LodeOrderTable>
            ))}
          </div>
        ) : (
          <div className="text-center font-bold mt-10 text-3xl">
            No Data Found
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
