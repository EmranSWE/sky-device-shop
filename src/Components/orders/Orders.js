import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Shop/Cart/Cart';

const Orders = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart();
    const handleRemoveProduct=product =>{
        const rest=cart.filter(pd =>pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }
    const navigate=useNavigate();
    return (
        <div>
           <Cart cart={cart}><button onClick={()=>navigate('/shipment')} className='border-0 bg-primary rounded fw-bold text-white'>Proceed To Shipment! <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button></Cart>
           <div className="container">
            <div className="row">
            {
            cart.map(product =><ReviewItems
            key={product._id}
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