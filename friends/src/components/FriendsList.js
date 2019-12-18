import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

// Component
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    console.log("Component Did Mount");
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res.data);
        this.setState({ friendsList: res.data })
      })
      .catch(err => console.log(err));
  };

  render() {
    const friendsList = this.state;
    console.log(friendsList.friendsList);
    return (
      <div>
        ||||FriendsList Component||||
        {friendsList.friendsList.map(friend => (
          <p key={friend.id}>Name: {friend.name} <br/>Age: {friend.age} <br/>Email: {friend.email}</p>
        ))}
        Create a new Friend!
        <FriendForm />
      </div>
    );
  }
}

export default FriendsList;