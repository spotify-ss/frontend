import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggingIn, loggingOut, signingUp } from '../actions/auth';

import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router basename="/app">
        <div className="App">
          <Route
            path="/login"
            render={props => (
              <div>
                <Login {...props} onSubmit={this.props.loggingIn} />
              </div>
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <div>
                <Login {...props} signingUp onSubmit={this.props.signingUp} />
              </div>
            )}
          />
          <PrivateRoute exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loggingIn, loggingOut, signingUp }
)(App);
