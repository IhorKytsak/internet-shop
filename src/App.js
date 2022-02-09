import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import AboutItem from './components/AboutItem/AboutItem';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <ScrollToTop>
      <Header />
      <Routes>
        <Route path='/internet-shop' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:name' element={<AboutItem />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
