import React from 'react';
import Cart from '../Cart/Cart';
import '../GLOBALCSS/global.css'

const Order = () => {
    return (
        <div className='global-order'>
            <div className='order-section'>

            </div>
            <div className='card-section'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;