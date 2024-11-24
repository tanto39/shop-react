import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categories";
import productsSlice from "./slices/products";
import productSlice from "./slices/product";
import categorySlice from "./slices/category";
import filterSlice from "./slices/filter";
import sortSlice from "./slices/sort";
import cartSlice from "./slices/cart";
import messageSlice from "./slices/message";
import discountSlice from "./slices/discount";

const rootReducer = combineReducers({
  categories: categoriesSlice,
  products: productsSlice,
  category: categorySlice,
  product: productSlice,
  filter: filterSlice,
  sort: sortSlice,
  cart: cartSlice,
  message: messageSlice,
  discount: discountSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: {} } }),
});

export default store;
