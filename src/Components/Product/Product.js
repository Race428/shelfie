import React, { Component } from 'react'

class Product extends Component{
constructor(props){
  super(props)
  
  this.state = {
    name: props.name,
    price: props.price,
    image: props.image
  }
}

render() {

return (

  <div className = 'name'> 
  <h1>{this.props.proInfo.name}</h1> 
  <h1>{this.props.proInfo.price}</h1> 
  <img src={this.props.proInfo.image} alt='hi'/>

  </div>
)
}
}

export default Product 