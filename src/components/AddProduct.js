import React from 'react';
import ReactDOM from 'react-dom';

const AddProduct = React.createClass({
  getInitialState() {
    return {
      name: "",
      price: "",
      description: ""
    }
  },
  onNameInputChange(event) {
    this.setState({name: event.target.value});
  },
  onPriceInputChange(event) {
    this.setState({price: event.target.value});
  },
  onDescriptionInputChange(event) {
    this.setState({description: event.target.value});
  },
  addProduct() {
    let product = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      id: uuid()
    };
    this.props.addProduct(product);
    this.setState({name: "", price: "", description: ""});
  },
  render() {
    return (
      <div>
        <h2>Add New Product</h2>
        <form>
          <input id="iptName" type="text" onChange={this.onNameInputChange} placeholder="name" required/>
          <input id="iptPrice" type="text" onChange={this.onPriceInputChange} placeholder="price" required/>
          <input id="iptDescription" type="text" onChange={this.onDescriptionInputChange} placeholder="description" required/>
          <button className="btn btn-primary" onClick={this.addProduct}>Add</button>
        </form>
      </div>
    )
  }
})

export default AddProduct;
