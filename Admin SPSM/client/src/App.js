import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './components/auth/Login'
import Admin from './components/Admin'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/admin' render={() => (<Admin r='s' />)} />
            <Route exact path='/student' render={() => (<Admin r='s' />)} />
            <Route exact path='/prof' render={() => (<Admin r='p' />)} />
            <Route exact path='/Schedulling' render={() => (<Admin r='sc' />)} />
            <Route exact path='/Reports' render={() => (<Admin r='r' />)} />
            <Route exact path='/Event' render={() => (<Admin r='e' />)} />

          </Switch>
        </BrowserRouter>


      </Provider>
    );
  }
}

export default App;
