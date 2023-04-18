import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cart';
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { productsCategoryReducer } from './reducers/products_category';
import { productReducer } from './reducers/product_item';

const rootReducer = combineReducers ({
    categories: categoriesReducer,
    products: productsReducer,
    products_category: productsCategoryReducer,
    product_item: productReducer,
    cart: cartReducer
});

export const store = createStore (rootReducer, applyMiddleware(thunk));