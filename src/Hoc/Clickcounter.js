import React,{Component} from 'react';
import EnComponent from './HocEx';
class Clickcounter extends Component {
    /*constructor(props) {
      super(props)
    
      this.state = {
        count:0
         
      }
    }
    inc=()=>{
        this.setState({count:this.state.count+1})
    }*/
  render() {
    return (
      <div>
      <button onClick={this.props.increment}>Click{this.props.name}{this.props.count}</button>
      </div>
    )
  }
}
export default EnComponent(Clickcounter);
