import React from 'react'

import CardProduct from "../CardProduct/CardProduct";
import img from '../CardProduct/CardImg/Img'
import Header from "../Header/Header";

const Inicio = () => {
    
    return (
        <div className="App">

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
    )
}


export default Inicio