import { Component } from 'react';
import './counter.scss';
export default class  CounterButton extends Component {

    render(){
    return (
      <div className="CounterButton">
        <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      </div>
    );
    }
}
//if nothing given set default by=1
CounterButton.defaultProps={
    by:1
}

