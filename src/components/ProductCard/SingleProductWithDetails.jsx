import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CommonButton from "../../shared/CommonButton";

const SingleProductWithDetails = () => {
  const { id } = useParams();
  const loadSingleProduct = useLoaderData();
  const [findData, setFindData] = useState({});

  useEffect(() => {
    const filterData = loadSingleProduct.find((val) => val.id == id);
    if (filterData) {
      setFindData(filterData);
    }
  }, [id, loadSingleProduct]);

  //Object destructure for find all value;
  const {
    image,
    discountPrice,
    productCategory,
    productDetails,
    productName,
    regularPrice,
  } = findData;

  // declare a useState function to manage total number of items
  const [totalOrderItems, setTotalOrderItems] = useState(1);
  const IncreaseCartItem = () => {
    if (totalOrderItems < 10) {
      setTotalOrderItems((prevItems) => prevItems + 1);
    }
  };
  const DecreaseCartItem = () => {
    if (totalOrderItems > 1) {
      setTotalOrderItems((prevItems) => prevItems - 1);
    }
  };

  const dataForCart = {
    totalOrderItems,
    id,
    image,
    discountPrice,
    productCategory,
    productDetails,
    productName,
    regularPrice,
  };

  // set add t cart data in local storage
  const AddToCart = (singleProduct) => {
    location.reload();
    const addCardInStorage = [];
    const localStorageCard = JSON.parse(localStorage.getItem("items"));
    const query = localStorageCard.findIndex(
      (value) => value.id === singleProduct.id
    );
    if (!localStorageCard) {
      addCardInStorage.push(singleProduct);
      localStorage.setItem("items", JSON.stringify(addCardInStorage));
    } else {
      if (query !== -1) {
        if (localStorageCard[query].totalOrderItems + totalOrderItems > 10) {
          alert("Your Cart Is Already Reach Max Limit Of This Product");
        } else {
          localStorageCard[query].totalOrderItems += totalOrderItems;
          localStorage.setItem("items", JSON.stringify(localStorageCard));
        }
      } else {
        addCardInStorage.push(...localStorageCard, singleProduct);
        localStorage.setItem("items", JSON.stringify(addCardInStorage));
      }
    }
  };

  return (
    <div className="container py-5">
      <div className="flex gap-5 w-[100%]">
        <div className="min-h-96 p-5 rounded-md flex items-center justify-center min-w-[40%]">
          <img src={image} alt="ImageProduct" />
        </div>
        <div className="min-w-[60%] rounded-md p-5 space-y-10">
          <div className="font-semibold text-3xl">{productName}</div>
          <div className="font-semibold">Category: {productCategory}</div>
          <div className="flex justify-between items-center text-xl font-semibold">
            <div className="flex justify-start items-center">
              Regular Price:
              <span className="line-through text-Yellow_Color px-2">
                {regularPrice}
              </span>
              BDT
            </div>
            <div>
              Discount Price:
              <span className="text-Primary_Color px-2"> {discountPrice}</span>
              BDT
            </div>
          </div>
          <div>
            <div className="font-semibold text-2xl mb-2">Product Details:</div>
            <div>{productDetails}</div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="flex border rounded-md justify-center items-center border-Primary_Color text-Primary_Color font-bold h-fit">
              <div
                className="border-r border-Primary_Color pr-2 cursor-pointer p-3"
                onClick={DecreaseCartItem}
              >
                -
              </div>
              <div className="px-3">{totalOrderItems}</div>
              <div
                className="border-l border-Primary_Color pl-2 cursor-pointer p-3"
                onClick={IncreaseCartItem}
              >
                +
              </div>
            </div>
            <CommonButton
              ButtonName="Order Now"
              NavigateLink="/contact"
            ></CommonButton>
            <div onClick={() => AddToCart(dataForCart)}>
              <CommonButton
                ButtonName="Add To Cart"
                NavigateLink="/cart"
              ></CommonButton>
            </div>
          </div>
        </div>
      </div>
      <div>Review Section</div>
    </div>
  );
};

export default SingleProductWithDetails;
