import React from 'react';

const EditForm = React.createClass({
  getInitialState: function() {
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
  confirmChange() {
    this.props.updateProduct(this.props.productId, this.state.name, this.state.price, this.state.description);
    this.props.formVisible();
  },
  render() {
    return (
      <div hidden={this.props.hidden}>
        <input id="editName" placeholder={this.props.productName} type="text" value={this.state.name} onChange={this.onNameInputChange} required/>
        <input id="editPrice" placeholder={this.props.productPrice} type="number" value={this.state.price} onChange={this.onPriceInputChange} required/>
        <input id="editDescription" placeholder={this.props.productDescription} type="text" value={this.state.description} onChange={this.onDescriptionInputChange} required/>
        <button onClick={this.confirmChange}>Confirm</button>
      </div>
    )
  }
})

export default EditForm;
