import React from 'react';
import CountUp from 'react-countup';
import counterImg from './counter.jpg'
import './Counter.css'

const Counter = () => {
    return (
        <div className='py-10'>
            <div className='lg:w-5/6 w-full mx-auto'>
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:w-1/2 w-full'>
                        <p className='text-2xl text-white'>
                            Photographer by born
                        </p>
                        <h2 className='text-4xl mt-4 font-extrabold text-white'>
                            My click creates history, be a part of that
                        </h2>
                        <p className='mt-5'>
                            My clicks are not just clicks, they are the moments that you will cherish for a lifetime. I am a professional photographer from New York. I have been doing this for the past 10 years. I have covered many events and have a lot of experience in this field. I am a professional photographer from New York. I have been doing this for the past 10 years. I have covered many events and have a lot of experience in this field.
                        </p>

                        <div className='lg:flex justify-between mt-5 gap-5'>
                            <div className='counter lg:w-1/3 w-full'>
                                <div className='flex items-center'>
                                    <CountUp className='text-white font-bold text-5xl' end={200} /> <span className='text-3xl font-bold text-white ml-2 inline-block'>
                                        +
                                    </span>
                                </div>
                                <p className='text-xl'>
                                    Photoshoot Per Months
                                </p>
                            </div>
                            <div className='counter lg:w-1/3 w-full'>
                                <div className='flex items-center'>
                                    <CountUp className='text-white font-bold text-5xl' end={5} /> <span className='text-3xl font-bold text-white ml-2 inline-block'>
                                        k+
                                    </span>
                                </div>
                                <p className='text-xl'>
                                    Clients Over the World
                                </p>
                            </div>
                            <div className='counter lg:w-1/3 w-full'>
                                <div className='flex items-center'>
                                    <CountUp className='text-white font-bold text-5xl' end={15} />
                                </div>
                                <p className='text-xl'>
                                    Awards & Photo Achievements
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/2 w-full'>
                        <img src={counterImg} className="lg:block lg:w-3/4 m-auto counterImg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;