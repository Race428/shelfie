import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'



class App extends Component {
  constructor(){
    super()

    this.state ={ 
      inventory:[
        {name:''},
        {price:''},
        {url:''}
      ]
    }
  }

  handleAddProductName(productName){
    this.setState({inventory: [...this.state.inventory, {productName}]})
  }

  handleAddProductPrice(productPrice){
    this.setState({inventory: [...this.state.inventory, {productPrice}]})
  }
  handleAddProductUrl(productUrl){
    this.setState({inventory: [...this.state.inventory, {productUrl}]})
  }
  
  render() {

    return (
      <div className="App">
        <Dashboard/>
        <Form 
        addProductName={this.handleAddProductName}
        addProductPrice={this.handleAddProductPrice}
        addProductUrl={this.handleAddProductUrl}
        /> 
        <Header /> 


      </div>
    );
  }
}

export default App;
