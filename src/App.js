
import './App.css'

import Navbar from './components/NavBar/NavBar'
import Header from "./components/Header/Header";
import CardProduct from "./components/CardProduct/CardProduct";
import img from '../src/components/CardProduct/CardImg/Img'



const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <div className="ProductSection">
                <CardProduct
                    name="Producto 1"
                    info="Descripción_1"
                    img={img.iphone}
                />
                <CardProduct
                    name="Producto 2"
                    info="Descripción_2"
                    img={img.xiaomi}
                />
                <CardProduct
                    name="Producto 3"
                    info="Descripción_3"
                    img={img.s23} 
                />
            </div>
        </div>
    );
};


export default App 