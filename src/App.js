import React, { Component } from 'react'
import Count from './components/count.js'

class App extends Component {
  state = { count: 0 }
  render() {
    return (
      <div>
       
        <Count title={"Jacobs Counter!!"} count = {this.state.count} />
        <div>
        <button onClick={() => {this.setState({count:this.state.count +1 })}}>+</button>
        <button onClick={() => {this.setState({count: 0 })}}>Reset</button>
        <button onClick={() => {this.setState({count: this.state.count -1 })}}>-</button>
      </div>
      </div>
    )
  }
}

export default App