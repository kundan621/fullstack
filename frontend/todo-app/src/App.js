import React, { Component } from 'react';

import './App.css';
import  FirstComponent from './components/my-learnings/FirstComponent';
import { SecondComponent } from './components/my-learnings/SecondComponent';
import { ThirdComponent } from './components/my-learnings/ThirdComponent';
import TodoApp from './components/todo/TodoApp';
 
class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <Counter/> */}
         <TodoApp/>
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