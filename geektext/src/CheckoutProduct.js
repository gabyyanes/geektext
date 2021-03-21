import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import './CheckoutProduct.js'

function CheckoutProduct({ id, image, title, price, qty, hideButton, save }) {
    const [{ basket }, dispatch] = useStateValue();

   
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const saveForLater = () => {
        //dispatch the item into data layer
        dispatch({
          type: "SAVE_FOR_LATER",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
          },
        });
      };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className = 'checkoutProduct__quantity' >
                    Qty
                    <select>
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                        <option value = "4">4</option>
                    </select>
                 
                    {/*
                    <select value = {qty} onChange = {(e) => setQty(e.target.value)}>
                       {[...Array(basket.countInStock).keys()].map((x) => (
                           <option key = {x + 1} value = {x + 1}>{x + 1}</option>
                       ))}
                   </select>
                       */}
                </p>
                       
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                {
                <p className = 'checkoutProduct__saveForLater'>
                    {!save && (
                     <button onClick={saveForLater}> Save for later</button>
                    )}
                </p>
                    }


            </div>
        </div>
         

    );
}


export default CheckoutProduct



