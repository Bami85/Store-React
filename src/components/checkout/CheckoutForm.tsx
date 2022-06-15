import React, { useContext, useState } from 'react';
// Shared
import { CartContext } from '../../context/cart-context';
import { CheckoutContext } from '../../context/checkout-context';


const CheckoutForm = (props) => {
    const billing_info = () => {
        console.log(this.value)
    }
    return (
        <div>
            <div className="form-group">
                <input id="first_name" type="text" onClick={billing_info} name="first_name" placeholder="First Name" required className="form-control" />
            </div>
            <div className="form-group">
                <input id="last_name" type="text" name="last_name" placeholder="Last Name" required className="form-control" />
            </div>
            <div className="form-group">
                <input id="email" type="text" name="email" placeholder="email" required className="form-control" />
            </div>
            <div className="form-group">
                <input id="mobile" type="text" name="mobile" placeholder="mobile" required className="form-control" />
            </div>
            <div className="form-group">
                <input id="country" type="text" name="country" placeholder="country" required className="form-control" />
            </div>
            <div className="form-group">
                <input id="city" type="text" name="city" placeholder="city" required className="form-control" />
            </div>
            <div className="form-group">
                <input id="full_address" type="text" name="full_address" placeholder="full address" required className="form-control" />
            </div>
        </div>
    )

}

export default CheckoutForm
