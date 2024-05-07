import { useEffect, useState } from "react";
import AllCartProductInTable from "../../components/CartComponents/AllCartProductInTable";
import useLocalStorage from "../../Hooks/useLocalStorage";

const Cart = () => {
  const cartData = useLocalStorage();
  let [subGrandTotal, setSubGrandTotal] = useState(0);
  const subGrandTotalNumber = parseFloat(subGrandTotal);
  useEffect(() => {
    let total = 0;
    cartData.forEach((item) => {
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
          <AllCartProductInTable subGrandTotalNumber={subGrandTotalNumber}></AllCartProductInTable>
        </div>
        <div>checkout details</div>
        <button onClick={updateCart}>Update Cart</button>
      </div>
    </div>
  );
};

export default Cart;
