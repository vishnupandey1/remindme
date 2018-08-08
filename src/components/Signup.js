import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Col, Form } from "react-bootstrap";
import '../index.css';

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
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
    document.cookie = this.state.email + "=" + this.state.password;
    this.props.history.push('/TODO')
  }

  render() {
   console.log(this.state.email)
    return (
     <div className="Signup">
       <Form horizontal onSubmit={this.handleSubmit}>
         <FormGroup controlId="email">
           <Col componentClass={ControlLabel} sm={2}>
             Email
           </Col>
           <Col sm={6}>
             <FormControl
               autoFocus
               onChange={this.handleChange}
               value={this.state.email}
               type="email"
             />
           </Col>
         </FormGroup>
         <FormGroup controlId="password">
           <Col componentClass={ControlLabel} sm={2}>
             Password
           </Col>
           <Col sm={6}>
             <FormControl
               value={this.state.password}
               onChange={this.handleChange}
               type="password"
             />
           </Col>
         </FormGroup>
         <FormGroup controlId="confirmPassword">
           <Col componentClass={ControlLabel} sm={2}>
             Confirm Password
           </Col>
           <Col sm={6}>
             <FormControl
               value={this.state.confirmPassword}
               onChange={this.handleChange}
               type="password"
             />
           </Col>
         </FormGroup>
         <FormGroup>
           <Col smOffset={2} sm={10}>
             <Button bsSize="xsmall" disabled={!this.validateForm()} type="submit">Submit</Button>
           </Col>
         </FormGroup>
       </Form>
     </div>
    )
  }
}
