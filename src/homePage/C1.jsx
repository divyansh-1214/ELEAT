import React from 'react';
import Card from './Card';
const C1 = () => {
    return (
        <div className='cantainer bg-gray-600 h-full' style={{background:'#f2f0ed'}}>
            <div className='flex flex-col items-center justify-center pt-16' >
            <h1 className='text-5xl pb-6'>Get started with ELEAT</h1>
            <p className='text-base font-semibold'>All-in-one protein breakfast to help you perform your best</p>
            </div>
            <div className='card-container grid grid-cols-4 gap-0 p-16'  >
                <Card className=' items-center justify-center' title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./public/card11.png' />
                <Card title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./public/card12.png' />
                <Card title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./public/card13.png' />
                <Card title='PROTEIN CEREAL' description='250g pouches - 5 x 50g servings' imageUrl='./public/card14.png' />
            </div>
        </div>
    );
};

export default C1;