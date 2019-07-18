import React from 'react'
import MainItems from './MainItems';
import Toppings from './Toppings';
import Cart from './Cart';
import CurrentItem from './CurrentItem'

const HomePage = () =>{
    return(
        <div>
        <h1>
            I Sea Ice Cream
        </h1>
      <div id="whole-menu-cont">
        <div id="main-item-cont">
          <MainItems />
        </div>
        <div id="topping-cont">
          <Toppings />
        </div>
        <div>
          <CurrentItem />
        </div>
        <div id="cart-cont">
          <Cart />
        </div>
      
        </div>
        </div>
    );
}

export default HomePage;