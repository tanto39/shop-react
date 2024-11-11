
import { Navigate, RouteObject } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Categories from '../components/pages/Categories/Categories';
import Category from '../components/pages/Category/Category';
import Products from '../components/pages/Products/Products';
import Product from '../components/pages/Product/Product';
import Sales from '../components/pages/Sales/Sales';
import Page404 from '../components/pages/Page404/Page404';
import Cart from '../components/pages/Cart/Cart';


export const routes: RouteObject[] = [
  { path: "/", element: <Home/> },
  { path: '/categories', element: <Categories /> },
  { path: '/category/:id', element: <Category /> },
  { path: '/products', element: <Products /> },
  { path: '/product/:id', element: <Product /> },
  { path: '/sales', element: <Sales /> },
  { path: '/cart', element: <Cart /> },
  { path: '/404', element: <Page404 /> },
  { path: "*", element: <Navigate replace to="/404" /> },
];