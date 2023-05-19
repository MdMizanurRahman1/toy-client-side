import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import IconSection from './IconSection';
import NewArrivals from './NewArrivals';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <NewArrivals></NewArrivals>
            <IconSection></IconSection>
        </div>
    );
};

export default Home;