import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Header = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const interval = setInterval(() => {
            slider.slickNext();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slides = [
        {
            id: 1,
            image:
                'https://i.ibb.co/QbBKLtz/front-view-kid-playing-with-ecological-toys-23-2149884344.jpg',
            alt: 'Item 1',
        },
        {
            id: 2,
            image:
                'https://i.ibb.co/N7FkQhX/low-angle-siblings-floor-playing-with-toys-23-2148355145.jpg',
            alt: 'Item 2',
        },
        {
            id: 3,
            image:
                'https://i.ibb.co/6NjqzVm/green-easter-car-with-blue-egg-23-2149301293.jpg',
            alt: 'Item 3',
        },
        {
            id: 4,
            image:
                'https://i.ibb.co/1ZbC0RL/travel-elements-composition-with-letters-23-2147981842.jpg',
            alt: 'Item 4',
        },
    ];

    return (
        <div>
            <Slider {...settings} ref={sliderRef} className="carousel w-full">
                {slides.map((slide) => (
                    <div key={slide.id} className="carousel-item w-full">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={slide.image}
                                className="w-full rounded-lg transition duration-300 transform hover:scale-105 px-10"
                                style={{ height: '550px' }}
                                alt={slide.alt}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Header;
