import React from 'react';
import AdminPanel from './AdminPanel';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';
import ChangeLog from './ChangeLog';
import Footer from './Footer';
import '../index.css';



class App extends React.Component{

    constructor(){
    super();
    this.state={
        order: []
    }

    }

addToOrder=(book)=>{
this.setState({
    order: [...this.state.order, book]
})
}

removeFromOrder=(title)=>{
this.setState({
    order: this.state.order.filter(book=> title!==book.name)
})
}

render()
{
        return(
        <div className="app container">
            
            <div className="row">
            <Header />
            <Order
            order={this.state.order} 
            removeFromOrder={this.removeFromOrder} />
            <Inventory 
            books={this.state.books}
            addToOrder={this.addToOrder}/>
            </div>
            <ChangeLog />
            <Footer />
        </div>
          )
        }
}
export default App;