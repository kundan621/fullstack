import React, { Component } from 'react';

import './App.css';
import  FirstComponent from './components/my-learnings/FirstComponent';
import { SecondComponent } from './components/my-learnings/SecondComponent';
import { ThirdComponent } from './components/my-learnings/ThirdComponent';
 
class App extends Component {
  render() {
    return (
      <div className="App">
         Hello world
         <FirstComponent/>
         <SecondComponent/>
         <ThirdComponent/>
      </div>
    );
  }
}
export default App;