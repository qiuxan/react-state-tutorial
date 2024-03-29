import React, { Component } from "react";
import Book from "./Book";

import bookData from "./bookData";

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookData
    };
  }

  // state = {
  //   books: bookData
  // };

  handleDelete = id => {
    // console.log(this.state.books);
    const sortedBooks = this.state.books.filter(item => item.id !== id);

    // console.log(sortedBooks);

    this.setState({
      books: sortedBooks
    });
  };

  render() {
    // const books = this.state.books.map(item => item.book);

    // console.log(books);

    return (
      <section>
        <h3>This is Booklist</h3>

        {this.state.books.map(item => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
