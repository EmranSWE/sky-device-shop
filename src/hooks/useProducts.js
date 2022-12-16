import { useEffect } from "react";
import { useState } from "react"

const useProducts=() =>{
    const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://sea-turtle-app-yah4l.ondigitalocean.app/product')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[]);
    return [products,setProducts];
};

export default useProducts;