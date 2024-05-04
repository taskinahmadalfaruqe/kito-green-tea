import PropTypes from "prop-types";
import CommonButton from "../../shared/CommonButton";
import { Link } from "react-router-dom";

const SingleProductCard = ({ singleProduct }) => {
  const {
    id,
    image,
    discountPrice,
    productCategory,
    productDetails,
    productName,
    regularPrice,
  } = singleProduct;

  return (
    <div className=" shadow-xl rounded-lg p-8 space-y-3 flex justify-between flex-col border-2">
      <div className="flex justify-center items-center max-h-80">
        <img src={image} alt="Image" />
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
      <div className="flex justify-between items-center">
        <CommonButton ButtonName="Add To Cart"></CommonButton>
        <CommonButton ButtonName="See Details"></CommonButton>
        <Link to={`/products/${id}`}>ID</Link>
      </div>
    </div>
  );
};

SingleProductCard.propTypes = {
  singleProduct: PropTypes.object.isRequired,
};

export default SingleProductCard;
