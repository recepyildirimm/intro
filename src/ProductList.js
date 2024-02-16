import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class ProductList extends Component {

  state = {
    products: []
  }
  render() {
    return (
      <div>
        <Table
        >
          <thead>
            <tr>
              <th>id</th>
              <th>productName</th>
              <th>categoryId</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row"> {product.id}</th>
                <td>{product.productName}</td>
                <td> {product.categoryId}</td>
                <td> {product.quantityPerUnit}</td>
                <td> {product.unitPrice}</td>
                <td> {product.unitsInStock}</td>
                <td> <Button onClick={() => this.props.addToCart(product)} color="info">Add </Button></td>
              </tr>
            )
            )
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
