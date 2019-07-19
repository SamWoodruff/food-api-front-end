import React from 'react';
import { connect } from 'react-redux';
import { mainItems } from './Inventory';
import * as actions from '../config/actions';


const MainItems = ({ newCurrentItem }) => {
        return(
            <div>
                <div className="title2">
                    Pick Your Flavor
                </div>
                {mainItems.map(item =>(
                    <div className="item-info-cont">
                        <img className="listImage" src={item.image} alt ="ice cream flavor" />
                        <div className="icecream-info-cont">
                            {item.name}<br/>
                            ${item.price.toFixed(2)}<br/>
                        </div>
                        <button className="btn" onClick={()=>newCurrentItem(item)}>Add</button>
                    </div>
                ))}
            </div>
        );
}



const mapStateToProps = ({ cart }) =>({
    cart
})

const mapDispatchToProps = dispatch =>({
    newCurrentItem: item => dispatch(actions.newCurrentItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainItems);