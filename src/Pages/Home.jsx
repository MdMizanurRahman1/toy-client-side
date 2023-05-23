import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import IconSection from './IconSection';
import NewArrivals from './NewArrivals';
import TabCategory from './TabCategory';
import useTitle from '../hooks/useTitle';

// this is home tab

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <TabCategory></TabCategory>
            <NewArrivals></NewArrivals>
            <IconSection></IconSection>
        </div>
    );
};

export default Home;