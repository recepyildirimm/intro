import Navi from "./Navi";
import React, { Component } from 'react';
import CategorList from "./CategorList";
import ProductList from "./ProductList";
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import alertify from "alertifyjs"
import { Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class APP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: "",
      products: [],
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

  }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  addToCart(product) {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 2);

  }
  removeFromCart(product) {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " remove from cart!", 2);

  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Ürün Listesi" };
    let categoryInfo = { title: "Kategori" };

    return (
      <div className="App">
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Row>
          <Col xs="3">
            <CategorList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo}
            />
          </Col>
          <Col xs="9">
            <h3>{this.state.currentCategory}</h3>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ProductList
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                  />
                }
              />
              <Route path="/cart" element={<CartList
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              />} />
              <Route path="form1" element={<FormDemo1 />}></Route>
              <Route path="form2" element={<FormDemo2 />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </div>
    );
  }
}
