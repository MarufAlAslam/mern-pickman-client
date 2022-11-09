/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <div className='lg:w-5/6 w-full mx-auto py-10'>
                <div className='lg:flex block justify-between items-center'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='text-3xl font-bold text-white'>
                            Contact Info.
                        </h2>
                        <table className='table mt-5 w-full text-white'>
                            <tbody>
                                <tr>
                                    <td>
                                        Address:
                                    </td>
                                    <td>
                                        New York
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Mobile:
                                    </td>
                                    <td>
                                        +1 555 555 5555
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Whatsapp:
                                    </td>
                                    <td>
                                        +1 555 555 5555
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Email:
                                    </td>
                                    <td>
                                        hello@picman.com
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='text-3xl font-bold text-white mb-4'>
                            Find By Location
                        </h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3870000000003!2d-73.9852846847395!3d40.74881797932499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903d8b8c8c3%3A0x4d7c8a4f4f4f4f4f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd" width="100%" height="300px" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;