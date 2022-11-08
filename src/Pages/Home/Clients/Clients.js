import React from 'react';
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'
import six from './6.png'
import seven from './7.png'
import eight from './8.png'
import './Clients.module.css'

const Clients = () => {
    return (
        <div className='py-10'>
            <div className='lg:w-5/6 w-full mx-auto py-10'>
                <h2 className='text-white text-4xl font-bold text-center'>
                    My Clients
                </h2>

                <table className='table w-full text-center mt-8 bg-white clientTable'>
                    <tr>
                        <td className='p-4 w-1/4'>
                            <img src={one} className='block mx-auto p-3' alt="" />
                        </td>
                        <td className='p-4 w-1/4'>
                            <img src={two} className='block mx-auto p-3' alt="" />
                        </td>
                        <td className='p-4 w-1/4'>
                            <img src={three} className='block mx-auto p-3' alt="" />
                        </td>
                        <td className='p-4 w-1/4'>
                            <img src={four} className='block mx-auto p-3' alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td className='p-4 w-1/4'>
                            <img src={five} className='block mx-auto p-3' alt="" />
                        </td>
                        <td className='p-4 w-1/4'>
                            <img src={six} className='block mx-auto p-3' alt="" />
                        </td>
                        <td className='p-4 w-1/4'>
                            <img src={seven} className='block mx-auto p-3' alt="" />
                        </td>
                        <td className='p-4 w-1/4'>
                            <img src={eight} className='block mx-auto p-3' alt="" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Clients;