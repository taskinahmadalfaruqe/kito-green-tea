import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import useLocalStorage from "../../Hooks/useLocalStorage";

const LodeTable = ({ item }) => {
  const lodeCartData = useLocalStorage();
  const { id, productName, totalOrderItems, discountPrice } = item;

  const handelDelete = (id) => {
    const data = [];
    lodeCartData?.map((value) => {
      if (value.id != id) {
        data.push(value);
      }
    });
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
