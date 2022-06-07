import { useState } from 'react'
import '../assets/css/Checkout.css'
import CheckoutForm from '../components/CheckoutFormComponent'
import ShippingForm from '../components/ShippingComponent'
import CheckoutList from '../components/CheckoutListComponent'
function Checkout() {

  return (
    <div className="container mt-5 mb-5">

    <div className="row">
        <div className="col-6">
            <h3>Address</h3>
            <form id="checkoutForm">
                <CheckoutForm />
                <ShippingForm />
                <div className="form-group">
                    <input id="terms" type="checkbox" name="terms" required />
                    <label>I've read and accept the
                        <a href="terms.php">terms && conditions</a></label> 
                </div>
            </form>
        </div>
        <div className="col-6" >
            <CheckoutList />
        </div>
    </div>
    <br />
    <button className="btn btn-success d-block  badge-pill" >Place an Order</button>





</div>
  )
}

export default Checkout
