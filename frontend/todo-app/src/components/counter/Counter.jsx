import './counter.scss';
export default function Counter() {
    return (
      <div className="Counter">
        <button onClick={increment}>+1</button>
        <span className="count">0</span>
      </div>
    );
}

function increment(){
    console.log('increment')
}