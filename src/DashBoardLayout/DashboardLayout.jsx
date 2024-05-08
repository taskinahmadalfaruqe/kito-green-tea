
// eslint-disable-next-line no-unused-vars
import React from 'react';
// import logoImg from "../assets/eshopbdlogo.png"
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaCartShopping, FaProductHunt } from 'react-icons/fa6';
import { IoIosContacts } from 'react-icons/io';
import { MdProductionQuantityLimits } from 'react-icons/md';

const DashboardLayout = () => {
    return (
        <div>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-72 min-h-screen py-10 bg-Primary_Color">
                    <div className="flex mx-10 gap-0 my-10">
                    {/* <img src={logoImg} className="h-8 w-9" alt="" /> */}
                    <Link to={"/"}>
                    <h2 className="text-xl font-bold text-white mx-8 w-[180px] h-[10px]">E-Shop BD</h2>
                    </Link>
                    </div>

                    <ul className="menu p-4 text-white font-semibold">


                        {
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome className='w-7 h-7'></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/orderList">
                                        <FaCartShopping className='w-7 h-7' />
                                        Order List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addproduct">
                                        <MdProductionQuantityLimits className='w-7 h-7' />
                                        Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/updateproduct">
                                        <FaProductHunt className='w-7 h-7' />
                                        Update Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/contact">
                                        <IoIosContacts className='w-7 h-7' />
                                        Contact
                                    </NavLink>
                                </li>
                            </>
                        }


                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome className='w-7 h-7'></FaHome>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* dashboard content */}
                < div className="flex-1 p-8" >
                    <Outlet></Outlet>
                </div >
            </div >
        </div>
    );
};

export default DashboardLayout;