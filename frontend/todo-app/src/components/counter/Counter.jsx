import { Component } from 'react';
import './counter.scss';
export default class counter extends Component {

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
    }

    render(){
    return (
      <div className="Counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
    }

     increment(){
        this.setState({
            counter: this.state.counter+1,
        });
    }
}

