import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import App from './components/App';
import Signup from './components/Signup';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route  path="/TODO" component={App} />
          <Route  exact path="/" component={Login} />
          <Route  path="/SIGNUP" component={Signup} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);