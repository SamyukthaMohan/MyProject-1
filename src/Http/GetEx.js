import React, { Component } from 'react'
import axios from 'axios'
export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(e=>
            {
            this.setState({posts:e.data})
              console.log(e.data)})
          .catch(err=>console.log(err))
      }
  render() {
    const {posts}=this.state
    return (
      <div>
      
      {posts.map(p=> <div key={p.id}> {p.title}</div>)
    }
     
     
      
      </div>
    )
  }
}
