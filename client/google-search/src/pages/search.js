import React, { Component } from "react"
import Navbar from "../components/NavBar"
import SearchForm from "../components/SearchForm"
import API from "../utils/API_google"
import CardSearchBook from "../components/CardSearchBook"


class SearchPage extends Component() {

    state = {
        search: "",
        books: []
    }

    componentDidMount() {

        this.searchBooks("twilight");
    }

    searchBooks = query => {
        API.searchbook(query)
            .then(res => this.setState({ books: res.data.items }))
            .catch(error => console.log(error))
    }

    handleSearchClick = ev => {
        ev.preventDefault();
        this.searchBooks(this.state.search)


    }

    handleInputChange = event => {
        const name = event.target.name,
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }

    handleViewBtn = event => {


    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <SearchForm change={this.handleInputChange}
                    clicked={this.handleSearchClick}
                    searchValue={this.state.search}
                > </SearchForm>
                {this.state.books.length ? (
                <h1 className="text-center"> See Results of your Book Search </h1>}
                 {this.state.books.map(book =>{
                <CardSearchBook key={book.id}
                title = {this.book.volumeInfo.title}
                author = {this.book.volumeInfo.authors}
                body = {this.book.volumeInfo.description}
                href = {this.book.volumeInfo.infoLink}
                image = {this.book.volumeInfo.imageLinks.smallThumbnail}
                >
                </CardSearchBook>
                })
                ):(
                    <h1> Please Enter a Book to Search </h1>
                )}


            </div>



        );
    }


}

export default SearchPage;