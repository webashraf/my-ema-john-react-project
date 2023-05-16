import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "../GLOBALCSS/global.css";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const loaderShop = useLoaderData();
  const totalProductsLoader = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  
  
  
  
  const [products, setProduct] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/products")
  //   .then((res) => res.json())
  //   .then((data) => setProduct(data));
  // }, []);
  useEffect(() => {
    fetch(`http://localhost:4000/products?page=${currentPage}&limit=${itemsPerPage}`, {
    
    })
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [currentPage, itemsPerPage])
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd._id === product._id);
    
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remmainig = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remmainig, exists];
    }
    
    setCart(newCart);
    addToDb(product._id);
  };
  
  useEffect(() => {
    const storedProduct = getShoppingCart();
    // console.log(storedProduct
    //   );
    const savedCart = [];
    for (const id in storedProduct) {
      // console.log(id);
      const addedProduct = products.find((product) => product._id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedProduct[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  
  const handleClearBtn = () => {
    setCart([]);
    deleteShoppingCart();
  };
  
  
  // Pagination //
  
  const options = [5, 10, 15, 20];
  function handleSelectChange(event) {
      setItemsPerPage(parseInt(event.target.value));
      setCurrentPage(0);
  }

  console.log(itemsPerPage, currentPage);

  const totalProduct = totalProductsLoader.totalProduct;
  console.log(totalProductsLoader , totalProduct);
  // const itemsPerPage = 10; //TODO Shoud make it daynamic //
  const totalPages = Math.ceil(totalProduct / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  // console.log(totalProduct);






  return (
    <div className=" relative w-full max-w-[1280px] flex gap-10">
      <div className="flex flex-col justify-center items-center gap-20 pb-20 w-11/12">
        <div className="product grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((p) => (
            <Product
              key={p._id}
              products={p}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        {/* Pageination */}
        <div className="">
          <p>Current Page = {currentPage}</p>
            {
              pageNumbers.map(pageNumber => <button 
                onClick={()=> setCurrentPage(pageNumber)} className="btn border-0 bg-slate-400 rounded-sm mx-1" key={pageNumber}
              >{pageNumber}</button>)
            }


            <select value={itemsPerPage} onChange={handleSelectChange} className="btn border-0 bg-slate-400 rounded-sm mx-1" id="">
              {
                options.map(option=> <option key={option} value={option}>{option}</option>)
              }
            </select>

        </div>
      </div>

      {/**************************** Order Summery Section **************************/}
      <div className="order-summery fixed top-[100px] right-16">
        <Cart cart={cart} handleClearBtn={handleClearBtn}>
          <Link to={"/order"}>
            <button className="btn gap-2 bg-orange-400 border-red-500 btn-block mb-3">
              Review Order
              <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
      {/*  */}
    </div>
  );
};

export default Shop;
