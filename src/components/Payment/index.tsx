import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../../context/checkout-context';

import PaymentMethods from '../../data/PaymentMethodsData'
import OnlinePayment from './online'
import BankPayment from './transfer'


function PaymentMethodsList() {
    const [checkoutItems, setCheckoutItems] = useContext(CheckoutContext);
    const changePaymentMethod = (event) => {
        console.log(event.target.value)
        if(event.target.value == 1){
            setCheckoutItems({...checkoutItems,onlinePayment:false})
        } else {
            setCheckoutItems({...checkoutItems,onlinePayment:true})
        }
    }
    return (
        <div>
            <h2 align="left">Payment Methods</h2>
            <select name="PaymentMethods" id="">
                {
                    PaymentMethods.map((item) => {
                        return <option onClick={changePaymentMethod}  value={item.id}>{item.title}</option>
                    })
                }

            </select>
            {checkoutItems.onlinePayment && < OnlinePayment />}
            {!checkoutItems.onlinePayment && < BankPayment />}
        </div>
    )
}

export default PaymentMethodsList
