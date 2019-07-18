import React from 'react';
import { connect } from 'react-redux';
import { mainItems } from './Inventory';
import * as actions from '../config/actions';


const MainItems = ({ newCurrentItem }) => {
        return(
            <div>
                {mainItems.map(item =>(
                    <div>
                        <img className="listImage" src={item.image} alt ="ice cream flavor" />
                        {item.name}<br/>
                        {item.price.toFixed(2)}<br/>
                        <button onClick={()=>newCurrentItem(item)}>Add</button>
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