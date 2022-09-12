import React from 'react';
import mobile from '../../../images/mobile.jpg';
import laptop from '../../../images/laptop.jpg';
import tv from '../../../images/tv.jpg';
const Cart = (props) => {
  const {cart}=props;
  
  let total=0;
  let shipping=0;
  let quantity=0;
  for(const product of cart){
    quantity=quantity+product.quantity;
    total=total+product.price*product.quantity;
    shipping=shipping+product.shipping;
  }
  const tax=total*0.1;
  const grandTotal=total+shipping+tax;
    return (
        <div>
              {/* Carusel */}
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 col-sm-12 mt-5">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={mobile} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={laptop} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={tv} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
        </div>
                </div>
                <div className="col-lg-4 mt-5">
                    <div className="bg-warning h-100">
                    <div className='p-5'>
                    <h1>Order Summary</h1>
                    <p>Selected Items: <span className='fs-6 fw-bold'>{quantity}</span> </p>
                    <p>Total Price:<span className='fs-6 fw-bold'>${total}</span> </p>
                    <p>Total Shipping Charge:<span className='fs-6 fw-bold'>${shipping}</span></p>
                    <p>Tax:<span className='fs-6 fw-bold'> ${tax.toFixed(2)}</span></p>
                    <p>Grand Total:<span className='fs-5 fw-bold'>${grandTotal}</span> </p>
                    {props.children}
                    </div>
                    </div>
                   
                </div>
            </div>   
        </div>
        </div>
    );
};

export default Cart;