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
    const [pageCount,setPageCount]=useState(0);
    const [page,setPage]=useState(0);
    const [size,setSize]=useState(10);
    const [products,setProducts] =useState([]);
    const [cart,setCart]=useCart(products);

    useEffect(()=>{
        fetch(`https://peaceful-sands-05755.herokuapp.com/product?page=${page}&size=${size}`)
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[page,size]);

    useEffect(()=>{
        fetch('https://peaceful-sands-05755.herokuapp.com/productCount')
        .then(res => res.json())
        .then(data => {
            const count =data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages)
        })
    },[])
 
    const handleAddToCart=(product)=>{
       let newCart=[]
        const exist=cart.find(product=>product._id===product);
        if(!exist){
            product.quantity=1;
            newCart=[...cart,product];
        }
        else{
            const rest=cart.filter(product =>product._id !== product._id);
            exist.quantity=exist.quantity+1;
            newCart=[...rest,exist]
        }
        
        setCart(newCart);
        addToDb(product._id)
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
                    key={product._id} 
                    product={product}
                    handleAddToCart={handleAddToCart}></Product>)
                        }
                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()].map(number => <button className={page === number ? 'selected':''} onClick = {()=> setPage(number)}>{number+1}</button>)
                        }
                        <select onChange={e => setSize(e.target.value)} >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
        </div>   
        </div>
        </div>
    );
};

export default Shop;