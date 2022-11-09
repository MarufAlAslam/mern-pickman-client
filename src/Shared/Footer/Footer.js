import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerLogo from './footer-logo.png'

const Footer = () => {
    return (
        <div className='bg-white pt-16 pb-6'>
            <div className='lg:w-5/6 w-full mx-auto'>
                <div className='lg:flex block justify-between'>
                    <div className='lg:w-1/3 w-full'>
                        <img src={footerLogo} alt="" />

                        <p className='mt-6'>
                            Photography is the story I fail to put into words. PicMan will help you tell your story. Feel Free to contact picman to see the amazing clicks of mine which will enlarge your smiley face.
                        </p>
                    </div>

                    <div className='lg:w-1/3 w-full lg:text-center mt-5 lg:mt-0 lg:pl-10 pl-0'>
                        <h2 className='text-2xl font-bold text-gray-800'>
                            Useful Links
                        </h2>

                        <ul className='mt-5'>
                            <li className='py-1'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='py-1'>
                                <Link to='/'>Services</Link>
                            </li>
                            <li className='py-1'>
                                <Link to='/'>Blogs</Link>
                            </li>
                            <li className='py-1'>
                                <Link to='/'>Login</Link>
                            </li>
                            <li className='py-1'>
                                <Link to='/'>Register</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='lg:w-1/3 w-full mt-5 lg:mt-0 lg:text-end'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-5'>
                            Follow on:
                        </h2>
                        <a href="https://www.facebook.com" className='flex lg:justify-end items-center py-2' target="blank">
                            <FaFacebook className='mr-2' /> Facebook
                        </a>
                        <a href="https://www.twitter.com" className='flex lg:justify-end items-center py-2' target="blank">
                            <FaTwitter className='mr-2' /> Twitter
                        </a>
                        <a href="https://www.linkedin.com" className='flex lg:justify-end items-center py-2' target="blank">
                            <FaLinkedin className='mr-2' /> Linkedin
                        </a>
                        <a href="https://www.instagram.com" className='flex lg:justify-end items-center py-2' target="blank">
                            <FaInstagram className='mr-2' /> Instagram
                        </a>
                    </div>
                </div>

                <div className='divider'></div>
                <div className='mt-5'>
                    <p className='text-center text-gray-500'>
                        © 2022 PicMan. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;