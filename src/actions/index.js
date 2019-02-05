import {
    ADD_REMINDER,
    DELETE_REMINDER,
    CLEAR_ALL_REMINDERS
} from '../constant';

export function addReminders(text, dueDate) {
    return {
        type: ADD_REMINDER,
        text,
        dueDate
    };
}

export function deleteReminder(id) {
    return {
        type: DELETE_REMINDER,
        id
    };
}

export function clearAllReminders() {
    return {
        type: CLEAR_ALL_REMINDERS,
    };
}