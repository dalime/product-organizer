import React from 'react';
import ReactDOM from 'react-dom';

const AddProduct = React.createClass({
  getInitialState() {
    return {
      text: ""
    }
  },
  onInputChange(event) {
    this.setState({text: event.target.value})
  },
  render() {
    return (
      <div>
        <h2>Add New Product</h2>
        <form>
          <input type="text" onChange={this.onInputChange}/>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
})

export default AddProduct;
