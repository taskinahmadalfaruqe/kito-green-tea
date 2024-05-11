import PropTypes from "prop-types";
import CommonButton from "../../shared/CommonButton";

const SingleProductCard = ({ singleProduct }) => {
  //object destructure for lode data and show on it web page,
  const {
    _id,
    image,
    discountPrice,
    productCategory,
    productDetails,
    productName,
    regularPrice,
  } = singleProduct;

  //this data will set in local storage
  const dataForCart = {
    totalOrderItems: 1,
    _id,
    image,
    discountPrice,
    productCategory,
    productDetails,
    productName,
    regularPrice,
  };

  // make add to cart function and sate value in local storage.
  const AddToCart = (singleProduct) => {
    const addCardInStorage = [];
    const localStorageCard = JSON.parse(localStorage.getItem("items"));
    const query = localStorageCard?.findIndex(
      (value) => value._id === singleProduct._id
    );
    if (!localStorageCard) {
      addCardInStorage.push(singleProduct);
      localStorage.setItem("items", JSON.stringify(addCardInStorage));
    } else {
      if (query !== -1) {
        localStorageCard[query].totalOrderItems += 1;
        localStorage.setItem("items", JSON.stringify(localStorageCard));
      } else {
        addCardInStorage.push(...localStorageCard, singleProduct);
        localStorage.setItem("items", JSON.stringify(addCardInStorage));
      }
    }
    location.reload();
  };

  return (
    <div className=" shadow-xl rounded-lg p-5  space-y-3 flex justify-between flex-col border-2">
      <div className="flex justify-center items-center h-72 p-2">
        <img src={image} alt="Image" className="h-[280px]" />
      </div>
      <div className="font-semibold text-2xl">{productName}</div>
      <div>{productCategory}</div>
      <div className="flex justify-between items-center text-xl font-semibold">
        <div className="flex justify-start items-center">
          <span className="line-through text-Yellow_Color pr-2">
            {regularPrice}
          </span>
          BDT
        </div>
        <div>
          <span className="text-Primary_Color pr-2"> {discountPrice}</span>
          BDT
        </div>
      </div>
      <div className="h-14 overflow-hidden">
        {productDetails.length < 60
          ? productDetails
          : productDetails.slice(0, 60) + "......."}
      </div>
      <div className="flex justify-between items-center gap-5">
        <div onClick={() => AddToCart(dataForCart)} className="">
          <CommonButton
            ButtonName="Add To Cart"
            NavigateLink="/cart"
          ></CommonButton>
        </div>

        <CommonButton
          ButtonName="See Details"
          NavigateLink={`/products/${_id}`}
        ></CommonButton>
      </div>
    </div>
  );
};

SingleProductCard.propTypes = {
  singleProduct: PropTypes.object.isRequired,
};

export default SingleProductCard;
