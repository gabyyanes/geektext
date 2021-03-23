import React from "react";
import "./Books.css";
import { useStateValue } from "./StateProvider";

function Books({ id, title, image, qty, price}) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>", basket);

  const addToBasket = () => {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        qty : qty,
      },
    });
  };
  
  return (
    <div className="books">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
        alt=""
      />
      <button onClick={addToBasket}> Add to Basket</button>
    </div>
  );
}

export default Books;
