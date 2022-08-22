import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Products/Product';
import './Shop.css'
const Shop = () => {
    const [product,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProduct(data))
    },[]);
   
    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
           const addedProduct=product.find(product=>product.id===id);
           if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct)
            console.log(addedProduct)
           }
        }
        setCart(savedCart);
    },[product]);

    const handleAddToCart=(product)=>{
       let newCart=[]
        const exist=cart.find(product=>product.id===product);
        if(!exist){
            product.quantity=1;
            newCart=[...cart,product];
        }
        else{
            const rest=cart.filter(product =>product.id !== product.id);
            exist.quantity=exist.quantity+1;
            newCart=[...rest,exist]
        }
        
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div> 
            <Cart cart={cart}></Cart>
        <div className="container">
        <div className='row'> 
                        {
                product.map(product=><Product 
                    key={product.id} 
                    product={product}
                    handleAddToCart={handleAddToCart}></Product>)
                        }
        </div>   
        </div>
        </div>
    );
};

export default Shop;