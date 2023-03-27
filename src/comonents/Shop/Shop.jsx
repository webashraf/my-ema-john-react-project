import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
          const [product, setProduct] = useState([]);
          useEffect( () =>{
                    fetch('products.json')
                    .then(res => res.json())
                    .then(data => setProduct(data))
          } ,[])

          const [cart, setCart] = useState([]);
          const handleAddToCart = (product) =>{
                    const newCart =[...cart, product];
                    setCart(newCart);
          }

          return (
                    <div className='shop-parents'>
                            <div className="product grid grid-cols-4 gap-7">
                              {
                              product.map(p => <Product 
                                        key={p.id}
                                        products={p}
                                        handleAddToCart={handleAddToCart}
                              >

                              </Product>)
                              }
                            </div>
                            <div className="order-summary bg-orange-200 p-5 text-black">
                              <h3 className='text-black text-3xl'>Order Summary</h3>
                              <h4 className='text-lg mb-2'>Selected Items: {cart.length}</h4>
                              <h4 className='text-lg mb-2'>Total Price: $1140</h4>
                              <h4 className='text-lg mb-2'>Total Shipping Charge: $5</h4>
                              <h4 className='text-lg mb-2'>Tax: $114</h4>
                              <h4 className='text-3xl mb-2'>Grand Total: $1559</h4>
                              <button class="btn gap-2 bg-red-600 border-red-500 btn-block mb-3">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
<button class="btn gap-2 bg-orange-400 border-orange-400 btn-block">
  Button
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
                              </div>  
                    </div>
          );
};

export default Shop;