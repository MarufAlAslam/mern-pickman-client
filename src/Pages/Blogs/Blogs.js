import React from 'react';
import { Helmet } from 'react-helmet';
import Blog from './Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            question: 'Difference between SQL and NoSQL',
            answer: 'SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. NoSQL databases are often used to store large amounts of data, such as user information, and are often used in conjunction with Big Data applications. NoSQL databases are often used to store large amounts of data, such as user information, and are often used in conjunction with Big Data applications.',
        },
        {
            id: 2,
            question: 'What is JWT, and how does it work?',
            answer: 'JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS). JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.',
        },
        {
            id: 3,
            question: 'What is the difference between javascript and NodeJS?',
            answer: 'JavaScript is a scripting language that runs in the browser. Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library.',
        },
        {
            id: 4,
            question: 'How does NodeJS handle multiple requests at the same time?',
            answer: 'Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.',
        },
    ]
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