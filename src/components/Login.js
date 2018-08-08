import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../index.css';


export default class Login extends Component {
  state = {
    email: "",
    password: ""
    };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let password = document.cookie.match(new RegExp(this.state.email + '=([^;?]+)'));
    if(this.state.password === password[1]) {
      this.props.history.push('/TODO')
   }
  }

  render() {
   console.log(this);
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <Button
            block
            onClick={() => this.props.history.push('/SIGNUP')}
            bsSize="large"
            type="button"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}