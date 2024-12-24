import React from 'react';
import './App.css';
import { useState } from 'react';
const Nav = () => {

                const images = [
                    'hi',
                    'hey',
                    'hello',
                ];

                const [currentImageIndex, setCurrentImageIndex] = useState(0);

                const nextImage = () => {
                    setCurrentImageIndex((currentImageIndex + 1) % images.length);
                };

                const prevImage = () => {
                    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
                };

                // return (
                //     <div className='image-slider'>
                //         <button onClick={prevImage}>Previous</button>
                //         <p>{images[currentImageIndex]}</p>
                //         <button onClick={nextImage}>Next</button>
                //     </div>
                // );
    return (
        <div className='cantainer h-16 ' style={{backgroundColor: "rgba(255, 255, 255)"}}>
            <div>
                <p></p>
            </div>
            <div className='1st-half ml-40 inline-flex justify-start '>
                <button className='mt-3 text-lg font-semibold'>SHOP </button>
                <a href="" className='ml-16 mt-3 text-lg font-semibold'>BUILD A BUNDLE</a>
                <a href="" className='ml-72 mt-3'><svg width="138" height="24" viewBox="0 0 138 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="desktop-header__logo h-6 w-auto">
                    <path d="M28.8931 24H52.4222L52.3463 17.3379L36.7099 19.0506L36.7343 0H28.8118L28.8931 24Z" class="header-svg-path" fill="currentColor"></path>
                    <path d="M119.787 24H127.712L127.65 5.92886H137.28L137.261 0H110.113L110.132 5.92886H119.727L119.787 24Z" class="header-svg-path" fill="currentColor"></path>
                    <path d="M103.302 0H94.431L82.4537 24H90.6527L92.447 20.1286L104.527 18.4405L107.137 24H115.439L103.302 0ZM94.9677 14.6594L98.8354 6.24624L102.283 13.6334L94.9677 14.6594Z" class="header-svg-path" fill="currentColor"></path>
                    <path d="M81.1689 18.3858H62.9386L62.9278 15.7647L78.3067 13.617L78.2904 8.50068L62.9115 10.6484L62.8953 5.61423H81.1689V0H55.1245L55.1652 11.7319L52.2623 12.1368L52.2813 17.2531L55.1814 16.8482L55.2058 24H81.1689V18.3858Z" class="header-svg-path" fill="currentColor"></path>
                    <path d="M7.71656 15.7647L23.0223 13.6252V8.50616L7.69759 10.6484L7.68133 5.61423H26.0824V0H0V24H26.0824V18.3858H7.72469L7.71656 15.7647Z" class="header-svg-path" fill="currentColor"></path>
                </svg></a>
                <button className='ml-32 text-lg font-semibold mt-3'>ABOUT</button>
                <a href="" className='ml-16 mt-3 text-lg font-semibold'>RFERE A FRIEND</a>
                <a href="" className='ml-14 mt-4'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.00011" cy="5.44444" r="4.44444" class="header-svg-stroke" stroke="#2C3A45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                    <path d="M1 17L1.27913 16.4417C2.74237 13.5152 5.73345 11.6667 9.00535 11.6667V11.6667C12.3321 11.6667 15.3632 13.5771 16.7984 16.5783L17 17" class="header-svg-stroke" stroke="#2C3A45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></a>
                <button class="desktop-header__menu-button ml-16 mt-3">
                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="desktop-header__icon desktop-header__icon--empty inline-block pointer-events-none">
                        <path d="M10.269 22C11.1158 22 11.8023 21.3195 11.8023 20.48C11.8023 19.6405 11.1158 18.96 10.269 18.96C9.42215 18.96 8.73566 19.6405 8.73566 20.48C8.73566 21.3195 9.42215 22 10.269 22Z" class="header-svg-path" fill="currentColor"></path>
                        <path d="M17.9356 22C18.7825 22 19.4689 21.3195 19.4689 20.48C19.4689 19.6405 18.7825 18.96 17.9356 18.96C17.0888 18.96 16.4023 19.6405 16.4023 20.48C16.4023 21.3195 17.0888 22 17.9356 22Z" class="header-svg-path" fill="currentColor"></path>
                        <path d="M22.7995 7.75L23.7577 8.03621C23.8481 7.73352 23.7902 7.40592 23.6015 7.15259C23.4127 6.89926 23.1154 6.75 22.7995 6.75V7.75ZM20.2121 16.4121L21.1703 16.6983L20.2121 16.4121ZM18.7043 17.5V18.5V17.5ZM9.3087 17.5L9.3087 18.5H9.3087V17.5ZM7.80085 16.4121L6.84268 16.6983L7.80085 16.4121ZM4.25583 4.54396L5.214 4.25775V4.25775L4.25583 4.54396ZM3.50191 4L3.50191 3H3.50191V4ZM1.85309 3C1.3008 3 0.853088 3.44772 0.853088 4C0.853088 4.55228 1.3008 5 1.85309 5V3ZM5.21348 8.75H22.7995V6.75H5.21348V8.75ZM21.8413 7.46379L19.254 16.1259L21.1703 16.6983L23.7577 8.03621L21.8413 7.46379ZM19.254 16.1259C19.2252 16.2223 19.1617 16.3157 19.0635 16.3866L20.2338 18.0085C20.6797 17.6867 21.0119 17.2287 21.1703 16.6983L19.254 16.1259ZM19.0635 16.3866C18.9647 16.4579 18.8386 16.5 18.7043 16.5V18.5C19.2516 18.5 19.7885 18.3297 20.2338 18.0085L19.0635 16.3866ZM18.7043 16.5H9.3087V18.5H18.7043V16.5ZM9.3087 16.5C9.17441 16.5 9.04831 16.4579 8.94945 16.3866L7.77924 18.0085C8.2245 18.3297 8.76142 18.5 9.3087 18.5L9.3087 16.5ZM8.94945 16.3866C8.85125 16.3157 8.78782 16.2223 8.75902 16.1259L6.84268 16.6983C7.00113 17.2287 7.33331 17.6867 7.77924 18.0085L8.94945 16.3866ZM8.75902 16.1259L5.214 4.25775L3.29766 4.83017L6.84268 16.6983L8.75902 16.1259ZM5.214 4.25775C5.10236 3.88402 4.86908 3.56387 4.55919 3.34028L3.38897 4.96219C3.35114 4.9349 3.31568 4.89048 3.29766 4.83017L5.214 4.25775ZM4.55919 3.34028C4.24995 3.11717 3.87879 3 3.50191 3L3.50191 5C3.46581 5 3.42615 4.98901 3.38897 4.96219L4.55919 3.34028ZM3.50191 3H1.85309V5H3.50191V3Z" class="header-svg-path" fill="currentColor"></path>
                    </svg>

                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="desktop-header__icon desktop-header__icon--full inline-block pointer-events-none hidden">
                        <path d="M10.9043 22C11.7158 22 12.3737 21.3195 12.3737 20.48C12.3737 19.6405 11.7158 18.96 10.9043 18.96C10.0927 18.96 9.43481 19.6405 9.43481 20.48C9.43481 21.3195 10.0927 22 10.9043 22Z" class="header-svg-path" fill="#2C3A45"></path>
                        <path d="M18.0014 22C18.8482 22 19.5347 21.3195 19.5347 20.48C19.5347 19.6405 18.8482 18.96 18.0014 18.96C17.1545 18.96 16.468 19.6405 16.468 20.48C16.468 21.3195 17.1545 22 18.0014 22Z" class="header-svg-path" fill="#2C3A45"></path>
                        <path d="M22.8654 7.75L23.8235 8.03621C23.914 7.73352 23.856 7.40592 23.6673 7.15259C23.4786 6.89926 23.1813 6.75 22.8654 6.75V7.75ZM20.278 16.4121L21.2362 16.6983L20.278 16.4121ZM18.7702 17.5V18.5V17.5ZM9.37455 17.5L9.37455 18.5H9.37455V17.5ZM7.86671 16.4121L6.90854 16.6983L7.86671 16.4121ZM4.32169 4.54396L5.27985 4.25775V4.25775L4.32169 4.54396ZM3.56776 4L3.56776 3H3.56776V4ZM1.91895 3C1.36666 3 0.918945 3.44772 0.918945 4C0.918945 4.55228 1.36666 5 1.91895 5V3ZM5.27934 8.75H22.8654V6.75H5.27934V8.75ZM21.9072 7.46379L19.3198 16.1259L21.2362 16.6983L23.8235 8.03621L21.9072 7.46379ZM19.3198 16.1259C19.291 16.2223 19.2276 16.3157 19.1294 16.3866L20.2996 18.0085C20.7455 17.6867 21.0777 17.2287 21.2362 16.6983L19.3198 16.1259ZM19.1294 16.3866C19.0305 16.4579 18.9044 16.5 18.7702 16.5V18.5C19.3174 18.5 19.8543 18.3297 20.2996 18.0085L19.1294 16.3866ZM18.7702 16.5H9.37455V18.5H18.7702V16.5ZM9.37455 16.5C9.24026 16.5 9.11417 16.4579 9.01531 16.3866L7.84509 18.0085C8.29036 18.3297 8.82728 18.5 9.37455 18.5L9.37455 16.5ZM9.01531 16.3866C8.91711 16.3157 8.85367 16.2223 8.82488 16.1259L6.90854 16.6983C7.06699 17.2287 7.39917 17.6867 7.84509 18.0085L9.01531 16.3866ZM8.82488 16.1259L5.27985 4.25775L3.36352 4.83017L6.90854 16.6983L8.82488 16.1259ZM5.27985 4.25775C5.16822 3.88402 4.93494 3.56387 4.62505 3.34028L3.45483 4.96219C3.417 4.9349 3.38153 4.89048 3.36352 4.83017L5.27985 4.25775ZM4.62505 3.34028C4.31581 3.11717 3.94465 3 3.56776 3L3.56776 5C3.53166 5 3.49201 4.98901 3.45483 4.96219L4.62505 3.34028ZM3.56776 3H1.91895V5H3.56776V3Z" class="header-svg-path" fill="#2C3A45"></path>
                        <circle cx="18" cy="6" r="5.5" fill="#6BE3ED" stroke="white"></circle>
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default Nav;