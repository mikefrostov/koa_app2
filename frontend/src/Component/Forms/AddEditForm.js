import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    post: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post: this.state.post
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/posts', {
      method: 'PUT',
      mode: 'cors',
      cache: 'default',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.id,
        post: this.state.post
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('item = ' + JSON.stringify(item[0]));
        }
      })
      .catch(err => console.log(err))
  }
  
  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, post } = this.props.item
      this.setState({ id, post })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="post">Post</Label>
          <Input type="text" name="post" id="post" onChange={this.onChange} value={this.state.post === null ? '' : this.state.post} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm
