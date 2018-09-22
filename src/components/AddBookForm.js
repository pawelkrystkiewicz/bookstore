import React from 'react';
import LoginPanel from "./LoginPanel";
import { fbase, firebaseApp} from '../fbase'


class AddBook extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: false,
                image: ""
            }
        };
    };



    handleChange = (event) => {

        let newBook;
        if (event.target.name === "onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            }
        } else {

            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            }
        }
        this.setState({
            book: newBook
        });
    }

    addNewBook = (event) => {
        event.preventDefault();

        let newBook = { ...this.state.book
        };
        //    this.props.addBook(newBook);

        this.setState({
            books: [...this.state.books, newBook],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: false,
                image: ""
            }

        });
    }


    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBiniding(this.ref)
    }


    changeLoggedIn = (newValue) => this.setState({
        loggedIn: newValue
    });



    render() {

        return ( 
            <div> {!this.state.loggedIn &&  
            <LoginPanel changeLoggedIn = {this.changeLoggedIn}/>}
            {this.state.loggedIn &&
             <div className = "adminPanel col-xs-4">
            <form onSubmit = {this.addNewBook}>
            <div className = "form-group">
            <input type = "text" placeholder = "Book name" id = "name" name = "name" className = "form-control" value = {this.state.book.name} onChange = {this.handleChange}/> 
            </div>
            <div className = "form-group" >
            <input type = "text" placeholder = "Book author"  id = "author"  name = "author" className = "form-control" value = {this.state.book.author}  onChange = {this.handleChange}/>
            </div> 
            <div className = "form-group" >
            <textarea placeholder = "Book description" id = "description" name = "description"  className = "form-control" value = {this.state.book.description} onChange = { this.handleChange}/> 
            </div> 
            <div className = "form-group checkbox" >
            < input type = "checkbox" id = "onStock"  name = "onStock" className = "form-check-input"  
            value = {this.state.book.onStock}
            onChange ={this.handleChange}/>
            <label htmlFor = "bookOnStock" className = "form-check-lable">Available</label>
            </div>
            <div className = "form-group" >
            <input type = "text" placeholder = "Book image" id = "image" name = "image" className = "form-control" value = {this.state.book.image} onChange = {this.handleChange}/>
            </div> 
            <button type = "submit" className = "btn btn-info goToAdmin"> Add </button>
            </form> 
            </div>
            }
            </div>
        );
    }
}

export default AddBook;