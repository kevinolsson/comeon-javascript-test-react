import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Casino from './Casino';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/casino" component={Casino} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
