import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Search from './components/search/Search';
import Products from './components/products/Products'
import axios from 'axios'

class App extends Component {
state = {
  ApiKey : '3443ebb7ea3c44b48fa252753227fa9d',
  secretKey : '2d69cce4369c0de9c05248e835e111c27f5739e8',
  URL: 'https://rest.viglink.com/api/product/search',
  proxy: 'https://cors-anywhere.herokuapp.com/',
  search: '',
  products : []
}

setKey = (event) =>{
  this.setState({
    ApiKey: event.target.value
  })
  console.log(this.state.ApiKey)
}

setSecret = (event) => {
  this.setState({
    secretKey: event.target.value
  })
  console.log(this.state.secretKey)
}

 searchProducts = (event) => {
   
   if(event.key === 'Enter') {
    this.setState({
      search: event.target.value,
   
    })
    console.log(this.state.search)
   }
  
 
}

async componentDidUpdate(prevProps, prevState){
 if(prevState.search !== this.state.search) {
  const response = await axios.get('https://cors-anywhere.herokuapp.com/https://rest.viglink.com/api/product/search', {
    params: {
        apiKey: this.state.ApiKey,
        query: this.state.search,
        country: 'uk'
    },
    headers: {Authorization: `secret ${this.state.secretKey}`}
});

this.setState({
  products: response.data.items
})
console.log(response.data.items)
}

}
  render() {
    return (
      <div> 
      <Header />
      <Input
      getApi = {this.setKey}
      getSecret = {this.setSecret}
      />
      <Search
      search = {this.searchProducts}
      />
      <Products
      products = {this.state.products}
      />
      </div>
     
    );
  }
}

export default App;
