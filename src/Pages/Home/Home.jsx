import React from 'react';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl text-center py-10">This is Home page</h1>
            <Banner/>
            <Products/>
        </div>
    );
};

export default Home;