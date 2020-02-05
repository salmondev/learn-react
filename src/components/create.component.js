import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productName: '',
      productPrice:''
    }
  }
  onChangeProductName(e) {
    this.setState({
      productName: e.target.value
    });
  }
  onChangeProductPrice(e) {
    this.setState({
      productPrice: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      productName: this.state.productName,
      productPrice: this.state.productPrice
    };
    Swal.fire({
      icon: 'success',
      title: 'Product has been added.',
      showConfirmButton: false,
      timer: 1500
    });
    axios.post('http://128.199.208.132:9000/api/v2/products', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      productName: '',
      productPrice: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Product</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Product Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.productName}
                      onChange={this.onChangeProductName}
                      />
                </div>
                <div className="form-group">
                    <label>Product Price: </label>
                    <input type="number" 
                      className="form-control"
                      value={this.state.productPrice}
                      onChange={this.onChangeProductPrice}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Product" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}