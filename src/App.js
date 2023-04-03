import './App.css'

import Contacto from './components/pages/Contacto';
import Nosotros from './components/pages/Nosotros';
import Inicio from './components/pages/Inicio';

import Navbar from './components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <div className="App">

                <Navbar />

                <Routes>
                    <Route path='/Inicio' element={<Inicio />} />
                    <Route path='/Contacto' element={<Contacto />} />
                    <Route path='/Nosotros' element={<Nosotros />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App 