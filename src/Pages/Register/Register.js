import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='lg:w-1/3 w-full mx-auto py-10'>
            <Helmet>
                <title>PicMan-Register</title>
            </Helmet>


            <div className='card shadow-lg bg-gray-800'>
                <div className='card-body'>
                    <h2 className='text-white text-4xl font-bold text-center'>
                        Register
                    </h2>
                    <div className='divider'>X</div>
                    <form className='mt-4'>
                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Email</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="email" placeholder='Enter Your Email Here' name="name" id="name" />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Password</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="password" placeholder='Enter Your Password Here' name="password" id="password" />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Confirm Password</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="password" placeholder='Retype Your Password Again' name="confirmPassword" id="confirmPassword" />
                        </div>
                        <div className='flex flex-col mt-6'>
                            <input className='btn btn-primary' type="submit" value='Register' name="register" id="register" />
                        </div>
                    </form>


                    <div className='divider'>or</div>
                    <p className='text-center'>
                        Already have an account? <Link to='/login' className='text-blue-500'>Login Now</Link>
                    </p>
                    <div className='divider'></div>
                    <p className='text-center'>
                        <button className='btn btn-info'>
                            Login With Google
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;