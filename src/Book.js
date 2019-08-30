import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "hon",
      showInfo: true
    };
    // this.handelClick = this.handelClick.bind(this);
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  lowerCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 1 });
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  checkInfo = info => {
    if (info === true) {
      return (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio sequi
          voluptatum excepturi, aliquid molestiae eos quae at exercitationem qui
          eaque.
        </p>
      );
    } else {
      return null;
    }
  };
  render() {
    // console.log(this.props);
    const { id, img, title, author } = this.props.info;
    // console.log(this.props);
    // const { handleDelete } = this.props;
    // console.log(id);
    return (
      <article className="book">
        <img src={img} alt="book" width="150" />
        <div>
          <h4>Book: {title}</h4>
          <h6>Author: {author}</h6>
          {/* <button type="button" onClick={() => handleDelete(id)}>
            Delete me
          </button> */}

          <button type="button" onClick={this.handleInfo}>
            toggle info
          </button>

          {this.checkInfo(this.state.showInfo)}
          {/* {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis modi eum deserunt dolorem iusto aut ea tenetur
              asperiores ullam. Iure.
            </p>
          ) : null} */}

          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              reiciendis, harum modi praesentium quaerat molestias! Perferendis
              quibusdam facilis sapiente quaerat.
            </p>
          )} */}
        </div>
      </article>
    );
  }
}
