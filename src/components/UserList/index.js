import React, { Component } from 'react';
import User from '../User';

class UserList extends Component {
  render() {
    const { users, selectUser } = this.props;
    const renderUsers = users.map(user =>
      <User key={user.id} user={user} selectUser={selectUser} />
    );
    return (
      <>
        <h2>All users:</h2>
        <div>{renderUsers}</div>
      </>
    );
  }
}

export default UserList;
