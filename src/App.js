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

  formatNum(a) {
    return a < 10 ? '0'+a : a
  }
  
  componentDidMount() {
    // get the new date every second
    this.a = setInterval(()=>{
      const newYearDate = '1 Jan 2021'
      const diff = new Date(newYearDate) - new Date()
      const total = Math.floor(diff / 1000)
      const s = total % 60
      const m = Math.floor(total / 60) % 60
      const h = Math.floor(total / 3600) % 24
      const d = Math.floor(total / 3600 / 24)
      
      // set the new date
      this.setState({
        data: [
          { name: "Days", value: this.formatNum(d) },
          { name: "Hours", value: this.formatNum(h) },
          { name: "Minutes", value: this.formatNum(m) },
          { name: "Seconds", value: this.formatNum(s) },
        ]
      })
    }, 1000)

  }
  
  render() {
    return (
      <div>
        <div className="App">
          {this.state.data.map((d, i)=>{
            return <Element setIntervalnt {...d} key={i} /> 
          })}
        </div>
      </div>
    );
  }
}


function Element(d) {
  return  (
    <div className="element">
      <h1>{d.value}</h1>
      <span>{d.name}</span>
    </div>
  )
}
export default App;
