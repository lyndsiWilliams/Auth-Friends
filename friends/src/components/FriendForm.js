import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendForm extends React.Component {
  state = {
    newFriend: {
      id: Date.now(),
      name: '',
      age: '',
      email: ''
    }
  };
  
  submit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', this.newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({ ...this.newFriend, [e.target.name]: e.target.value });
    console.log('New newFriend from FriendForm', this.newFriend);
  }

  render() {
    const newFriend = this.state;
    console.log(newFriend);
    return (
      <form onSubmit={this.submit}>
        <input 
          type="name" 
          name="name" 
          placeholder="name"
          value={newFriend.name} 
          onChange={this.handleChanges} 
          />
        <input 
          type="age" 
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