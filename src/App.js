import './App.css';
import React from 'react';

import HomePage from './pages/homepage/homepage.component';
 
class App extends React.Component{
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
