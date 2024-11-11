import React from 'react';
import CartProductsItem from '../CartProductsItem/CartProductsItem';
import styles from './CartProducts.module.css';
import { IProduct } from '../../models/IProcuct';


const CartProducts: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<IProduct[]>([
    {
      id: 1,
      image: "/images/product-test.jpeg",
      title: "Decorative forged bridge",
      discont_price: 500,
      price: 1000,
      description: "test",
      quantity: 1,
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 1
    },
    {
      id: 2,
      image: "/images/product-test.jpeg",
      title: "Flower basket",
      discont_price: 100,
      price: 150,
      description: "test",
      quantity: 1,
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 1
    },
    {
      id: 3,
      image: "/images/product-test.jpeg",
      title: "Aquarium lock",
      discont_price: 150,
      price: 200,
      description: "test",
      quantity: 1,
      createdAt: "2022-10-02T14:43:29.000Z",
      updatedAt: "2022-10-02T14:43:29.000Z",
      categoryId: 1
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  return (
    <section className={styles.CartProducts}>
      {cartItems.map(item => (
        <CartProductsItem
          product = {item}
          quantity={ item.quantity ? item.quantity : 1 }
          onQuantityChange = {(newQuantity:number) => handleQuantityChange(item.id, newQuantity)}
        />
      ))}
    </section>
  );
};

export default CartProducts;