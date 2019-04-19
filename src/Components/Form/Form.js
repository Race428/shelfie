import React, { Component } from 'react'

export default class Form extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
  }


  imageAdd(value) {
    this.setState({ imgurl: value })
  }

  productNameAdd(value) {
    this.setState({ name: value })
  }

  priceAdd(value) {
    this.setState({ price: value })
  }


  
  render() {

    return (
      <div>
        <input className='imageURL' placeholder='url'></input>
        <input className='productName' placeholder='product name'></input>
        <input className='price' placeholder='price' 
        onChange={(e => this.priceAdd(e.target.value)
        )}></input>
        <button className='cancel'>Cancel</button>
        <button className='add' onClick={}>Add To Inventory</button>


      </div>
    )
  }
  
}