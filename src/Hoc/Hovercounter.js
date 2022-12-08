import React, { Component } from 'react'
import EnComponent from './HocEx'
 class Hovercounter extends Component {
    /*constructor(props) {
      super(props)
    
      this.state = {
        count:0
        
      }
    }
    inc=()=>
    {
        this.setState({count :this.state.count+1});
    }*/
  render() {
    const {count,increment}=this.props
    return (
      <div>
      <h1 onMouseOver={increment}>{count}</h1>
      </div>
    )
  }
}
export default EnComponent(Hovercounter);