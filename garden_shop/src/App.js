import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import ProductsCategoryPage from './pages/ProductsCategoryPage';
import SaleProductsPage from './pages/SaleProductsPage'
import ProductDescrPage from './pages/ProductDescrPage'
import CartPage from './pages/CartPage'
import Layout from './components/Layout';
import { localStoreCard } from './store/reducers/cart';


function App() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem("cart"));
    if (cartLocal && cartLocal.length) 
    dispatch(localStoreCard(cartLocal));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='categories' element={<CategoriesPage/>} />
          <Route path='categories/:id' element={<ProductsCategoryPage/>} />
          <Route path='products' element={<SaleProductsPage/>} />
          <Route path='products/:id' element={<ProductDescrPage/>} />
          <Route path='cart' element={<CartPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
