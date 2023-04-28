import Navbar from './components/NavBar/NavBar';
import './App.css'


// Pages
import Inicio from './components/pages/Inicio';
import ProductDetail from './components/pages/ProductDetali/ProductDetail';
import ProductCategory from './components/pages/ProductCategory';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

    return (
        <Router>
            <div className="App">

                <Navbar />

                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/ProductCategory/:category' element={<ProductCategory />} />
                    <Route path='/ProductDetail/:id' element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App 