import React from 'react';
import AboutCard from './AboutCard/AboutCard';
import { FaCamera, FaImages, FaAward } from 'react-icons/fa';

const About = () => {
    const cardDetails = [
        {
            id: 1,
            icon: <FaCamera className='text-6xl mb-6' />,
            title: 'Latest Gears and Gadgets',
            description: 'I have the latest gears and gadgets to capture the best moments of your life.'
        },
        {
            id: 2,
            icon: <FaImages className='text-6xl mb-6' />,
            title: 'Smart Photo Package',
            description: 'You will get the best photos in the best package.'
        },
        {
            id: 3,
            icon: <FaAward className='text-6xl mb-6' />,
            title: 'Best Quality',
            description: 'I will provide you the best quality photos.'
        },
    ]
    return (
        <div className='py-10 lg:w-5/6 w-full mx-auto'>
            <h1 className='text-center text-white text-4xl mb-10 font-bold'>About</h1>
            <div className='divider mb-10'>X</div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10">
                {
                    cardDetails.map(card => <AboutCard key={card.id} cardDetails={card}></AboutCard>)
                }
            </div>
        </div>
    );
};

export default About;