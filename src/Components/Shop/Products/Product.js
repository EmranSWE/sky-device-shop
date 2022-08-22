import React from 'react';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Product = ({product,handleAddToCart}) => {
    const {id,price,name,stock,picture}=product;

    return (
        <div className='col-lg-4 mt-4 '>
            <div className='border m-1 '>
           <div className='h-75 w-100'>
           <img className=' img-thumbnail rounded ' src={picture} alt="" />
           </div>
         <p>Name:{name}</p>
         <div>
        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
         </div>
         <p className='fs-4 text-danger fw-bold'>${price}</p>
         <button className='border-0 w-100 rounded bg-info' onClick={()=>handleAddToCart(product)}>+ Add To Cart</button>
            </div>
           
           
        </div>
    );
};

export default Product;