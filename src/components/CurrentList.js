import React from 'react';
import EditForm from './editform.js';

const Product = React.createClass({
  getInitialState() {
    return {
      visible: "hidden",
      nameAscending: true,
      priceAscending: true,
      descriptionAscending: true
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
      <tr>
      <td>
      {this.props.productName}
      </td>
      <td>
      {this.props.productPrice}
      </td>
      <td>
      {this.props.productDescription}
      </td>
      <td>
      <EditForm hidden={this.state.visible} formVisible={this.setFormHidden} updateProduct={this.props.updateProduct} productId={this.props.productId} productName={this.props.productName} productPrice={this.props.productPrice} productDescription={this.props.productDescription}/>
      </td>
      <td>
      <button className="btn btn-default" onClick={this.deleteProduct}>Delete</button>
      </td>
      <td>
      <button className="btn btn-primary" onClick={this.updateButtonClick}>Update</button>
      </td>
      </tr>
    )
  }
})

const CurrentList = React.createClass({
  getInitialState() {
    return {
      products: this.props.currProducts
    }
  },
  componentDidUpdate() {
    this.setState({products: this.props.currProducts});
  },
  sortName() {
    if (this.state.nameAscending) {
      this.setState({nameAscending: false});
    }
    let products = this.state.products;
    let sortProducts = products.sort(function(a,b) {
      let keyA = a.name, keyB = b.name;
      if (this.state.nameAscending) {
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
      } else {
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
      }
      return 0;
    });
    this.setState({products: sortProducts});
  },
  sortPrice() {
    if (this.state.priceAscending) {
      this.setState({priceAscending: false});
    }
    let products = this.state.products;
    let sortProducts = products.sort(function(a,b) {
      let keyA = parseInt(a.price), keyB = parseInt(b.price);
      if (this.state.priceAscending) {
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
      } else {
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
      }
      return 0;
    });
    this.setState({products: sortProducts});
  },
  sortDescription() {
    if (this.state.descriptionAscending) {
      this.setState({descriptionAscending: false});
    }
    let products = this.state.products;
    let sortProducts = products.sort(function(a,b) {
      let keyA = a.description, keyB = b.description;
      if (this.state.descriptionAscending) {
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
      } else {
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
      }
      return 0;
    });
    this.setState({products: sortProducts});
  },
  render() {
    let productList = this.state.products.map(product => {
      return <Product key={product.id} productId={product.id} productName={product.name} productPrice={product.price} productDescription={product.description} deleteProduct={this.props.delete} updateProduct={this.props.update}/>
    });
    return (
      <table>
        <thead>
          <tr>
            <th onClick={this.sortName}>Name</th>
            <th onClick={this.sortPrice}>Price</th>
            <th onClick={this.sortDescription}>Description</th>
            <th></th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
        {productList}
        </tbody>
      </table>
    )
  }
})

export default CurrentList;
