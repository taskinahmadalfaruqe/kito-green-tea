import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import useLocalStorage from "../../Hooks/useLocalStorage";

const OrderSummery = ({ SingleProducts }) => {
  const lodeCartData = useLocalStorage();

  //object Destructure
  const {
    id,
    discountPrice,
    productName,
    totalOrderItems,
  } = SingleProducts;

  //calculate total price
  const totalPrice = (totalOrderItems * discountPrice).toFixed(2);

  // delete a product
  const handelDelete = (id) => {
    const addCardInStorage = [];
    lodeCartData?.map((value) => {
      if (value.id != id) {
        addCardInStorage.push(value);
      }
    });
    localStorage.setItem("items", JSON.stringify(addCardInStorage));
    location.reload();
  };

  return (
    <div className="border border-Primary_Color p-2 mt-3 rounded-md grid grid-cols-7 justify-center items-center gap-5">
      <div
        onClick={() => handelDelete(id)}
        className="col-span-1 bg-Primary_Color rounded-md flex justify-center items-center text-White_Color hover:text-Yellow_Color cursor-pointer text-2xl py-2"
      >
        <MdDelete />
      </div>
      <div className="col-span-4">{productName}</div>
      <div className="flex border rounded-md justify-center items-center border-Primary_Color text-Primary_Color font-bold  w-full py-2">
        {totalOrderItems}
      </div>
      <div className="col-span-1">{totalPrice}</div>
    </div>
  );
};

OrderSummery.propTypes = {
  SingleProducts: PropTypes.object.isRequired,
};

export default OrderSummery;
