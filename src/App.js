import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css'
import { CartProvider } from './components/context/CartContext';

// Pages
import Home from './components/pages/Home';
import ProductDetail from './components/pages/ProductDetali/ProductDetail';
import ProductCategory from './components/pages/ProductCategory';
import Cart from './components/pages/Cart';
import PayOrder from './components/pages/PayOrder';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

    return (
        <Router>
            <CartProvider>
                <div className="App">
                    
                    <Navbar />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/ProductCategory/:category' element={<ProductCategory />} />
                        <Route path='/ProductDetail/:id' element={<ProductDetail />} />
                        <Route path='/Cart' element={<Cart />} />
                        <Route path='/PayOrder' element={<PayOrder />} />
                    </Routes>
                    <Footer/>

                </div>
            </CartProvider>
        </Router>
    );
};

export default App 