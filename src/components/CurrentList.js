import React from 'react';
import EditForm from './editform.js';

const Product = React.createClass({
  getInitialState() {
    return {
      visible: "hidden"
    }
  },
  deleteProduct() {
    let deleteId = this.props.productId;
    this.props.deleteProduct(deleteId);
  },
  setFormHidden() {
    this.setState({visible: "hidden"});
  },
  updateButtonClick() {
    this.setState({visible: ""});
  },
  render() {
    return (
      <li>
      <button className="btn btn-default" onClick={this.deleteProduct}>
      Delete
      </button>
      <button className="btn btn-primary" onClick={this.updateButtonClick}>
      Update
      </button>
        {this.props.productName}
        {this.props.productPrice}
        {this.props.productDescription}
        <EditForm hidden={this.state.visible} formVisible={this.setFormHidden} updateProduct={this.props.updateProduct} productId={this.props.productId} productName={this.props.productName} productPrice={this.props.productPrice} productDescription={this.props.productDescription}/>
      </li>
    )
  }
})

const CurrentList = React.createClass({
  render() {
    let productList = this.props.currProducts.map(product => {
      return <Product key={product.id} productId={product.id} productName={product.name} productPrice={product.price} productDescription={product.description} deleteProduct={this.props.delete} updateProduct={this.props.update}/>
    });
    return (
      <table>
        {productList}
      </table>
    )
  }
})

export default CurrentList;
