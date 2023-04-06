import React from 'react';
// import Rivew from './Rivew';

const Rivew = ({products}) => {
    console.log(products);
    return (
        <div className='flex gap-5 border border-2 items-center mt-3'>
            <div><img className='w-28' src={products.img} alt="" /></div>
            <div>
                <h3>{products.name}</h3>
                <h5>Price : {products.price}</h5>
                <h5>Shipping Charge: {products.shipping}</h5>
            </div>
            <div className='ml-auto pr-4'><h1>Delelte</h1></div>
        </div>
    );
};

export default Rivew;