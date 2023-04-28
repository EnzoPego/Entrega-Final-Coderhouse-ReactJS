import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material';

//Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';


const CardList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const q = query(collection(db, "products"));
        const getProducts = async () => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });

            setProducts(docs);

            setTimeout(() => {
                setLoading(false);

            }, 1800);
        };

        getProducts();

    }, []);


    return (

        <div className="ProductSection">

            {loading ? (<CircularProgress />) : (products.map((product) => {

                return (
                    <div key={product.id}>

                        <Link to={`/ProductDetail/${product.id}`} style={{ textDecoration: "none" }}>
                            <Card data={product} />
                        </Link>

                    </div>
                );
            }))}
         
        </div>
    );
      
};

export default CardList;
