# Google Books Search: MERN Review

[<img src="https://img.shields.io/badge/License-MIT-blue.svg">](https://opensource.org/licenses/MIT) 

## Description

In this app, we were challenged to create a React-based Google Books Search app, with a corresponding MongoDB, The app must include helper/util functions, and utilizee React lifecycle methods to query and display books based on user searches. 

## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)

  * [Learning-Points](#Learning-Points)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - used to add style to the deployed page
- JavaScript - used to create the logic controlling the client-side application
- jQuery - library supplement to JavaScript controlling application logic
- Node.js - runtime environment which executes the JS code
- Express - framework for Node.js to create a server
- MongoDB - a document oriented, NoSQL database
- Mongoose - an object data modeling library for MongoDB and Node.js
- React - a JS library for building user interfaces
- JSX - similar to HTML, this can be used to structure component rendering within React
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - host for deployed application

## Summary

This group project was gave our team a nice warm-up in terms of working together to develop a Google books search application over the course of a weekend as a MERN stack.  We took the opportunity to do planning and pair programming to complete the vast majority of this application completed throughout a single working day, with some fine tuning of the styling and functionality pieces concluding after each team member volunteered to review over a weekend.

Implementing the Save button from our search page was a minor, but significant, hurdle to the functionality of the application.  Ultimately, we realized that we had structured the client-side of our application to sit in a folder inside another folder off the root directory, as opposed to directly in the client folder.  The functionality was working but it was never writing to the database given the inaccuracy of the routes we had set.  Below is the Save button logic from our Search page, along with the corresponding values that would be returned when rendered to the page:

```
    handleSaveBtn = (bookIndex) => {
        const books = [...this.state.books]
        const book = books.splice(bookIndex, 1)
        console.log(book[0].volumeInfo.title)
        this.setState({ book: book })
        APIsave.saveBook({
            title: book[0].volumeInfo.title,
            authors: book[0].volumeInfo.authors,
            description: book[0].volumeInfo.description,
            image: book[0].volumeInfo.imageLinks.smallThumbnail,
            link: book[0].volumeInfo.infoLink
        })
    }
    render() {
        return (
            <div className="container pt-5 mt-5">
                {/* <Navbar /> */}
                <SearchForm change={this.handleInputChange}
                    clicked={this.handleSearchClick}
                    searchValue={this.state.search}
                > </SearchForm>
                {this.state.books.length ?
                    (<h1 className="text-center"> See Results of your Book Search </h1>)
                    : (<h1> Please Enter a Book to Search </h1>)}
                {this.state.books.map((book, id) => {
                    return (
                        <CardSearchBook key={book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            body={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            save={() => this.handleSaveBtn(id)} >
                        </CardSearchBook>
                    )
                })}
            </div>
        );
    }
```

Now that data was successfully being posted to our Save page from the Search page, we had the ability to view and/or remove data by deleting it from that Save page.  Following a very similar logic as established in develping the save button, we were able to successfully deploy this Delete button:

```
    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container pt-5 mt-5">
                <h1 className="text-center"> Saved Books </h1>
                {this.state.books.map(book =>
                    <CardSaveBook key={book._id}
                        title={book.title}
                        author={book.authors}
                        body={book.description}
                        image={book.image}
                        link={book.link}
                        deleteBtn={() => this.deleteBook(book._id)}
                        >
                    </CardSaveBook>
                 )} 
            </div>
        );
    }
```

To demonstrate this functionality, below is a gif of our working application:

<img src="https://github.com/crisdc88/google-search/blob/master/client/public/google-search.gif">


## Learning-Points

This project has really set the stage for our evolution into being able to deploy Full Stack MERN applications.  As with any project, it was not without its small complications - all seem minor when viewed in the rearview mirror, but they all serve as a lesson to pay attention to the small details. 

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Cristina Terry, Juliet George, Brad Davis

## Installation

To install necessary dependencies for this application, the following commands are required from a root directory:

`npx create-react-app <application name>` - This command will install all the base dependencies to bootstrap a react app

`cd <application name>` - Once your react app is created, you can move into that directory

`npm start` - Command to run the application in a development mode

For those who wish to clone or fork this repo, the following steps should be followed:

For those who wish to clone or fork this repo, the following steps should be followed:

Clone:
1) On GitHub, navigate to the main page of the repository.
2) Under the repository name, click Clone or download.
3) To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon.
4) Open your local Terminal
5) Move into the directory location where you would like the cloned repo to sit.
6) Type `git clone` then paste the URL copied from earlier so that your would see the following - `$ git clone https://github.com/cristdc88/google-search.git`
7) Press enter

Fork:
1) On GitHub, navigate to the main page of the repository.
2) In the top-right corner of the page, click Fork.

For more detailed instructions, you can visit GitHub directly to <a herf="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository">Clone</a> or <a herf="https://help.github.com/en/github/getting-started-with-github/fork-a-repo">Fork</a>

## Tests

No tests were required for this application

## Questions

<img src="https://avatars1.githubusercontent.com/u/43655076?v=4" alt="avatar" style="border-radius: 16px" width="30">

[Juliet George](https://github.com/jules-boogie)

<img src="https://avatars0.githubusercontent.com/u/61372364?v=4" alt="avatar" style="border-radius: 16px" width="30">

[Cristina Terry](https://github.com/crisdc88) directly at crisdc88@gmail.com

<img src="https://avatars3.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

[Brad Davis](https://github.com/davisbradleyj) directly at davis.bradleyj@gmail.com