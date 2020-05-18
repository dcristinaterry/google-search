import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Navbar from "../components/NavBar/NavBar";
import API from "../utils/API";
import { Link } from "react-router-dom";

class SavePage extends Component() {

    state = {
        books: []
        // title: "",
        // authors: "",
        // description: "",
        // image: "",
        // link: ""
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ 
                    books: res.data
                 })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name,
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Jumbotron>
                        {this.state.books.map(book => 
                        <CardSaveBook
                            title = {book.title}
                            author = {book.author}
                            body = {book.description}
                            image = {book.image}
                            link = {book.link}
                            deleteBtn = {() => this.deleteBook(book.id)}
                        />)}
                    </Jumbotron>
                </Navbar>

            </div>



        );
    }


}

export default SavePage;