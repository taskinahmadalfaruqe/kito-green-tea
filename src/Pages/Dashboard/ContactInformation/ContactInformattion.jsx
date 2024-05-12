import { useEffect, useState } from "react";
import LodeContactTable from "./LodeContactTable";
import SectionTitle from "../../../shared/SectionTitle";

const ContactInformattion = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    fetch("https://e-shopbd-server.vercel.app/pendingContact")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((value) => value.status === "pending");
        setContactData(filterData);
      });
  }, []);

  return (
    <div className="container">
      <SectionTitle
        SectionTitleValue01="Pending"
        SectionTitleValue02="Query"
      />
      <div className="overflow-x-auto">
        {contactData.length > 0 ? (
          <table className="w-full table-auto">
            <thead className="text-left ">
              <tr className="uppercase text-center">
                <th className="border border-Primary_Color px-2 sm:px-4 py-2">
                  NO
                </th>
                <th className="border border-Primary_Color px-2 sm:px-4 py-2">
                  Action
                </th>
                <th className="border border-Primary_Color px-2 sm:px-4 py-2">
                  Name
                </th>
                <th className="border border-Primary_Color px-2 sm:px-4 py-2">
                  Email
                </th>
                <th className="border border-Primary_Color px-2 sm:px-4 py-2">
                  Phone Number
                </th>
                <th className="border border-Primary_Color px-2 sm:px-4 py-2">
                  Subject
                </th>
                <th className="border border-Primary_Color px-2 sm:px-4 py-2">
                  Comments
                </th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((SingleContactData, index) => (
                <LodeContactTable
                  key={index}
                  No={index + 1}
                  SingleContactData={SingleContactData}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="uppercase text-3xl font-semibold"> No data Found</div>
        )}
      </div>
    </div>
  );
};

export default ContactInformattion;
