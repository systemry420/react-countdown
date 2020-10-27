import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        { name: "Days", value: 0 },
        { name: "Hours", value: 0 },
        { name: "Minutes", value: 0 },
        { name: "Seconds", value: 0 },
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        {/* <Element data={this.state.data[0]}/> */}
        {this.state.data.map((d, i)=>{
          return <Element {...d} key={i} />
        })}
      </div>
    );
  }
}

function Element({name, value}) {
  return  (
    <div className="element">
      <h2>{value}</h2>
      <span>{name}</span>
    </div>
  )
}
export default App;
