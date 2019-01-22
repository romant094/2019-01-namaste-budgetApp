import React, { Component } from 'react';

import Header from './header/header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './main/main';
import Configure from './configure/configure';

class App extends Component {
  constructor() {
    super();
    this.state = {
      budget: 0
    }
  }
  componentDidMount() {
    fetch('http://localhost:8000/budget')
      .then(response => response.json())
      .then(response => {
        this.setState({
          budget: response
        })
      });
  }

  render() {
    const WrappedMain = () => {
      return (
        <>
          <Main budget={this.state.budget} />
        </>
      )
    }
    return (
      <Router>
        <>
          <Header />
          <main>
            <Route path='/' component={WrappedMain} exact />
            <Route path='/configure' component={Configure} />
          </main>
        </>
      </Router>
    );
  }
}

export default App;
