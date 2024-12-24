import React from 'react';
import Card from './Card';
const C1 = () => {
    return (
        <div className='cantainer bg-gray-600 '>
            <h1>Get started with ELEAT</h1>
            <p>All-in-one protein breakfast to help you perform your best</p>
            <div className='card-container '>
                <Card title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./public/card12.png' />
                <Card title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./1.png' />
                <Card title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./1.png' />
                <Card title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./1.png' />
            </div>
        </div>
    );
};

export default C1;