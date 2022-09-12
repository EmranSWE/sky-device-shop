import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Products/Product';
import './Shop.css'
const Shop = () => {
    //Use Custom Hooks
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
 
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
            <Cart cart={cart}>
                <Link to='/orders'><button className='border-0 bg-primary rounded fw-bold text-white'>Review Items <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button></Link>
            </Cart>
        <div className="container">
        <div className='row'> 
                        {
                products.map(product=><Product 
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