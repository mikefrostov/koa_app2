import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    posts:[],
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  componentWillMount() {
    this.loadPosts();
  }

  async loadPosts()
  {
    const promise = await axios.get("http://koareact.cheapestdomainever.club:3000/posts");
    const status = promise.status;
    if(status===200)
    {
      const data = promise.data;
      this.setState({posts:data});
    }
  }

  render() {
    return(
      <div className="container">
        <h1>Posts</h1>
            {this.state.posts.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}
