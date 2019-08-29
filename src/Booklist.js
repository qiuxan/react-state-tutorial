import React, { Component } from "react";
import Book from "./Book";

export default class Booklist extends Component {
  state = {
    books: [
      {
        book: "book1",
        author: "author1"
      },
      {
        book: "book2",
        author: "author2"
      },

      {
        book: "book3",
        author: "author3"
      }
    ]
  };

  render() {
    // const books = this.state.books.map(item => item.book);

    // console.log(books);

    return (
      <section>
        <h3>This is Booklist</h3>

        {this.state.books.map((item, index) => (
          <Book key={index} info={item} />
        ))}
      </section>
    );
  }
}
