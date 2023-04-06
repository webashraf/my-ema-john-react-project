import React from 'react';
import Cart from '../Cart/Cart';
import '../GLOBALCSS/global.css'
import { useLoaderData } from 'react-router-dom';
import Rivew from '../Rivew/Rivew';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='global-order'>
            <div className='order-section'>
                    {
                        cart.map(product => <Rivew key={product.id} products={product}></Rivew>)
                    }
                </div>

            <div className='card-section'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;