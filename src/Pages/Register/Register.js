import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utils/Context/UserContext';

const Register = () => {
    const { createUser, updateUserName, error, setError, popUpSignIn } = useContext(AuthContext)
    // const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        // setLoading(true)
        const form = event.target
        const name = form.name.value
        const photourl = form.photourl.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        if (password === confirmPassword) {
            createUser(email, password).then(
                result => {
                    const user = result.user;
                    updateUserName(name, photourl);
                    console.log(user);
                    // setUser(user.displayName);
                    navigate('/login')
                    // setLoading(false)
                }
            )
                .catch(error => {
                    setError(error.message)
                })
        } else {
            setError('Password does not match')
        }



        console.log(form)
    }


    const handleGoogleSignIn = () => {
        popUpSignIn().then(result => {
            const user = result.user;
            console.log(user);
            navigate('/profile')
            // setLoading(false)
        })
    }
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
                    <form className='mt-4' onSubmit={handleSubmit}>
                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Name</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="text" placeholder='Enter Your Name Here' name="name" id="name" />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Photo URL</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="text" placeholder='Enter Your Photo URL' name="photourl" id="name" />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Email</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="email" placeholder='Enter Your Email Here' name="email" id="email" />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Password</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="password" placeholder='Enter Your Password Here' name="password" id="password" />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label className='text-white text-xl font-bold' htmlFor="name">Confirm Password</label>
                            <input className='py-3 px-4 mt-2 rounded-lg' type="password" placeholder='Retype Your Password Again' name="confirmPassword" id="confirmPassword" />
                        </div>

                        <div className='my-4 text-center'>
                            {error && <p className='text-red-500'>{error}</p>}
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
                        <button className='btn btn-info' onClick={handleGoogleSignIn}>
                            Login With Google
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;