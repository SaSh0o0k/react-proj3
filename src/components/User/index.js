import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    }
  }

  showSmile = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { user: { id, name, avatar, married, isSelected }, selectUser } = this.props;
    const { isVisible } = this.state;
    const obj = { key: 666 };
    const smile = married ? ':-)' : ':-(';
    const styles = { border: isSelected ? "solid green 5px" : undefined };
    return (
      <article style={styles}>
        <button onClick={this.showSmile}>{isVisible ? "off" : "on"}</button>
        <button onClick={() => { selectUser(id) }}>select</button>
        <h2>{name} {isVisible && smile}</h2>
        <img src={avatar} />
      </article>
    );

  }
}

export default User;
