import React from 'react';

const AboutCard = ({ cardDetails }) => {
    return (
        <div className="card py-10 px-5 h-full bg-gray-800 shadow-xl">
            <div className="card-body items-start text-start">
                {cardDetails.icon}
                <h2 className="card-title text-2xl font-bold text-white">
                    {cardDetails.title}
                </h2>
                <p>
                    {cardDetails.description}
                </p>
            </div>
        </div>
    );
};

export default AboutCard;