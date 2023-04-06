import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Rivew from './Rivew';

const Rivew = ({ products, handleDeleteBtn }) => {
  console.log(products);
  return (
    <div className="flex gap-5 border border-2 items-center mt-3">
      <div>
        <img className="w-28" src={products.img} alt="" />
      </div>
      <div>
        <h3>{products.name}</h3>
        <h5>Price : {products.price}</h5>
        <h5>Shipping Charge: {products.shipping}</h5>
      </div>
      <div className="ml-auto pr-4">
        <div className="bg-red-200 w-14 h-14 flex items-center justify-center rounded-full">
          <button onClick={() => handleDeleteBtn(products.id)}>
            <FontAwesomeIcon className="text-red-600 text-3xl" icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rivew;
