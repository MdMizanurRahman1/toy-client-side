import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from 'react-icons/fa';

//two-tire footer here

const Footer = () => {
    return (
        <div>
            <footer className="footer px-10 pt-5 border-b-2 bg-base-200 text-base-content border-base-300">
                <div className="items-center flex-col">
                    <div className='flex gap-5'>
                        <img className="block h-12 w-12" src="car.png" alt="Website Logo" />
                        <p className='text-2xl font-black bold'>Sports Club</p>
                    </div>
                    <p className='text-base mt-0 mb-2'>Providing reliable sports collection since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-center">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/">< FaFacebookSquare className='w-10 h-10 text-blue-600' /></a>
                        <a href="https://www.youtube.com/results?search_query=pithron">< FaYoutubeSquare className='w-10 h-10 text-red-500' /></a>
                        <a href="https://twitter.com/?lang=en">< FaTwitterSquare className='w-10 h-10 text-blue-500' /></a>
                        <a href="https://www.instagram.com/programminghero/">< FaInstagramSquare className='w-10 h-10 text-red-500' /></a>

                    </div>
                </div>
            </footer>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Address</span>
                    <p>1234 Main Street, Kupio <br /> East Finland, Finland <br /> ZIP Code-00194</p>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">Phone: +1 (234) 567-890</a>
                    <a className="link link-hover">Email: contact@example.com</a>
                </div>
                <div>
                    <span className="footer-title">Copy Right</span>
                    <a className="link link-hover">&copy; Sports Club LTD. <br /> All rights reserved.</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;