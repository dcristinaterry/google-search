import React, { Component } from "react"
import Navbar from "../components/NavBar"
import SearchForm from "../components/SearchForm"
import API from "../utils/API_google"


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
            .then(res => this.setState({ books: res.data }))
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
    render() {
        return (
            <div>
                <Navbar></Navbar>

                <SearchForm change={this.handleInputChange}
                    clicked={this.handleSearchClick}
                    searchValue={this.state.search}
                > </SearchForm>
                {/* <card>
                    books={this.state.books}
                </card> */}



            </div>



        );
    }


}

export default SearchPage;