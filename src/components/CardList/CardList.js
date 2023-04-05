
import React,{useEffect,useState} from 'react'
import ProductList from '../ProductList/ProductList';
import axios from 'axios'
import {Link} from 'react-router-dom'

const CardList = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) => setProducts(res.data))
    }, [])


    return (
 
        <div className='ProductSection'>

            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <Link to={`/ProductDetail/${product.id}`}>
                            <ProductList  data={product} />
                        </Link>    
                    </div>
                )
            })}

        </div>
 
    )
}

export default CardList 