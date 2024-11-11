import React from 'react';
import HeadDiscount from '../../HeadDiscount/HeadDiscount';
import HomeCategories from '../../HomeCategories/HomeCategories';
import DiscountForm from '../../DiscountForm/DiscountForm';
import Sale from '../../Sale/Sale';


const Home: React.FC = () => {
  
  return (
    <main>
      <HeadDiscount />
      <HomeCategories />
      <DiscountForm />
      <Sale />
    </main>
  );
};

export default Home;