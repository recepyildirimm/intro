import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CategorList extends Component {
  state = {
    categories: [],
  }
 componentDidMount(){
  this.getCategories();
 }
  getCategories = () =>{
    fetch("http://localhost:3000/categories").then(response => response.json())
    .then(data => this.setState({categories:data}))};
  render() {
    return (
      <div>
        <h3 className='mx-4'>{this.props.info.title}</h3>
        <Container>
          <ListGroup>
            {this.state.categories.map(category => (
              <ListGroupItem active = {this.props.currentCategory===category.categoryName?true:false}
                onClick={() => this.props.changeCategory(category)}
                key={category.Id}
              >
                {category.categoryName}
              </ListGroupItem>
            ))}
          </ListGroup>
          <h3>{this.props.currentCategory}</h3> 
        </Container>
      </div>
    );
  }
}
