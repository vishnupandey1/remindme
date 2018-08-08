import { bake_cookie, read_cookie } from 'sfcookies';
import {
    ADD_REMINDER,
    DELETE_REMINDER,
    CLEAR_ALL_REMINDERS,
    HANDLE_LOGOUT
} from '../constant';

const initialState = {
  isLoggedIn: false,
  reminders: []
}

const reminder = action => {
    const { text, dueDate } = action;

    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state = initialState, id) => {
    return state.reminders.filter(reminder => reminder.id != id);
}

const reminders = (state = initialState, action) => {
    let reminders = null;
    
    state.reminders = read_cookie('reminders');

    switch (action.type) {
        case ADD_REMINDER:
            reminders = [
                ...state,
                reminder(action)
            ];
            bake_cookie('reminders', reminders);

            return {...state, reminders};
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);

            return {...state, reminders};
        case CLEAR_ALL_REMINDERS:
            reminders = [];
            bake_cookie('reminders', reminders);

            return {...state,reminders};
        case HANDLE_LOGOUT:
          return {
            ...state,
            isLoggedIn: action.value
          }
        default:
            return state;
    }
}

export default reminders;