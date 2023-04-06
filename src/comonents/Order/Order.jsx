import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import '../GLOBALCSS/global.css'
import { Link, useLoaderData } from 'react-router-dom';
import Rivew from '../Rivew/Rivew';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { faPager, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    const handleClearBtn = () => {
        setCart([]); 
        deleteShoppingCart();
    }

    return (
        <div className='global-order'>
            <div className='order-section'>
                    {
                        cart.map(product => <Rivew key={product.id} products={product} handleDeleteBtn={handleDeleteBtn}></Rivew>)
                    }
                </div>

            <div className='card-section'>
                <Cart cart={cart} handleClearBtn={handleClearBtn}>
<Link to={'/checkout'}>
<button
          onClick={handleClearBtn}
          className="btn gap-2 bg-orange-00 border-red-500 btn-block mb-3"
        >
                Proceed Checkout
          <FontAwesomeIcon className="text-lg" icon={faPaperPlane} />
        </button>
</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;