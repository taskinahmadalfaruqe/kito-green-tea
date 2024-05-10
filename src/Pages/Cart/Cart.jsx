import { useEffect, useState } from "react";
import AllCartProductInTable from "../../components/CartComponents/AllCartProductInTable";
import useLocalStorage from "../../Hooks/useLocalStorage";
import CommonButton from "../../shared/CommonButton";

const Cart = () => {
  const cartData = useLocalStorage();
  let [subGrandTotal, setSubGrandTotal] = useState(0);
  const subGrandTotalNumber = parseFloat(subGrandTotal);
  useEffect(() => {
    let total = 0;
    cartData?.forEach((item) => {
      total += item.totalOrderItems * item.discountPrice;
    });
    setSubGrandTotal(total.toFixed(2));
  }, [cartData]);
  const updateCart = () => {
    location.reload();
  };
  return (
    <div className="container py-10">
      <div className="space-y-5">
        <div>
          <AllCartProductInTable
            subGrandTotalNumber={subGrandTotalNumber}
          ></AllCartProductInTable>
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 mt-10">
        <div onClick={updateCart}>
          <CommonButton
            ButtonName="Update Cart"
            NavigateLink="/cart"
          ></CommonButton>
        </div>
        <div>
          <CommonButton
            ButtonName="Buy Now"
            NavigateLink="/checkout"
          ></CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
