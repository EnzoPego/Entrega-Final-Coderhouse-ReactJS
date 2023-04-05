import './App.css'

import Contacto from './components/pages/Contacto';
import Nosotros from './components/pages/Nosotros';
import Inicio from './components/pages/Inicio';
import ProductDetail from './components/pages/ProductDetali/ProductDetail';

import Navbar from './components/NavBar/NavBar';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <div className="App">

                  <Navbar /> 

                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/Inicio' element={<Inicio />} /> 
                    <Route path='/Nosotros' element={<Nosotros />} />  
                    <Route path='/Contacto' element={<Contacto />} />
                    <Route path='/ProductDetail/:id' element={<ProductDetail />} />
                     
                </Routes>
            </div>
        </Router>
    );
};

export default App 