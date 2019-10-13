import React, { Component } from "react";

import axios from "axios";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
    books:[],
    };
    this.loadBooks = this.loadBooks.bind(this);
  }

  componentWillMount() {
    this.loadBooks();
  }

  async loadBooks()
  {
    const promise = await axios.get("http://localhost:3000/book");
    const status = promise.status;
    if(status===200)
    {
      const data = promise.data;
      this.setState({books:data});
    }
  }

  render() {
    return(
      <div>
        <h1>Books</h1>
            {this.state.books.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}
