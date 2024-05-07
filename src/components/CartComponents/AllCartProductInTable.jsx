import useLocalStorage from "../../Hooks/useLocalStorage";
import LodeTable from "./LodeTable";
import PropTypes from "prop-types";

const AllCartProductInTable = ({ subGrandTotalNumber }) => {
  const cartData = useLocalStorage();
  const length = cartData?.length || 0;
  return (
    <div className="overflow-x-auto">
      <div className="">
        <table className="w-full border-collapse border text-center ">
          <thead>
            <tr className="border border-Primary_Color">
              <th className="border border-Primary_Color px-4 py-2">Action</th>
              <th className="border border-Primary_Color px-4 py-2">
                Product Name
              </th>
              <th className="border border-Primary_Color px-4 py-2">
                Quantity
              </th>
              <th className="border border-Primary_Color px-4 py-2">Price </th>
              <th className="border border-Primary_Color px-4 py-2">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((item, index) => (
              <LodeTable key={index} item={item}></LodeTable>
            ))}
            <tr className="border border-Primary_Color">
              <td colSpan={4} className="border border-Primary_Color">
                Sub Grand Total:
              </td>
              <td className="border border-Primary_Color">{subGrandTotalNumber}</td>
            </tr>
          </tbody>
        </table>
        <div className=" text-center font-bold mt-10 text-3xl">
          {length <= 0 ? "No Data Found" : ""}
        </div>
      </div>
    </div>
  );
};
AllCartProductInTable.propTypes = {
  subGrandTotalNumber: PropTypes.number,
};
export default AllCartProductInTable;
