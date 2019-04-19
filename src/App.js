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
      inventory:''
    }
  }

  handleAddProduct(product){
    this.setState({inventory: [...this.state.inventory, product]})
  }
  
  render() {

    return (
      <div className="App">
        <Dashboard/>
        <Form /> 
        <Header /> 


      </div>
    );
  }
}

export default App;
