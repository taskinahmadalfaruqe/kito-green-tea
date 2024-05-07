import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/eshopbdlogo.png"

const Navbar = () => {
  const localStorageCard = JSON.parse(localStorage.getItem("items"));
  const TotalCardItems = localStorageCard ? localStorageCard.length : 0;

  const NavItems = (
    <>
      <li className="font-semibold">
        <Link to="/">HOME</Link>
      </li>
      <li className="font-semibold">
        <Link to="/products">PRODUCTS</Link>
      </li>
      <li className="font-semibold">
        <Link to="/about">ABOUT US</Link>
      </li>
      <li className="font-semibold">
        <Link to="/contact">CONTACT US</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className=" bg-green-500">
        <div className="navbar container">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {NavItems}
              </ul>
            </div>
            <Link to="/">
              <div className="flex justify-start items-center gap-2 text-2xl font-bold text-White_Color">
                <img className="invisible md:visible w-16 h-12 rounded-2xl"
                  src={logo} alt="Logo" />
                  <span>E-Shop BD</span>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{NavItems}</ul>
          </div>
          <div className="navbar-end relative">
            <Link to={"/cart"} className="btn px-6">
              <FaCartShopping className="text-2xl font-bold text-Yellow_Color"></FaCartShopping>
            </Link>
            <p className="h-7 w-7 rounded-full p-1 bg-Yellow_Color flex justify-center items-center font-Roboto font-semibold text-White_Color absolute -top-2 -right-2 text-xl">
              {TotalCardItems}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
