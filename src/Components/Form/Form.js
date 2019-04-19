import React, { Component } from 'react'

 class Form extends Component {

  constructor(props) {
    super(props)

    this.initialstate = {
      name: '',
      price: '',
      imgurl: '',
    }
    this.state = this.initialstate
  }



  imageAdd(value) {
    this.setState({ imgurl: value })
  }

  // productNameAdd(e) {
  //   this.props.addProductName(this.state.name)
  //   this.setState({name: e.target.value})
    
  // }


  handleAddProductName(productName){
    this.setState({name: productName})
  }
  productPriceAdd(value) {
    this.setState({ price: value })
  }


  resetButton(){
    this.setState({
      name:'',
      price:'',
      imgurl:''})
  
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
       
        
      <input placeholder='product name'  
      value = {this.state.name}
      onChange={e => this.handleAddProductName(e.target.value)}/> 
        
        <input placeholder= 'price'
        value = {this.state.price}
        onChange={e => this.productPriceAdd(e.target.value)}/>
        <input placeholder = 'image url'
        value = {this.state.imgurl}
        onChange={e => this.imageAdd(e.target.value)}/>
        <button onClick={e => this.resetButton('')}>Cancel</button>         
        <button >Add to Inventory</button>


      </div>
    )
  }
  
}

export default Form 