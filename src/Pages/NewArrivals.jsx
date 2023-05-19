import React from 'react';

const NewArrivals = () => {
    return (
        <div>
            <h2 className='text-center text-2xl border-l'>New Arrivals</h2>
            <div className='flex gap-5 justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
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
                            <button className="btn btn-error hover:bg-error-light hover:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
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
                            <button className="btn btn-error hover:bg-error-light hover:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
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
                            <button className="btn btn-error hover:bg-error-light hover:text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
