import React from 'react';
import { withBaseIcon } from 'react-icons-kit' //base for Icons
import {ic_add_shopping_cart} from 'react-icons-kit/md/ic_add_shopping_cart'

const SideIconContainer = withBaseIcon(
    {
         size: 18,
         style: 
         { }
    })

export const ShoppingCart = () => <SideIconContainer icon={ic_add_shopping_cart} />

export default class BookView extends React.Component
{

    render(){
        return(
        <div className="book-view row">
            <div className="col-md-4 cover">
                    <img src={this.props.book.image}
                    width="75" height="100"
                    alt={this.props.book.name} />
            </div>
            <div className="col-md-4 basic-info">
                <b>{this.props.book.name}</b><br />
                <i>{this.props.book.author}</i><br />
                <div className="description">
                    {this.props.book.description.substring(0, 150) + " ..."}<br />
                </div>
            </div>
            <div className="col-md-1 add-book-button">
                <button type="button" class="btn btn-outline-secondary" onClick={(event) => this.props.addToOrder(this.props.book)}><ShoppingCart/></button>
            </div>
        </div>
        )
    }


};
