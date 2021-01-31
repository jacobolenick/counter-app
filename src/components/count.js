import React, { Component } from 'react'

 class Count extends Component {
  render() {
    return (
      <div>
      <h1>{this.props.title}</h1>
      {this.props.count}
      </div> 
    )
  }
}
export default Count;