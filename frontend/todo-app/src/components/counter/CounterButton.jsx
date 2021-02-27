import { Component } from 'react';
import './counter.scss';
export default class  CounterButton extends Component {

    constructor(){
        super();
        this.state={
            counter:0,
            
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }

    render(){
    return (
      <div className="CounterButton">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
        {/* <span className="count">{this.state.counter}</span> */}
      </div>
    );
    }

     increment(){
        this.setState({
            counter: this.state.counter+this.props.by
        });
        this.props.incrementMethod(this.props.by);
    }
    decrement(){
        this.setState({
            counter: this.state.counter-this.props.by
        });
        this.props.decrementMethod(this.props.by);
    }
}
//if nothing given set default by=1
CounterButton.defaultProps={
    by:1
}

