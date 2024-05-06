import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

const LodeTable = ({ item }) => {
  const { id, productName, totalOrderItems, discountPrice } = item;
  const handelDelete = (id) => {
    console.log(id);
  };
  const subtotal = (totalOrderItems * discountPrice).toFixed(2);

  return (
    <tr className="py-5">
      <td className="border border-Primary_Color">
        <button>
          <MdDelete
            onClick={() => handelDelete(id)}
            className="text-Yellow_Color text-2xl font-bold"
          ></MdDelete>
        </button>
      </td>
      <td className="border border-Primary_Color">{productName}</td>
      <td className="border border-Primary_Color">{totalOrderItems}</td>
      <td className="border border-Primary_Color">{discountPrice}</td>
      <td className="border border-Primary_Color">{subtotal}</td>
    </tr>
  );
};

LodeTable.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LodeTable;
