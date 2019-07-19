import React from 'react'
import MainItems from './MainItems';
import Toppings from './Toppings';
import Cart from './Cart';
import CurrentItem from './CurrentItem'

const HomePage = () =>{
    return(
        <div>
        <h1>
            The Ice Cream Shop
        </h1>
      <div id="whole-menu-cont">
        <div>
          <MainItems />
        </div>
        <div>
          <Toppings />
        </div>
        <div className="checkout-area">
          <div className="checkout-column-1">
            <CurrentItem />
          </div>
          <div className="checkout-column-2">
            <Cart />
          </div>
        </div>
        </div>
        </div>
    );
}

export default HomePage;