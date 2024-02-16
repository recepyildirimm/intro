import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from "alertifyjs"

export default class FormDemo2 extends Component {

    state = { email: "", password: "", city: "", description: "" }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " added to db!");
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>

                        <Label for="email">Email</Label>
                        <Input name="email"
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>

                        <Label for="password">Password</Label>
                        <Input name="password"
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>

                        <Label for="description">Description</Label>
                        <Input name="description"
                            type="textarea"
                            id="description"
                            placeholder="Enter description"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Şehir</Label>
                        <Input type='select' name='city' id='city' onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>Manisa</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Denizli</option>
                            <option>Yozgat</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>




            </div>
        )
    }
}
