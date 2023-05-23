import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';

const TabCategory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState('Racing Car');

    useEffect(() => {
        fetch('https://toy-server-site-theta.vercel.app/toys')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    const handleTabClick = (subCategory) => {
        setSelectedSubCategory(subCategory);
    };

    const filteredCategories = categories.filter(
        (category) => category.subCategory === selectedSubCategory
    );

    return (
        <div className='text-center'>
            <Tabs>
                <div className='text-black bold text-center text-2xl mt-24 mb-8'>
                    <h2>
                        SHOP BY <span> CATEGORY</span>
                    </h2>
                </div>

                <TabList>
                    <Tab onClick={() => handleTabClick('Racing Car')}>Racing Car</Tab>
                    <Tab onClick={() => handleTabClick('Regular Car')}>Regular Car</Tab>
                    <Tab onClick={() => handleTabClick('Mini Police Car')}>Mini Police Car</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center">
                        {filteredCategories.map((category) => (
                            <Category key={category._id} category={category} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center">
                        {filteredCategories.map((category) => (
                            <Category key={category._id} category={category} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center">
                        {filteredCategories.map((category) => (
                            <Category key={category._id} category={category} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCategory;
