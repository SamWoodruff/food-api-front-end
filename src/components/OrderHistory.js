import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../config/actions';

const OrderHistory = ({ user, updateUserOrderHistory }) => {
    const [userOrders, setUserOrders] = useState([]);
    useEffect(() => {
        getOrders();
    }, []);
    const getOrders = () => {
        axios.get('/getAllUserOrders?email=' + user.email).then(response => setUserOrders(response.data));
    }
    console.log(userOrders, "here");
    return (
        <div>
            Order Page
            {userOrders.length > 0 &&
                userOrders.map(order => order.items.map(item =>
                    <div>
                        {item.quantity}
                        {item.name}
                        {item.price}
                        {item.toppings.map(topping => (
                            <div>
                                {topping.name}
                                {topping.price}
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps)(OrderHistory);