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

  const {
    image,
    discountPrice,
    productCategory,
    productDetails,
    productName,
    regularPrice,
  } = findData;

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
            <CommonButton ButtonName="Value"></CommonButton>
            <CommonButton ButtonName="Order Now"></CommonButton>
            <CommonButton ButtonName="Add To Cart"></CommonButton>
          </div>
        </div>
      </div>
      <div>Review Section</div>
    </div>
  );
};

export default SingleProductWithDetails;
