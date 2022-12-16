import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart=() =>{
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        const storedCart=getStoredCart();
        const keys =Object.keys(storedCart)
        const savedCart=[];

        fetch('https://sea-turtle-app-yah4l.ondigitalocean.app/productByKeys',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(keys)
        })
        .then(res =>res.json())
        .then(products => {
            
            for(const id in storedCart){
            const addedProduct=products.find(product =>product._id===id )
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
        })
        
    },[]);
    return [cart,setCart];
}

export default useCart;