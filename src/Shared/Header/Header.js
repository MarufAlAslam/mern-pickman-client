import React, { useContext } from 'react';
import logo from './logo.png'
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utils/Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut();
        navigate('/login')
    }
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
                                user ? (
                                    <div className='flex'>
                                        <li>
                                            <NavLink className="text-white lg:ml-4" to='/profile'>Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="text-white lg:ml-4" to='/my-reviews'>My Reviews</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="text-white lg:ml-4" to='/add-service'>Add Service</NavLink>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout} className='btn btn-danger lg:ml-4 text-white'>
                                                Logout
                                            </button>
                                        </li>
                                    </div>
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