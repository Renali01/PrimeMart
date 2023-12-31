import React from 'react'
import "./Payment.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                
                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3> 
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>250 Alexander Crescent</p>
                        <p>Ottawa, ON</p>
                    </div>
                </div>

                {/* Payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and  delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*Stripe */}

                    </div>
                    
                </div>
            
            </div>
        </div>
    )
}

export default Payment
