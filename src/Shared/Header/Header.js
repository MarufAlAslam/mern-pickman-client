import React, { useContext } from 'react';
import logo from './logo.png'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Utils/Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
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
                                <NavLink className="text-white lg:ml-4" to='/services'>Services</NavLink>
                            </li>
                            <li tabIndex={0}>
                                <NavLink className="text-white lg:ml-4" to='/blogs'>Blogs</NavLink>
                            </li>

                            {
                                user?.displayName ? (
                                    <li tabIndex={0}>
                                        <button className='btn btn-ghost text-white'>
                                            {user.displayName}
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </button>
                                        <ul className="p-2 bg-base-100">
                                            <li>
                                                <NavLink className="text-black w-full btn btn-info border-0 mb-4" to='/profile'>Profile</NavLink>
                                            </li>
                                            <li>
                                                <button onClick={logOut} className='btn btn-info text-black'>
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                )
                                    :
                                    (
                                        <div className='flex'>
                                            <li tabIndex={0}>
                                                <NavLink className="text-white lg:ml-4" to='/login'>Login</NavLink>
                                            </li>
                                            <li tabIndex={0}>
                                                <NavLink className="text-white lg:ml-4" to='/register'>Register</NavLink>
                                            </li>
                                        </div>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;