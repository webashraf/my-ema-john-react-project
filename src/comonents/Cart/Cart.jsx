import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Cart = ({ cart }) => {
  // console.log(cart);

  let totalQty = 0;
  // console.log(totalQty);
  let total = 0;
  let shipping = 0;
  let tax = 0;
  for (const item of cart) {
    item.quantity = item.quantity || 1;
    totalQty = totalQty + item.quantity;
    // console.log(totalQty, item.quantity);
    total = total + item.price * item.quantity;

    // console.log(total, item.price);

    shipping = shipping + item.shipping;
    tax = (total * 0.1).toFixed(2);

  }
  const [clear, setClear] = useState(false);
  const handleClearBtn = () =>{
    localStorage.clear('shopping-cart');
useEffect( () =>{
    setClear(!clear)
  }, [clear])
}
  return (
    <div>
      <div className=" bg-orange-200 p-5 text-black sticky top-2 p-7 rounded-md">
        <h3 className="text-black text-3xl">Order Summary</h3>
        <h4 className="text-lg mb-2">Selected Items: {totalQty}</h4>
        <h4 className="text-lg mb-2">Selected length: {cart.length}</h4>
        <h4 className="text-lg mb-2">Total Price: ${total}</h4>
        <h4 className="text-lg mb-2">Total Shipping Charge: ${shipping}</h4>
        <h4 className="text-lg mb-2">Tax: ${tax}</h4>
        <h4 className="text-xl mb-2">Grand Total: ${total + shipping + tax}</h4>
        <button
          onClick={handleClearBtn}
          className="btn gap-2 bg-red-600 border-red-500 btn-block mb-3"
        >
          Clear Cart
          <FontAwesomeIcon className="text-lg" icon={faTrash} />
        </button>
        <button className="btn gap-2 bg-orange-400 border-orange-400 btn-block">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
