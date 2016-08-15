import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Totals from './Totals';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Product Organizer</h1>
        <AddProduct />
        <Totals />
        <ProductList />
      </div>
    )
  }
})

export default App;
