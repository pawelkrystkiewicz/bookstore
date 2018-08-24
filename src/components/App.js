import React from 'react';
import AdminPanel from './AdminPanel';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

import '../index.css';

class App extends React.Component{
render(){
        return(
        <div className="app container">
            <Header/>
            <Order/>
            <Inventory/>
            <AdminPanel/>
        </div>
          )
        }
    }
export default App;