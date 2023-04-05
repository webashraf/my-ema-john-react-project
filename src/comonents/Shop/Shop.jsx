import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Product from "../Products/Product";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";
import Ordersummery from "../Ordersummery/Ordersummery";

const Shop = () => {

const loaderShop = useLoaderData();
console.log(loaderShop);

  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  // console.log(cart);
  let totalQty = 0;
  let total = 0;
  let shipping = 0;
  let tax = 0;
  for (const item of cart) {
    item.quantity = item.quantity || 1;
    total = total + item.price * item.quantity;
    shipping = shipping + item.shipping;
    tax = (total * 0.1).toFixed(2);
    totalQty = totalQty + item.quantity;

  }


useEffect( () =>{
  const storedProduct = getShoppingCart();
  const savedCart = [];
  for(const id in storedProduct){
    // console.log(id);
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
      const quantity = storedProduct[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  setCart(savedCart);


}, [products])

  return (
    <div className="shop-parents gap-5 max-h-[1200px] mt-8 max-w-[1280px] w-full mx-auto">
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
        <Ordersummery cart={cart} />
      </div>
{/*  */}
    </div>
  );
};

export default Shop;
