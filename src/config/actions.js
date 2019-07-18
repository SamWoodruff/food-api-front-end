export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const addItemToCart = item =>({
    type:ADD_ITEM_TO_CART, payload: item
});

export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const updateQuantity = cart =>({
    type:UPDATE_QUANTITY, payload: cart
});

export const ADD_TOPPING_TO_ITEM = "ADD_TOPPING_TO_ITEM";
export const addToppingToItem = item => ({
    type: ADD_TOPPING_TO_ITEM, payload: item
});

export const UPDATE_CURRENT_ITEM = "UPDATE_CURRENT_ITEM";
export const updateCurrentItem = item =>({
    type:UPDATE_CURRENT_ITEM, payload: item
});

export const NEW_CURRENT_ITEM = "NEW_CURRENT_ITEM";
export const newCurrentItem = item =>({
    type: NEW_CURRENT_ITEM, payload: item
});

export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER"
export const updateCurrentUser = user =>({
    type: UPDATE_CURRENT_USER, payload: user
});

export const CLEAR_CART = "CLEAR_CART"
export const clearCart = cart =>({
    type: CLEAR_CART, payload: cart
});

// export const UPDATE_USER_ORDER_HISTORY = "UPDATE_USER_ORDER_HISTORY"
// export const updateUserOrderHistory = user => ({
//     type: UPDATE_USER_ORDER_HISTORY, payload: user
// });