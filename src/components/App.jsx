import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    addReminders,
    deleteReminder,
    clearAllReminders
} from '../actions';

class App extends Component {
    state = {
        text: '',
        dueDate: ''
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
                            &#x274C;
                        </div>
                    </li>
                ))
            }
            </ul>
        );
    }

    render () {
        return (
            <div className="App">
                <div className="App-title">Remind Me..!</div>
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
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminders, deleteReminder, clearAllReminders })(App);
