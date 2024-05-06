import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    
  }, []);
  const updateCart = () => {
    location.reload();
  };
  return (
    <div className="container py-10">
      <div>
        <div>items</div>
        <div>checkout details</div>
        <button onClick={updateCart}>Update Cart</button>
      </div>
    </div>
  );
};

export default Cart;
