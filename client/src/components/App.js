import React, { Component } from 'react';

import Header from './header/header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './main/main';
import Configure from './configure/configure';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <main>
            <Route path='/' component={Main} exact />
            <Route path='/configure' component={Configure} />
          </main>
        </>
      </Router>
    );
  }
}

export default App;
