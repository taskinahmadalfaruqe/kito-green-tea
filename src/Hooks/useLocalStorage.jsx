import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items"));
    setCartData(data);
  }, []);
  return cartData;
};

export default useLocalStorage;
