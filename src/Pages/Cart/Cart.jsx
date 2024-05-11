import { useEffect, useState } from "react";
import AllCartProductInTable from "../../components/CartComponents/AllCartProductInTable";
import useLocalStorage from "../../Hooks/useLocalStorage";
import CommonButton from "../../shared/CommonButton";

const Cart = () => {
  // fetch local storage data
  const cartData = useLocalStorage();

  // set total amount
  let [subGrandTotal, setSubGrandTotal] = useState(0);
  const subGrandTotalNumber = parseFloat(subGrandTotal);
  useEffect(() => {
    let total = 0;
    cartData?.forEach((item) => {
      total += item.totalOrderItems * item.discountPrice;
    });
    setSubGrandTotal(total.toFixed(2));
  }, [cartData]);

  return (
    <div className="container py-10">
      <div className="space-y-5">
        <div>
          <AllCartProductInTable
            subGrandTotalNumber={subGrandTotalNumber}
          ></AllCartProductInTable>
        </div>
      </div>

      <div className="flex justify-end items-center gap-10 mt-10">
        {cartData?.length > 0 ? (
          <CommonButton
            ButtonName="Buy Now"
            NavigateLink="/checkout"
          ></CommonButton>
        ) : (
          <CommonButton
            ButtonName="Add Product"
            NavigateLink="/products"
          ></CommonButton>
        )}
      </div>
    </div>
  );
};

export default Cart;
