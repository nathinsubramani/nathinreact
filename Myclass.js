import React, { Component } from 'react'

export default class Myclass extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"hi all"
        }

    }
    handleClick=() =>{
        this.setState({
            
                message:"nathin❤️ varshaa"
            });
        
    }
  render() {
    return (
      <div>
        <h1 >
         {this.state.message}
        </h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
    }
}
