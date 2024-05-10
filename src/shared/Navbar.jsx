import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/eshopbdlogo.png";

const Navbar = () => {
  const localStorageCard = JSON.parse(localStorage.getItem("items"));
  const TotalCardItems = localStorageCard ? localStorageCard.length : 0;

  const NavItems = (
    <div className="flex flex-col gap-1 lg:flex-row justify-start lg:justify-center lg:items-center font-semibold  uppercase text-base">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/products"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        Products
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        About US
      </NavLink>

      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        Contact US
      </NavLink>

      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        Dashboard
      </NavLink>

    </div>
  );
  
  return (
    <div>
      <div className=" bg-Primary_Color">
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
              <div className="flex justify-start items-center md:gap-2 text-base lg:text-2xl  text-White_Color">
                <img
                  className="hidden md:flex w-16 h-12 rounded-2xl"
                  src={logo}
                  alt="Logo"
                />
                <span>E Shop BD</span>
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
            <p className="h-7 w-7 rounded-full p-1 bg-Yellow_Color flex justify-center items-center font-Roboto  text-White_Color absolute -top-2 -right-2 text-xl">
              {TotalCardItems}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
