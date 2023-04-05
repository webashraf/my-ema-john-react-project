import React from "react";

const Product = (props) => {
  const { id, name, category, price, ratings, stock, img, seller } =
    props.products;
  // console.log(props.products);
  const handleAddToCart = props.handleAddToCart;
  return (
    <div>
      <div className="card w-full shadow-xl h-[460px]  border rounded-md border-sky-100 overflow-hidden">
        <figure>
          <img
            src={img}
            className="p-1 rounded-lg w-[286px] h-[286px]"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base">{name}</h2>
          <p className="text-xs font-light">Price: {price}</p>
          <br />

          <p className="text-xs">Manufactior : {seller}</p>
          <p className="text-xs">Rating : {ratings}</p>
          <small className="text-[9px] font-light">PId: {id}</small>
          <div className="card-actions justify-end"></div>
        </div>
        <button
          onClick={() => handleAddToCart(props.products)}
          className="btn btn-secondary btn-block rounded-none"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
