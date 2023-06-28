import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () =>{
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={ image }/>

        <div classname='checkoutProduct__info'>
            <p classname='checkoutProduct__title'>{title}</p>
            <p classname="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkout__rating">
            <div>
            {Array(rating)
                .fill()
                .map((_, i) => (
                <p key={i} style={{ display: 'inline-block', margin: '0' }}>
                    ⭐
                </p>
            ))}
            </div>

            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>      
    </div>
  )
}

export default CheckoutProduct
