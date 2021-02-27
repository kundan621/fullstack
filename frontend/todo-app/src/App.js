import React, { Component } from 'react';

import './App.css';
import Counter from './components/counter/Counter';
import  FirstComponent from './components/my-learnings/FirstComponent';
import { SecondComponent } from './components/my-learnings/SecondComponent';
import { ThirdComponent } from './components/my-learnings/ThirdComponent';
 
class App extends Component {
  render() {
    return (
      <div className="App">
         <Counter/>
      </div>
    );
  }
}
// eslint-disable-next-line no-unused-vars
class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
         Hello world
         <FirstComponent/>
         <SecondComponent/>
         <ThirdComponent/>
      </div>
    );
  }
}
export default App;