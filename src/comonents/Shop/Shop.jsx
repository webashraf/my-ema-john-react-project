import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Product from "../Products/Product";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import '../GLOBALCSS/global.css'

const Shop = () => {

const loaderShop = useLoaderData();

  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(pd => pd.id === product.id);
    
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else{
      exists.quantity = exists.quantity + 1;
      const remmainig = cart.filter(pd => pd.id !== product.id);
      newCart = [...remmainig, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };



useEffect( () =>{
  const storedProduct = getShoppingCart();
  // console.log(storedProduct
  //   );
  const savedCart = [];
  for(const id in storedProduct){
    // console.log(id);
    const addedProduct = products.find(product => product.id === id);
    // console.log(addedProduct);
    if(addedProduct){
      const quantity = storedProduct[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  setCart(savedCart);


}, [products])

  return (
    <div className="global-order">
      {/* Product section */}
      <div className="product grid grid-cols-4 gap-7">
        {products.map((p) => (
          <Product
            key={p.id}
            products={p}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>


{/**************************** Order Summery Sectionj **************************/}
      <div className="order-summery">
        <Cart cart={cart} />
      </div>
{/*  */}
    </div>
  );
};

export default Shop;
