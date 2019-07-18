import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../config/actions';
const CurrentItem = ({currentItem, addItemToCart}) =>{
    return(
        <div>
            Current Item<br/>
            {currentItem.name}
            {currentItem.toppings.map(topping=>(
                <div>
                    {topping.name}x
                    {topping.quantity}
                </div>
            ))}
            <button onClick={()=>addItemToCart(currentItem)}>Add to cart</button>
        </div>
    )
}

const mapStateToProps = ({ currentItem }) =>({
    currentItem
})

const mapDispatchToProps = dispatch =>({
    addItemToCart: item => dispatch(actions.addItemToCart(item)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CurrentItem)