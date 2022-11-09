import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Utils/Context/UserContext';

const AddService = () => {
    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const title = form.servicetitle.value
        const imageUrl = form.url.value
        const price = form.price.value
        const description = form.description.value
        const addedBy = user.email

        const services = {
            title,
            imageUrl,
            price,
            description,
            addedBy,
            rating: 0
        }

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(resp => resp.json())
            .then(data =>
                console.log(data)
            )
            .catch(err => {
                console.error(err.message)
            })
    }

    return (
        <div className='lg:w-5/6 w-full mx-auto py-10'>
            <Helmet>
                <title>PicMan-Add Service</title>
            </Helmet>
            <h1 className='text-center text-3xl text-white font-bold'>
                Add a Service
            </h1>

            <form className='mt-10 lg:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Service Title</label>
                    <input type="text" id='title' placeholder='Enter Service Title' name='servicetitle' className='p-3 mt-2 rounded-lg' />
                </div>

                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Service Image URL</label>
                    <input type="url" id='title' placeholder='Enter Image URL' name='url' className='p-3 mt-2 rounded-lg' />
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Service Price</label>
                    <input type="text" id='title' placeholder='Enter Service Price' name='price' className='p-3 mt-2 rounded-lg' />
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="title" className='text-white'>Service Description</label>
                    <textarea cols="30" className='p-3 mt-2 rounded-lg resize-none' name='description' placeholder='Enter Service Details' rows="5"></textarea>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-blue-500 text-white px-6 py-3 rounded-lg mt-4'>Publish</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;