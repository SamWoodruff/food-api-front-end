import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../config/actions';
const CurrentItem = ({currentItem, addItemToCart}) =>{
    return(
        <div className="current-item-cont">
            <span className="title">Current Item</span><br/>
            <div className="current-item-info">
                {currentItem.name}
            </div>
            {currentItem.toppings.map(topping=>(
                <div className="current-item-info">
                    {topping.name} x
                    {topping.quantity}
                </div>
            ))}
            <button className="btn" onClick={()=>addItemToCart(currentItem)}>Add to cart</button>
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