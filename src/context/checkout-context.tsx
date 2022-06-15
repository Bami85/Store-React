import React , {createContext,useState} from "react";
export const CheckoutContext = createContext([]);
// Providers
export const CheckoutProvider = (props) => {
    const [checkoutItems,setCheckoutItems] = useState({
        total_amount : 0,
        shipping : {},
        onlinePayment : true,
        payment : {},
    })
    return (
        <CheckoutContext.Provider
        value={[checkoutItems,setCheckoutItems]}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}