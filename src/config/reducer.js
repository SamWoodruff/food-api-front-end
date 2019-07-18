import { ADD_ITEM_TO_CART,
        UPDATE_QUANTITY,
        UPDATE_CURRENT_ITEM,
        ADD_TOPPING_TO_ITEM,
        NEW_CURRENT_ITEM,
        UPDATE_CURRENT_USER,
        CLEAR_CART,
        // UPDATE_USER_ORDER_HISTORY
    } from './actions'

const initialState = {
    cart:[],
    currentItem:{
        toppings:[]
    },
    user:{}
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case ADD_TOPPING_TO_ITEM:
            return{
                ...state,
                currentItem:{...state.currentItem, toppings:[...state.currentItem.toppings, {...action.payload, quantity:1}]}
            }
        case NEW_CURRENT_ITEM:
            return{
                ...state,
                currentItem:{...action.payload, toppings:[]}
            }
        case UPDATE_CURRENT_ITEM:
            return{
                ...state,
                currentItem: {...action.payload, toppings:[...state.currentItem.toppings]}
            }
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                currentItem:{toppings:[]}
            }
        case UPDATE_QUANTITY:
            return{
                ...state,
                cart: action.payload
            }
        case UPDATE_CURRENT_USER:
            return{
                ...state,
                user: action.payload
            }
        // case UPDATE_USER_ORDER_HISTORY:
        //     return{
        //         ...state,
        //     }
        default:
            return state
    }
}