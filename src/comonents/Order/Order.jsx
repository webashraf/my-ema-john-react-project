import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import '../GLOBALCSS/global.css'
import { useLoaderData } from 'react-router-dom';
import Rivew from '../Rivew/Rivew';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart)
    const handleDeleteBtn = id =>{
        console.log(id);
        const remmeiningProduct = cart.filter(product => product.id !== id);
        setCart(remmeiningProduct);
        removeFromDb(id)
    }

    console.log(SavedCart);
    return (
        <div className='global-order'>
            <div className='order-section'>
                    {
                        cart.map(product => <Rivew key={product.id} products={product} handleDeleteBtn={handleDeleteBtn}></Rivew>)
                    }
                </div>

            <div className='card-section'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;