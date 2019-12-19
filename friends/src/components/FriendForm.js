import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendForm extends React.Component {
  // constructor and super
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  submit = e => {
    e.preventDefault();
    console.log("Submit has committed!!!")
    // const friendsList = this.props.friendsList;
    console.log(this.props);
    axiosWithAuth()
      .post('/friends', this.state)
      .then(res => this.setState({friendsList: res.data}))
      .catch(err => console.log(err));
    this.props.getData();
  };

  handleChanges = e => {
    this.setState({ ...this.newFriend, [e.target.name]: e.target.value });
    console.log('New newFriend from FriendForm', this.newFriend);
  }

  render() {
    console.log("DID RENDER", this.props);
    const newFriend = this.state;
    console.log(newFriend);
    return (
      <form onSubmit={this.submit}>
        <input 
          type="text" 
          name="name" 
          placeholder="name"
          value={this.name} 
          onChange={this.handleChanges} 
          />
        <input 
          type="text" 
          name="age" 
          placeholder="age"
          value={newFriend.age} 
          onChange={this.handleChanges} 
          />
        <input 
          type="email" 
          name="email" 
          placeholder="email"
          value={newFriend.email} 
          onChange={this.handleChanges} 
          />
        <button>Submit</button>
      </form>
    )
  }
}

export default FriendForm;