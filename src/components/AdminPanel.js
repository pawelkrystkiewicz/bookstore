import React from 'react';
import LoginPanel from "./LoginPanel";
import AddBook from "./AddBookForm";

class AdminPanel extends React.Component {

constructor(){
        super();
        this.state={loggedIn : false};
};

changeLoggedIn=(newValue)=>this.setState({loggedIn: newValue});



    render() {

        return (
        <div>
            {!this.state.loggedIn &&
            <LoginPanel changeLoggedIn={this.changeLoggedIn}/>
            }
            {this.state.loggedIn && <AddBook/>}
        </div>
        );
    }
}


export default AdminPanel;