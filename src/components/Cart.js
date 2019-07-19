import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../config/actions';

var _ = require('lodash');
const Cart = ({cart, user, clearCart}) => {
    let total = 0;
    cart.forEach(item => {
        total+=item.price;
        item.toppings.forEach(topping => {
            total+=topping.cost;
        })
    });
    
    const handleCheckout = () =>{
        if(!_.isEmpty(user)){
            axios.post('/createOrder',{total, items:cart, userEmail:user.email})
            clearCart();
        }else{
            alert("Not logged in");
        }
    }
        return(
            <div className="current-item-cont">
                <span className="title">Cart</span>
                {cart.map((order,i)=>(
                    <div className="current-item-info">
                        <span className="order-num">{i + 1}</span><br/>
                        {order.name}
                        {order.price.toFixed(2)}
                        {order.toppings.map(topping=>(
                            <div className="current-item-info">
                                {topping.name}
                                {topping.cost.toFixed(2)}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="total-cost">
                    ${total.toFixed(2)}
                </div>
                <button className="btn" onClick={()=>handleCheckout()}>Checkout</button>
            </div>
        );
}

const mapStateToProps = ({ cart, user }) =>({
    cart,
    user
})
const mapDispatchToProps = dispatch => ({
   clearCart: cart => dispatch(actions.clearCart(cart)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);