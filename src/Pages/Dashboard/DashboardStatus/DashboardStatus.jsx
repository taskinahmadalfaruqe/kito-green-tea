import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../shared/SectionTitle";
import { useNavigate } from "react-router-dom";

const DashboardStatus = () => {
  const [pendingOrderData, setPendingOrderData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://e-shopbd-server.vercel.app/pendingOrderData")
      .then((res) => res.json())
      .then((data) => {
        const pendingOrders = data.filter(
          (value) => value.status === "pending"
        );
        setPendingOrderData(pendingOrders);
      })
      .catch((error) => {
        console.error("Error fetching pending orders:", error);
      });
  }, []);

  useEffect(() => {
    fetch("https://e-shopbd-server.vercel.app/pendingContact")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((value) => value.status === "pending");
        setContactData(filterData);
      });
  }, []);

  const PendingOrderLength = pendingOrderData?.length;
  const ContactDataLength = contactData?.length;
  const handelNavigate01 = () => {
    navigate("/dashboard/orderList")
  };
  const handelNavigate02 = () => {
    navigate("/dashboard/contact")
  };
  return (
    <div>
      <SectionTitle
        SectionTitleValue01="Dashboard"
        SectionTitleValue02="Status"
      ></SectionTitle>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          onClick={handelNavigate01}
          className="flex justify-center items-center flex-col gap-10 border cursor-pointer border-Primary_Color rounded-md p-5"
        >
          <div className="text-2xl font-bold uppercase">Active Order</div>
          <div className="text-5xl font-bold text-Primary_Color">
            {PendingOrderLength < 10 ? (
              <div>0{PendingOrderLength}</div>
            ) : (
              PendingOrderLength
            )}
          </div>
        </div>
        <div
          onClick={handelNavigate02}
          className="flex justify-center items-center flex-col cursor-pointer gap-10 border border-Primary_Color rounded-md p-5"
        >
          <div className="text-2xl font-bold uppercase">User Query</div>
          <div className="text-5xl font-bold text-Primary_Color">
            {ContactDataLength < 10 ? (
              <div>0{ContactDataLength}</div>
            ) : (
              ContactDataLength
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatus;
