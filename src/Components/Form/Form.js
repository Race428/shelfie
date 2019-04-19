import React, { Component } from 'react'

export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      price: 0,
      imgurl: '',
      product_inventory:[]
    }
  }



  imageAdd(value) {
    this.props.addProductUrl(this.state.name)
    this.setState({ imgurl: value })
  }

  productNameAdd(value) {
    this.props.addProductName(this.state.name)
    this.setState({ name: value })
  }

  productPriceAdd(value) {
    this.props.addProductPrice(this.state.price)
    this.setState({ price: value })
  }




// addInvetoryFn(e){
//   let productName = this.state.name
//   let productPrice = this.state.price
//   let productUrl = this.state.url 
//   const inventoryItem = { 'name': productName,'price':productPrice,'url':productUrl}
//   this.state.product_inventory.push(inventoryItem)
// }

  render() {

    return (
      <div>
        <input className='imageURL' placeholder='url'></input>
        <input className='productName' placeholder='product name'></input>
        <input className='price' placeholder='price' 
        onChange={(e => this.priceAdd(e.target.value)
        )}></input>
        <button className='cancel'>Cancel</button>
        <button className='add' onClick={e=> this.addInvetoryFn(e.target.value)}>Add To Inventory</button>


      </div>
    )
  }
  
}