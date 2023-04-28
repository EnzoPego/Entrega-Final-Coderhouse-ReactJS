import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from '@mui/material';
import Cards from "../Card/Card";
import Header from "../Header/Header";
import { Link } from 'react-router-dom'

// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";


const ProductCategory = () => {
  const [product, setProduct] = useState([]);
  let { category } = useParams();

  useEffect(() => {
    const q = query(collection(db, "products"), where("category", "==", category));

    const getProducts = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setProduct(docs);
    };

    getProducts(); 
  }, [category]);


  return (
    <div>
      <Header />

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} maxWidth={800} margin="auto" marginTop={3}>

        {product.map((data) => (
          <Link to={`/ProductDetail/${data.id}`} key={data.id} style={{ textDecoration: 'none' }}>
            <Cards data={data} />
          </Link>
        ))}
      </Box>
    </div>
  );

};

export default ProductCategory;