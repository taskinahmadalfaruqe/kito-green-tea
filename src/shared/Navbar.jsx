import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/eshopbdlogo.png";
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, handelSignOut } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
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
            ? "bg-White_Color  p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        Contact US
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color  p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        Login
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
  const DashboardNavItems = (
    <div className="flex flex-col gap-1 lg:flex-row justify-start lg:justify-center lg:items-center font-semibold  uppercase text-base">
      <NavLink
        to={"/dashboard"}
        className="hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
      >
        <div className="flex gap-2 justify-start items-center">
          <span className="lg:hidden">
            <FaHome></FaHome>
          </span>
          <span>Admin Home</span>
        </div>
      </NavLink>
      <NavLink
        to={"/dashboard/adminHome"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        <div className="flex gap-2 justify-start items-center">
          <span className="lg:hidden">
            <CgProfile></CgProfile>
          </span>
          <span>Profile</span>
        </div>
      </NavLink>

      <NavLink
        to={"/dashboard/orderList"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        <div className="flex gap-2 justify-start items-center">
          <span className="lg:hidden">
            <FaCartShopping></FaCartShopping>
          </span>
          <span>Order</span>
        </div>
      </NavLink>

      <NavLink
        to={"/dashboard/addproduct"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        <div className="flex gap-2 justify-start items-center">
          <span className="lg:hidden">
            <MdProductionQuantityLimits></MdProductionQuantityLimits>
          </span>
          <span>Add Product</span>
        </div>
      </NavLink>

      <NavLink
        to={"/dashboard/contact"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        <div className="flex gap-2 justify-start items-center">
          <span className="lg:hidden">
            <IoIosContacts></IoIosContacts>
          </span>
          <span>User Query</span>
        </div>
      </NavLink>

      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        <div className="flex gap-2 justify-start items-center">
          <span className="lg:hidden">
            <FaHome></FaHome>
          </span>
          <span>User Home</span>
        </div>
      </NavLink>

      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-White_Color    p-1 px-3 rounded-md"
            : " hover:bg-whiteColor    hover:text-White_Color p-1 px-3 rounded-md"
        }
      >
        <div
          className="flex gap-2 justify-start items-center"
          onClick={handelSignOut}
        >
          <span className="lg:hidden">
            <IoIosLogOut></IoIosLogOut>
          </span>
          <span>Log Out</span>
        </div>
      </NavLink>
    </div>
  );
  const query = location?.pathname.includes("/dashboard");
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-Primary_Color  rounded-box w-[200px] md:w-[300px] h-screen"
              >
                {query ? DashboardNavItems : NavItems}
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
            <ul className="menu menu-horizontal px-2">
              {query ? DashboardNavItems : NavItems}
            </ul>
          </div>
          <div className="navbar-end  flex gap-5">
            <div className="relative">
              <Link to={"/cart"} className="btn px-6">
                <FaCartShopping className="text-2xl font-bold text-Yellow_Color"></FaCartShopping>
              </Link>
              <p className="h-7 w-7 rounded-full p-1 bg-Yellow_Color flex justify-center items-center font-Roboto  text-White_Color absolute -top-2 -right-2 text-xl">
                {TotalCardItems}
              </p>
            </div>
            {user ? (
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={user?.photoURL} alt="userImage" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
