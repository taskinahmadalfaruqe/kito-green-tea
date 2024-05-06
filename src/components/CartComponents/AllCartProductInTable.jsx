import useLocalStorage from "../../Hooks/useLocalStorage";
import LodeTable from "./LodeTable";

const AllCartProductInTable = () => {
  const cartData = useLocalStorage();
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
            //   <tr key={index} className="border border-Primary_Color">
            //     <td className="border border-Primary_Color px-4 py-2">
            //       {item.id}
            //     </td>
            //     <td className="border border-Primary_Color px-4 py-2">
            //       {item.productName}
            //     </td>
            //     <td className="border border-Primary_Color px-4 py-2">
            //       {item.totalOrderItems}
            //     </td>
            //     <td className="border border-Primary_Color px-4 py-2">
            //       {item.discountPrice}
            //     </td>
            //     <td className="border border-Primary_Color px-4 py-2">
            //       {item.totalOrderItems * item.discountPrice}
            //     </td>
            //   </tr>
                <LodeTable key={index} item={item}></LodeTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCartProductInTable;
