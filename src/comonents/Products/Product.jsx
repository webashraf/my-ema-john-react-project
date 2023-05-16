import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Product = (props) => {
  const { _id, name, category, price, ratings, stock, img, seller } =
    props.products;
  // console.log(props.products);
  const handleAddToCart = props.handleAddToCart;
  return (
    <div>
      <div className="card w-full shadow-2xl h-[460px] rounded-md overflow-hidden">
        <figure>
          <img
            src={img}
            className="p-1 rounded-lg w-[286px] h-[286px]"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base">{name}</h2>
          <br />

          <p className="text-">Manufactior : {seller}</p>

          <div className="flex gap-3">
            <span>Ratings : </span>
            <span className="text-yellow-500 mt-1">
              <Rating
                readonly
                placeholderRating={ratings}
                emptySymbol={
                  <AiOutlineStar className="text-yellow-500"></AiOutlineStar>
                }
                placeholderSymbol={
                  <AiFillStar className="text-yellow-500"></AiFillStar>
                }
              />
              &nbsp; {ratings}{" "}
            </span>
          </div>

          <p className="text font-light">Price : ${price}</p>
          <small className="text-">Product Id : {_id}</small>
        </div>
        <div className="p-5">
          <button
            onClick={() => handleAddToCart(props.products)}
            className="btn btn-secondary btn-block rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
