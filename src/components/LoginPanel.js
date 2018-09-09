import React from 'react';
import {fbase, firebaseApp} from '../fbase'


class LoginPanel extends React.Component {

constructor(){
super();
    this.state={
            email: "",
            password: ""
    }
}
handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
}

authenticate = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { this.props.changeLoggedIn(true) })
            .catch(() => {console.log("Unable to authenticate"); })

        }


    render() {
        return(
            <form onSubmit={this.authenticate}>
                <input type="text" placeholder="email" id="email" className="form-control"
                        onChange={this.handleChange}
                        value = {this.state.email}/>
                <input type="password" id="password" className="form-control"
                        onChange={this.handleChange}
                        value = {this.state.password}/>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        )
    }
}

export default LoginPanel;