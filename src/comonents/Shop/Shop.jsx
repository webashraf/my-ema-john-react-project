import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {

  const [product, setProduct] = useState([]);
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

  let total = 0;
  let shipping = 0;
  let tax = 0;
  for (const item of cart) {
    total = total + item.price;
    shipping = shipping + item.shipping;
    tax = (total * 0.1).toFixed(2);
  }


  useEffect(() =>{
    const storedProduct = getShoppingCart();
    for (const item in storedProduct) {
      const addedProduct = product.find(goodsItem => goodsItem.id === item)
      const quantityy = storedProduct[item];
      // console.log(addedProduct.quantity);
      // addedProduct.quantity = quantityy;
      console.log(addedProduct);
      }
  } , [product])

  return (
    <div className="shop-parents max-h-[1200px]">
      <div className="product grid grid-cols-4 gap-7">
        {product.map((p) => (
          <Product
            key={p.id}
            products={p}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="order-summery">
        <div className=" bg-orange-200 p-5 text-black sticky top-2 p-7 rounded-md">
          <h3 className="text-black text-3xl">Order Summary</h3>
          <h4 className="text-lg mb-2">Selected Items: {cart.length}</h4>
          <h4 className="text-lg mb-2">Total Price: ${total}</h4>
          <h4 className="text-lg mb-2">Total Shipping Charge: ${shipping}</h4>
          <h4 className="text-lg mb-2">Tax: ${tax}</h4>
          <h4 className="text-xl mb-2">
            Grand Total: ${total + shipping + tax}
          </h4>
          <button className="btn gap-2 bg-red-600 border-red-500 btn-block mb-3">
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="btn gap-2 bg-orange-400 border-orange-400 btn-block">
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
