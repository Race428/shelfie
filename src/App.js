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
    inventory:[{
      name:'item1',
      price:12.99,
      image:'https://http.cat/images/404.jpg'

    },
    {
      name:'item2',
      price:12.933,
      image:'https://http.cat/images/404.jpg'

    },
    {
      name:'item3',
      price:1,
      image:'https://http.cat/images/404.jpg'

    }
  ]
    }
  }

  

  
  render() {

    return (
      <div className="App">
        <Dashboard productInfo={this.state.inventory}/>
        <Form />
        <Header /> 


      </div>
    );
  }
}

export default App;
