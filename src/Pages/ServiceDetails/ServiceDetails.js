import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Utils/Context/UserContext';
import Broken from '../Broken/Broken';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const details = useLoaderData()

    console.log(details.length)

    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('https://picman-server.vercel.app/reviews')
    //         .then(res => res.json())
    //         .then(data =>
    //             setReviews(data)
    //         )
    // }, [])


    // console.log(details)
    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>
                    PicMan-Service Details
                </title>
            </Helmet>

            {
                details.length <= 0 ? <Broken></Broken> :
                    (
                        <div>
                            <h2 className='text-4xl text-white font-bold mb-8 text-center'>Service Details</h2>
                            <div className='lg:flex block justify-between'>
                                <div className='lg:w-2/3 w-full lg:pr-10'>
                                    {details.map(
                                        detail => {
                                            return (
                                                <div key={detail._id} className='mb-8'>
                                                    <h3 className='text-2xl text-white font-bold mb-4'>{detail.title}</h3>
                                                    <img src={detail.imageUrl} className='mb-6 w-full' alt="" />
                                                    <p className='text-white text-justify'>{detail.description}</p>
                                                    <div className='divider'></div>
                                                    <p className='text-2xl font-bold'>
                                                        <span className='text-white font-bold'>Price: </span>
                                                        <span className='text-info'>${detail.price}</span>
                                                    </p>
                                                    <p>
                                                        <span className='text-white font-bold'>Course By: </span>
                                                        <span className='text-info'>{detail.addedBy}</span>
                                                    </p>

                                                    <div className='divider'></div>
                                                    {
                                                        user ? (
                                                            <Link to={`/add-review/${detail._id}`} className='btn btn-primary mt-4 w-full'>Add a Review</Link>
                                                        ) :
                                                            (
                                                                <Link to={`/add-review/${detail._id}`} className='btn w-full btn-primary mt-4'>Please Login to Add a Review</Link>
                                                            )
                                                    }
                                                </div>
                                            )
                                        }
                                    )}
                                </div>


                                <div className='lg:w-1/3 w-full lg:pl-10'>
                                    <h2 className='text-2xl text-white font-bold mb-8'>Overall Reviews</h2>
                                    <Reviews></Reviews>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default ServiceDetails;