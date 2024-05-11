// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import SectionTitle from "../../../shared/SectionTitle";
import CommonButton from "../../../shared/CommonButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [regularPrice, SetRegularPrice] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [image, setImageLink] = useState("");
  const addProductData = {
    productName,
    productCategory,
    regularPrice,
    productDetails,
    discountPrice,
    image,
  };

  const handelAddProduct = (product) => {
    if (
      productName.length == 0 ||
      productCategory.length == 0 ||
      regularPrice.length == 0 ||
      productDetails.length == 0 ||
      discountPrice.length == 0 ||
      image.length == 0
    ) {
      toast.error("Enter Information Properly", {
        position: "top-center",
        autoClose: 15000,
        theme: "colored",
      });
    } else {
      fetch("https://e-shopbd-server.vercel.app/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const ID = data.result.insertedId;
          if (data.result.acknowledged) {
            toast.success(`Successfully Product Add. insertID:${ID}`, {
              position: "top-center",
              autoClose: 15000,
              theme: "colored",
            });
            setTimeout(() => {
              navigate("/dashboard");
              location.reload();
            }, 15000);
          }
        });
    }
  };
  return (
    <div className="flex justify-between gap-10 items-start container my-5">
      <div className="min-w-full">
        <SectionTitle
          SectionTitleValue01="Add"
          SectionTitleValue02="Product"
          SectionDescription=""
        ></SectionTitle>
        <form className="w-full space-y-5">
          <div className="md:flex gap-6">
            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Product Name
              </legend>
              <input
                type="text"
                name="productName"
                required
                placeholder="Enter Product Name:"
                onChange={(e) => setProductName(e.target.value)}
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>

            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Product Category
              </legend>
              <input
                type="text"
                name="productCategory"
                onChange={(e) => setProductCategory(e.target.value)}
                required
                placeholder="Enter product Category:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>
          </div>
          <div className="md:flex gap-6">
            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Regular Price
              </legend>
              <input
                type="number"
                name="regularPrice"
                required
                onChange={(e) => SetRegularPrice(e.target.value)}
                placeholder="Enter regular Price:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>

            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Discount Price
              </legend>
              <input
                type="number"
                name="discountPrice"
                required
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="Enter Discount Price:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>
          </div>
          <div className="md:flex gap-6">
            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Product Image
              </legend>
              <input
                type="text"
                name="imageLink"
                onChange={(e) => setImageLink(e.target.value)}
                required
                placeholder="Enter Your Product Image link:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>
          </div>
          <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
            <legend className="px-5 text-Primary_Color font-semibold">
              Product Details
            </legend>
            <textarea
              rows="4"
              cols="50"
              name="productDetails"
              onChange={(e) => setProductDetails(e.target.value)}
              placeholder="Enter Product Details:"
              className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
            />
          </fieldset>

          <div
            className="text-center"
            onClick={() => handelAddProduct(addProductData)}
          >
            <CommonButton
              ButtonName="Add Product"
            ></CommonButton>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
