import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoStatsChart } from 'react-icons/io5';
import { MdAccessTime } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links =(
        <>
        <li><NavLink to={"/"} className={({isActive}) =>
        ` text-2xl mr-1  ${isActive ? "bg-green-500  text-lime-50" : ""}`
        }> <FaHome /> Home</NavLink></li>
        <li><NavLink to={"/timeline"} className={({isActive}) =>
        ` text-2xl mr-1 ${isActive ? "bg-green-500  text-lime-50" : ""}`
        }> <MdAccessTime /> TimeLine</NavLink></li>     
        <li><NavLink to={"/stats"} className={({isActive}) =>
        ` text-2xl mr-1 ${isActive ? "bg-green-500  text-lime-50" : ""}`
        }> <IoStatsChart /> Stats</NavLink></li>
        </>
    );

    return (
        <div>
            <nav className="bg-base-100 shadow-lg">
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {links}

                        </ul>
                    </div>
                    <h1 className="text-2xl font-bold"><span className="font-extrabold">Keen</span>Keeper</h1>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
        
            </div>
            </nav>
        </div>
    );
};

export default Navbar;