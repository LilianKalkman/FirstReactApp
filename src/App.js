import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import SearchBar from './components/search_bar';
import ProductList from './components/list_products';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductList />
      </div>
    );
  }
}

export default App;
