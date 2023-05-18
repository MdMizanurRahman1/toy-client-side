import React, { useState } from 'react';

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        'https://i.ibb.co/HT8RVgJ/red-fiat-500e-is-black-background-1340-37121.jpg',
        'https://i.ibb.co/H29Kxz2/yellow-car-with-number-70-side-1340-23401.jpg',
        'https://i.ibb.co/c6pdTsG/red-black-supercar-with-word-supercar-side-1340-23413.jpg',
        'https://i.ibb.co/NYHCrm1/fast-car-concept-illustration-114360-3352.jpg',
        'https://i.ibb.co/VLMwNKT/blue-sports-car-blue-background-vector-53876-64362.jpg',
        'https://i.ibb.co/SsjhBbv/blue-sports-car-isolated-white-vector-53876-67354.jpg',
        'https://i.ibb.co/0QnHJ61/green-car-with-word-ford-front-1340-23250.jpg',
        'https://i.ibb.co/Y7cZ7gG/closeup-shot-white-car-dark-background-181624-20300.jpg'
    ];

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='mb-12'>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Gallery</h2>
            </div>
            <div className="grid grid-cols-4 justify-center px-10" style={{ gap: '1rem' }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`card w-72 bg-base-100 shadow-xl transform transition-all duration-300 ${index === currentSlide ? 'scale-105' : 'scale-100'
                            }`}
                        onMouseEnter={() => handleSlideChange(index)}
                        onMouseLeave={() => handleSlideChange(currentSlide)}
                    >
                        <figure className="overflow-hidden">
                            <img
                                src={image}
                                className="rounded-xl object-cover transition-all duration-300 transform hover:scale-105 hover:rotate-3"
                                alt={`Image ${index + 1}`}
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
