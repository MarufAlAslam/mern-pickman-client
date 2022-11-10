import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Utils/Context/UserContext';
import './MyReviews.css'

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/reviews?email=${user.email}`
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [url])


    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    console.log(result)
                    const remaining = reviews.filter(review => review._id !== _id)
                    setReviews(remaining)
                }
            })
        toast.success('Review Deleted Successfully')
    }
    return (
        <div className='lg:w-5/6 mx-auto w-full py-10'>
            <Helmet>
                <title>PicMan-My Reviews</title>
            </Helmet>

            <h1 className='text-center text-3xl font-bold'>
                My Reviews
            </h1>



            {
                reviews.length <= 0 ? (
                    <div className='text-center mt-10 py-20'>
                        <h1 className='text-2xl font-bold text-white'>No reviews were added</h1>
                        <Link className='block my-4 text-blue-800' to='/services'>Visit Services and Add Some Reviews</Link>
                    </div>
                )
                    :
                    (
                        <div className='overflow-x-scroll w-full'>
                            <table className='table w-full text-center text-white border-0 reviewTable mt-10'>
                                <tbody>
                                    <tr>
                                        <td>Service ID</td>
                                        <td>Service Name</td>
                                        <td>Date</td>
                                        <td>Review</td>
                                        <td>Rating</td>
                                        <td>Edit</td>
                                        <td>Delete</td>
                                    </tr>
                                    {
                                        reviews.map(review => {
                                            return (
                                                <tr key={review._id}>
                                                    <td className='border px-4 py-2'>
                                                        <Link to={`/service/${review.serviceId}`} className='text-blue-800'>
                                                            {review.serviceId}
                                                        </Link>
                                                    </td>
                                                    <td className='border px-4 py-2'>
                                                        {review.serviceName}
                                                    </td>
                                                    <td className='border px-4 py-2'>
                                                        {review.reviewDate}
                                                    </td>
                                                    <td className='border px-4 py-2'>
                                                        {review.review}
                                                    </td>
                                                    <td className='border px-4 py-2'>
                                                        {review.rating}
                                                    </td>
                                                    <td className='border px-4 py-2'>
                                                        <Link to={`/update/${review._id}`} className='btn btn-primary'>
                                                            <FaEdit />
                                                        </Link>
                                                    </td>
                                                    <td className='border px-4 py-2'>
                                                        <button className='btn btn-error' onClick={() => { handleDelete(review._id) }}>
                                                            <FaTrash />
                                                        </button>
                                                    </td>


                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <ToastContainer />
                        </div>
                    )
            }
        </div>
    );
};

export default MyReviews;