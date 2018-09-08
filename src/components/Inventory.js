import React from 'react';
import BookView from './BookView'
import { fbase } from '../fbase'
//import App from './App'
class Inventory extends React.Component {
constructor(){
    super();
    this.state={
        books:[]
    }
}

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBiniding(this.ref);
    }

    render() {
        const bookListing = this.state.books.map( book => {
            return <BookView book={book} 
            addToOrder={this.props.addToOrder}/>
         });

        return(
        <div className="inventory col-md-6 row">
        {/*<h2>Stock</h2>*/}
        {bookListing}
        </div>);
    }
}
export default Inventory;