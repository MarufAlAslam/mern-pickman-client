import React from 'react';
import logo from './logo.png'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-red-700 sticky top-0 z-30'>
            <div className='lg:w-5/6 w-full mx-auto'>
                <div className="navbar bg-transparent">
                    <div className="flex-1">
                        <Link className="btn btn-ghost text-black normal-case text-xl" to='/'>
                            <img src={logo} className="logo" alt="" />
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <NavLink className="text-white lg:ml-4" to='/'>Home</NavLink>
                            </li>
                            <li tabIndex={0}>
                                <NavLink className="text-white lg:ml-4" to='/about'>About</NavLink>
                            </li>
                            <li tabIndex={0}>
                                <NavLink className="text-white lg:ml-4" to='/services'>Services</NavLink>
                            </li>
                            <li tabIndex={0}>
                                <NavLink className="text-white lg:ml-4" to='/login'>Login</NavLink>
                            </li>
                            <li tabIndex={0}>
                                <NavLink className="text-white lg:ml-4" to='/register'>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;