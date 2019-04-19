import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component{





render() {
let info = this.props.productInfo.map((Products)=> {
  return <Product  proInfo = {Products}/> 
  
})
  
return (
  <div> 
    <h2>{info}</h2>
   
  </div>
)
}
}

