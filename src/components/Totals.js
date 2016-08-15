import React from 'react';
import ReactDOM from 'react-dom';

const Totals = React.createClass({
  getInitialState() {
    let products = this.props.products;
    let productCount = this.props.products.length;
    let productsPrice = products.forEach(product => {
      productsPrice += parseInt(product.price);
    })
    return {
      totalProducts: productCount,
      totalPrice: productsPrice
    }
  },
  componentDidUpdate() {
    let products = this.props.products;
    let productCount = 0;
    let productsPrice = 0;
    products.forEach(product => {
      productCount++;
      productsPrice += parseInt(product.price);
    })
    this.setState({totalProducts: productCount, totalPrice: productsPrice});
  },
  render() {
    return (
      <div>
        <h2>Totals</h2>
        <h6>Number of Products: {this.state.totalProducts}</h6>
        <h6>Total Price: {this.state.totalPrice}</h6>
      </div>
    )
  }
})

export default Totals;
