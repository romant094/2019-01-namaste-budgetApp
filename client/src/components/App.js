import React, { Component } from 'react';

import Header from './header/header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './main/main';
import Configure from './configure/configure';

// fetch('localhost:3001/buy')
//   .then(() => {
//     console.log(`It's OK!`);
//   })
//   .catch(() => {
//     console.log('Something wrong...');
//   });
fetch('localhost:3001/buy')
.then(response => response.json())
.then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

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
