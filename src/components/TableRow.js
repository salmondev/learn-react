import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        Swal.fire({
            title: 'Delete Confirmation',
            text: 'Comfirm to delete data?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Product data has been deleted.',
                'success'
              );
              // 
              axios.delete('http://localhost:9000/api/v2/products/'+this.props.obj._id)
                .then(console.log('Deleted'))
                .catch(err => console.log(err))
            }
          });
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.productName}
          </td>
          <td>
            {this.props.obj.productPrice}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;