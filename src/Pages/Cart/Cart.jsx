import { useEffect } from "react";
import AllCartProductInTable from "../../components/CartComponents/AllCartProductInTable";

const Cart = () => {
  useEffect(() => {}, []);
  const updateCart = () => {
    location.reload();
  };
  return (
    <div className="container py-10">
      <div>
        <div>
          <AllCartProductInTable></AllCartProductInTable>
        </div>
        <div>checkout details</div>
        <button onClick={updateCart}>Update Cart</button>
      </div>
    </div>
  );
};

export default Cart;
