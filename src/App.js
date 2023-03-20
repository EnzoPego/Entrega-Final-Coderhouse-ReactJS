
import React, { Component } from "react";
import './App.css'

import Navbar from './components/NavBar/NavBar'
import Header from "./components/Header/Header";
import CardProduct from "./components/CardProduct/CardProduct";



class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
                <div className="ProductSection">
                    <CardProduct
                        name="Producto 1"
                        info="Descripción_1"
                        img="https://http2.mlstatic.com/D_NQ_NP_905374-MLU54103550016_032023-O.webp"
                    />
                    <CardProduct
                        name="Producto 2"
                        info="Descripción_2"
                        img="https://http2.mlstatic.com/D_NQ_NP_864844-MLM51559388062_092022-O.webp"
                    />
                    <CardProduct
                        name="Producto 3"
                        info="Descripción_3"
                        img="https://http2.mlstatic.com/D_NQ_NP_657865-MLA52594819321_112022-O.webp"
                    />
                </div>
            </div>

        )
    }
}

export default App 