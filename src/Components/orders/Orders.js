import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Shop/Cart/Cart';

const Orders = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    const handleRemoveProduct=product =>{
        const rest=cart.filter(pd =>pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    const navigate=useNavigate();
    return (
        <div>
           <Cart cart={cart}><button onClick={()=>navigate('/inventory')} className='border-0 bg-primary rounded fw-bold text-white'>Proceed To CheckOut! <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button></Cart>
           <div className="container">
            <div className="row">
            {
            cart.map(product =><ReviewItems
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
            >
            </ReviewItems>)
           }
            </div>
           
           </div>
        
        </div>
    );
};

export default Orders;