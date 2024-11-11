import React from 'react';
import HeadBlock from '../../HeadBlock/HeadBlock';
import styles from './Cart.module.css'
import CardProducts from '../../CartProducts/CartProducts';
import OrderDetails from '../../OrderDetails/OrderDetails';


const Cart: React.FC = () => {
  
  return (
    <main className='section'>
      <HeadBlock title="Shopping cart" link="/" linkText="Back to the store" />
      <div className={styles.shoppingCart}>
        <CardProducts />
        <OrderDetails itemCount={4} totalAmount={1000}/>
      </div>
    </main>
  );
};

export default Cart;