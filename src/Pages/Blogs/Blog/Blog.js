import React from 'react';
import './Blog.css'

const Blog = ({ blog, index }) => {
    return (
        <div className='my-3'>
            <div className="collapse rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    {index + 1}. {blog.question}
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>
                        {blog.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;