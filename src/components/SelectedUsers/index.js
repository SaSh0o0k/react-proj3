import React, { Component } from 'react';

class SelectedUsers extends Component {
  removeUser = (id) => {
    this.props.removeUser(id);
  };

  render() {
    const { users } = this.props;
    const renderUsers = users.map(user => (
      <li key={user.id} onClick={() => this.removeUser(user.id)}>
        {user.name}
        <button onClick={() => this.removeUser(user.id)}>Удалить</button>
      </li>
    ));

    return (
      <div>
        <h2>Выбранные пользователи:</h2>
        <ul>{renderUsers}</ul>
      </div>
    );
  }
}

export default SelectedUsers;
