import React from 'react';

import {
    withBaseIcon
} from 'react-icons-kit' //base for Icons
import {
    ic_remove_shopping_cart
} from 'react-icons-kit/md/ic_remove_shopping_cart'


const SideIconContainer = withBaseIcon({
    size: 18,
    style: {}
})

export const RemoveFromCart = () => < SideIconContainer icon = {
    ic_remove_shopping_cart
}
/>
export default class OrderView extends React.Component {

    render() {
        return ( <div className = "orderView row "> <div className = "col-md-4" >
            <span > 
            {this.props.book.name}
            </span>
            </div>
            <div className = "col-md-1" >
            <button className = "btn btn-danger"
            onClick = {
                (event) => this.props.removeFromOrder(this.props.book)
            } >
            <RemoveFromCart/> </button> </div> </div>
        );










    }


}