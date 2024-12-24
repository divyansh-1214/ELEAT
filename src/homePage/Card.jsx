import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image w-72" />
            <div className="card-content bg-neutral-300 w-32">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;