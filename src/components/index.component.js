import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  
  componentDidMount() {
    axios
      .get("http://localhost:9000/api/v2/products")
      .then( this.re
        /*response => {
        // this.setState({ product: response.data });
      }*/)
      .catch(function(error) {
        console.log(error);
      });
  }

  re = response => this.setState({ product: response.data })

  
  tabRow() {
    return this.state.product.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    const { product } = this.state;
    if (product) {
      return (
        <div>
          <h3 align="center">Products List</h3>
          <button type="button" className="btn btn-success" onClick={this.refreshPage}>
            <span>Reload</span>
          </button>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>🛒 Product</th>
                <th>Price</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading ...</h1>;
    }
  }
}
