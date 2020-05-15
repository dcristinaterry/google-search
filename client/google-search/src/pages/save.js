import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Navbar from "../components/NavBar/NavBar";
import API from "../utils/API";
import { Link } from "react-router-dom";

class SavePage extends Component() {

    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
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
                        <CardSaveBook />
                    </Jumbotron>
                </Navbar>

            </div>



        );
    }


}

export default SavePage;