import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='blog-holder'>
            <div className='breadcrumb py-24'>
                <div className='text-center'>
                    <h2 className='lg:text-7xl text-3xl text-white font-bold'>
                        Blogs
                    </h2>
                </div>
            </div>
            <div className='py-16 lg:w-5/6 w-full mx-auto'>
                <Helmet>
                    <title>PicMan-Blogs</title>
                </Helmet>



                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }

            </div>
        </div>
    );
};

export default Blogs;