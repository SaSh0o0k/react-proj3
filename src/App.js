import './App.css';
import React from 'react';
import UserSection from './components/UserSection';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <UserSection />
      </>
    )
  }
}



export default App;
