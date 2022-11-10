import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utils/Context/UserContext';

const Login = () => {

    const { signIn, error, setError, popUpSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from?.pathname || '/profile'

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        signIn(email, password)
            .then(
                result => {
                    const user = result.user;

                    const currentUser = {
                        email: user.email
                    }

                    console.log(currentUser)

                    // get jwt token
                    fetch('http://localhost:5000/jwt', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            localStorage.setItem('token', data.token)
                            navigate(from, { replace: true })
                        })


                    // navigate(from, { replace: true })
                }
            )
            .catch(
                err => {
                    setError(err.message)
                }
            )

    }



    const handleGoogleSignIn = () => {
        popUpSignIn().then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
            // setLoading(false)
        })
    }

    return (
        <div>
            <div className='lg:w-1/3 w-full mx-auto py-10'>
                <Helmet>
                    <title>PicMan-Login</title>
                </Helmet>


                <div className='card shadow-lg bg-gray-800'>
                    <div className='card-body'>
                        <h2 className='text-white text-4xl font-bold text-center'>
                            Login
                        </h2>
                        <div className='divider'>X</div>
                        <form className='mt-4' onSubmit={handleSubmit}>
                            <div className='flex flex-col my-4'>
                                <label className='text-white text-xl font-bold' htmlFor="name">Email</label>
                                <input className='py-3 px-4 mt-2 rounded-lg' type="email" placeholder='Enter Your Email Here' name="email" id="name" />
                            </div>

                            <div className='flex flex-col my-4'>
                                <label className='text-white text-xl font-bold' htmlFor="name">Password</label>
                                <input className='py-3 px-4 mt-2 rounded-lg' type="password" placeholder='Enter Your Password Here' name="password" id="password" />
                            </div>
                            <div className='my-4 text-center'>
                                {error && <p className='text-red-500'>{error}</p>}
                            </div>
                            <div className='flex flex-col mt-6'>
                                <input className='btn btn-primary' type="submit" value='Login' name="register" id="register" />
                            </div>
                        </form>


                        <div className='divider'>or</div>
                        <p className='text-center'>
                            No Account Yet? <Link to='/register' className='text-blue-500'>Register Now</Link>
                        </p>
                        <div className='divider'></div>
                        <p className='text-center'>
                            <button className='btn btn-info' onClick={handleGoogleSignIn}>
                                Login With Google
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;