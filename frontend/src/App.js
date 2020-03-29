import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from "./Component/Post/index";
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Component/Modals/Modal.js'
import DataTable from './Component/Tables/DataTable.js'

class App extends Component {
//  render() {
//    return (
//      <Router>
//        <Route path="/" exact component={Post} />
//    </Router>
//    );
//  }


    state = {
	    items:[]
    }

    getItems(){
	    fetch('http://koareact.morozovme.com/posts')
		    .then(response => response.json())
		    .then(items => this.setState({items}))
		    .catch(err => console.log(err))
    }


    addItemToState = (item) => {
	    this.setState(prevState => ({
		    items: [...prevState.items, item]
	    }))
    }

	updateState = (item) => {
		const itemIndex = this.state.items.findIndex(data => data.id === item.id) 
	const newArray = [
		// destructing items 
	        ...this.state.items.slice(0, itemIndex),
		//add updated item to the array
		item,
		//add rest of items
		...this.state.items.slice(itemIndex + 1)
	]
		this.setState({ items: newArray }) 
	}

	deleteItemFromState = (id) => {
		const updatedItems = this.state.items.filter(item => item.id !== id) 
		this.setState({ items: updatedItems }) 
	}

	componentDidMount(){
		this.getItems()
	}

	render(){
		return (
			<Container className="App">
			<Row>
			<Col>
			<h1 style ={{margin: "20px 0"}}> Posts </h1>
			</Col>
			</Row>
			<Row>
			<Col>
			<DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
                        <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
		</Col>
        </Row>
      </Container>
    )
  }


}

















export default App;
