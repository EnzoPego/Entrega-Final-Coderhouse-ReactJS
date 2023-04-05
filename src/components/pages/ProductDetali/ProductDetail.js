import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductList from '../../ProductList/ProductList';



const ProductDetail = () => {

    const [product, setProducts] = useState({})

    let { id } = useParams()

    console.log(product)

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => setProducts(res.data))
    }, [id])

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1>ProductDetail</h1> 
        <ProductList data={product}/>
    </div>
    
  )
}

export default ProductDetail  