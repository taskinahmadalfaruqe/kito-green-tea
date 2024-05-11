import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CommonButton = ({ ButtonName, NavigateLink }) => {
  return (
    <div>
      <button type="submit">
        <Link
          to={NavigateLink}
          className="relative inline-flex items-center justify-start  px-2 md:px-6 py-3 overflow-hidden font-medium transition-all bg-White_Color rounded hover:bg-White_Color group border-[1px] border-Primary_Color"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-Primary_Color absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left  transition-colors duration-400 ease-in-out group-hover:text-White_Color text-base lg:text-sm xl:text-base ">
            {ButtonName}
          </span>
        </Link>
      </button>
    </div>
  );
};

CommonButton.propTypes = {
  ButtonName: PropTypes.string.isRequired,
  NavigateLink: PropTypes.string,
};

export default CommonButton;
