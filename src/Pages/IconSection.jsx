import React from 'react';
import Marquee from 'react-fast-marquee';
import carImage1 from '../../public/car4.png';
import carImage2 from '../../public/car5.png';
import carImage3 from '../../public/car6.png';
import carImage4 from '../../public/car7.png';

const IconSection = () => {
    return (
        <div>
            <h2 className='text-center text-2xl'>Toy types</h2>
            <div className="flex justify-center">

                <style>
                    {`
        .marquee-container {
            width: 300px; 
          height: 200px; 
        }

        .marquee-image {
          width: 100px;
          height: 150px;
        }
      `}
                </style>

                <div className="marquee-container">
                    <Marquee direction="right" speed={30} delay={0}>
                        <img src={carImage1} className="marquee-image" alt="" />
                    </Marquee>
                </div>
                <div className="marquee-container">
                    <Marquee direction="right" speed={30} delay={0}>
                        <img src={carImage2} className="marquee-image" alt="" />
                    </Marquee>
                </div>
                <div className="marquee-container">
                    <Marquee direction="right" speed={30} delay={0}>
                        <img src={carImage3} className="marquee-image" alt="" />
                    </Marquee>
                </div>
                <div className="marquee-container">
                    <Marquee direction="right" speed={30} delay={0}>
                        <img src={carImage4} className="marquee-image" alt="" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default IconSection;
