import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItems = (props) => {
    const {handleRemoveProduct,product}=props;
    const {name,picture,price,shipping,quantity} =product;
    return (
        <div className='col-lg-12 w-75 border rounded p-2 mx-auto m-2 d-flex '>
            <div className='w-25'>
           <img className=' img-thumbnail rounded ' src={picture} alt="" />
           </div>
           
            <div className='d-flex  w-75 justify-content-between align-items-center'>
            <div className='ms-4'>
            <h4 className='fw-bold'> {name}</h4>
            <p>Price: <span className='text-warning fw-bold'> ${price}</span></p>
            <p>Shipping Charge: <span className='text-warning fw-bold'>${shipping}</span></p>
            <p>Quantity: <span className='text-warning fw-bold'>{quantity}</span></p>
            </div>
            <div >
                <button onClick={()=>handleRemoveProduct(product)} className='bg-warning border-white rounded-circle '>
                <FontAwesomeIcon className='fs-2' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
        </div>
    );
};

export default ReviewItems;