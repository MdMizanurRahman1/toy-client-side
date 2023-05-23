import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


// another extra card section for home page


const NewArrivals = () => {

    //AOs animation

    useEffect(() => {
        Aos.init();
    }, [])



    return (
        <div>
            <h2 className="text-center text-2xl border-l">New Arrivals</h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <div className="mx-auto card bg-base-100 shadow-xl max-w-sm" data-aos="slide-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/F5vPPs8/david-maltais-BCKg-Fz-Jbwz4-unsplash.jpg"
                            alt="Cars"
                            className="rounded-xl h-52 hover:scale-105 transition-transform duration-300"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ferrari 2030!</h2>
                        <p>If the brand is Ferrari, what do you think?</p>
                        <div className="card-actions">
                            <button className="btn btn-error hover:bg-error-light hover:text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto card bg-base-100 shadow-xl hover:shadow-2xl max-w-sm" data-aos="slide-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/ydxSBCW/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg"
                            alt="Cars"
                            className="rounded-xl h-52 hover:scale-105 transition-transform duration-300"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ferrari Ultimate!</h2>
                        <p>If the brand is Ferrari, no need to rethink?</p>
                        <div className="card-actions">
                            <button className="btn btn-error hover:bg-error-light hover:text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto card bg-base-100 shadow-xl hover:shadow-2xl max-w-sm" data-aos="slide-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/kBpx15n/m8head-jda8-U4-Xmw-Jc-unsplash.jpg"
                            alt="Cars"
                            className="rounded-xl h-52 hover:scale-105 transition-transform duration-300"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Lamborghini Hike!</h2>
                        <p>The name itself a brand, if you need to choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-error hover:bg-error-light hover:text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
