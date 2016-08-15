import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Product Organizer</h1>
        <ProductList />
      </div>
    )
  }
})

export default App;
