import { Component } from "react";
import CounterButton from "./CounterButton";

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
            
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }
    render() {
      return (
        <div className="Counter">
           <CounterButton by ={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
           <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
           <button onClick={this.reset}>reset</button>
           <span className="count">{this.state.counter}</span>

        </div>
      );
    }

    increment(by){
        console.log('increment from parent')
      this.setState({
            counter: this.state.counter+by
        });
    }

    decrement(by){
      this.setState({
            counter: this.state.counter-by
        });
    }
    reset(){
        this.setState({
              counter: 0
          });
      }
  }