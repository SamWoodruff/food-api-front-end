import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { toppings } from "./Inventory";
import * as actions from "../config/actions";

const Toppings = ({ updateCurrentItem, addToppingToItem, currentItem }) => {
  const handleOnClick = topping => {
    const index = currentItem.toppings.findIndex(
      product => product.name === topping.name
    );
    if (currentItem.name) {
      if (index === -1) {
        topping = { ...topping, quantity: 1 };
        addToppingToItem(topping);
      } else {
        currentItem.toppings[index].quantity += 1;
        updateCurrentItem(currentItem);
      }
    }
  };
  return (
    <div>
      {toppings.map(topping => (
        <div>
          <img className="listImage" src={topping.image} alt="topping pic" />
          {topping.name}
          <br />
          {topping.cost.toFixed(2)}
          <br />
          <button onClick={() => handleOnClick(topping)}>Add</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ cart, currentItem }) => ({
  cart,
  currentItem
});

const mapDispatchToProps = dispatch => ({
  updateQuantity: cart => dispatch(actions.updateQuantity(cart)),
  addToppingToItem: topping => dispatch(actions.addToppingToItem(topping)),
  updateCurrentItem: item => dispatch(actions.updateCurrentItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toppings);
