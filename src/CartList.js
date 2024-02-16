import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class CartList extends Component {
    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>category Id</th>
                        <th>product Name</th>
                        <th>Unit Price</th>
                        <th>units In Stock</th>
                        <th>Quantity </th>
                        <th></th>


                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <button color='danger'onClick={() => this.props.removeFromCart(cartItem.product)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>

        )
    }

    render() {
        return (
            <div>

                {this.renderCart()}


            </div>
        )
    }
}
