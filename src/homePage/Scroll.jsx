import React from 'react';
import './Scrool.css';
const Scroll = () => {
    return (
        <div>
            <div className='cantainer w-full h-28 bg-black'>
                <p className='text-center justify-center text-white p-2 text-xs '>AS SEEN IN</p>
                <ul className="marquee__content">
                    <div className=" marquee__item">
                        <img src="./1.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./2.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./3.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./4.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./5.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./1.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./2.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./3.png" alt="" loading="lazy" />
                    </div>
                </ul>
                {/* <ul aria-hidden="true" className="marquee__content">
                    <div className=" marquee__item">
                        <img src="./1.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./2.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./3.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./4.png" alt="" loading="lazy" />
                    </div>
                    <div className=" marquee__item">
                        <img src="./5.png" alt="" loading="lazy" />
                    </div>
                </ul> */}
            </div>
        </div>
    );
};

export default Scroll;