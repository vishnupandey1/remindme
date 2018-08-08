import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Nav, NavItem } from "react-bootstrap";
import moment from 'moment';
import {
    addReminders,
    deleteReminder,
    clearAllReminders,
    handleLogout
} from '../actions';

class App extends Component {
    state = {
        text: '',
        dueDate: '',
        isLoggedIn:""
    }

    handleOnChangeDateTime = event => this.setState({
        dueDate: event.target.value
    });

    handleInputOnChange = event => this.setState({
        text: event.target.value
    });

    addReminder = () => {
        const { text, dueDate } = this.state;

        this.props.addReminders(text, dueDate);
        
    }

    deleteReminder = event => {
        this.props.deleteReminder(event.target.id);
    }

    handleClearAllReminders = () => this.props.clearAllReminders();
    
    handleLogout = () => this.props.handleLogout(true);

    renderReminders = () => {
        const { reminders } = this.props;

        return (
            <ul className="list-group col-sm-4">
            {
                reminders.map(reminder => (
                    <li key={reminder.id} className="list-group-item">
                        <div className="list-item">
                            <div>{ reminder.text }</div>
                            <div>
                                <em>{ moment(new Date(reminder.dueDate)).fromNow() }</em>
                            </div>
                        </div>
                        <div
                            className="list-item delete-item"
                            onClick={this.deleteReminder}
                            id={reminder.id}
                        >
                            <button >&#x274C;</button>
                        </div>
                    </li>
                ))
            }
            </ul>
        );
    }

    render () {
     //console.log(this)
        return (
            <div className="App">
                <div className="App-title">
                  Remind Me..!
                </div>
                <Nav bsStyle="pills" activeKey={1} onClick={this.handleLogout}>
                <NavItem eventKey={1} href="#">
                Logout
                </NavItem>
                </Nav>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={this.handleInputOnChange}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={this.handleOnChangeDateTime}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.addReminder}
                    >
                        Add Reminder
                    </button>
                </div>
                {this.renderReminders()}
                <button
                    className="btn btn-danger"
                    onClick={this.handleClearAllReminders}
                >
                    Clear All
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
 console.log(state)
    return {
        reminders: state.reminders,
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, { addReminders, deleteReminder, clearAllReminders, handleLogout })(App);
