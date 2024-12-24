import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card w-72 h-auto rounded-3xl">
            <img  src={imageUrl} alt={title} className="card-image rounded-t-3xl w-72" />
            <div className="w-fit-content flex flex-col justify-center  items-center p-7">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <button className='w-fit flex justify-center p-1 mt-2 bg-black text-fuchsia-50'>SHOP NOW</button>
            </div>
        </div>
    );
};

export default Card;

