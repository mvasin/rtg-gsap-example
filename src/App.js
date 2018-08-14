import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Transition} from 'react-transition-group'
import { TimelineLite } from "gsap/TweenMax";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static homeTransition(_, status, done) {
    console.log('status:', status, 'done callback:', done);
    const tl = new TimelineLite();
    tl.eventCallback('onComplete', done);
    switch (status) {
      case 'entering':
        tl.from('.App-header', 3, {opacity: 0})
          .from('.App-body', 2, {x: -900}, '-=2');
        break;
      case 'exiting':
        tl.to('.App-header', 3, {opacity: 0})
          .to('.App-body', 3, {x: -900}, '-=3');
    }
  }

  static anotherTransition(node, status, done) {
    console.log('status:', status, 'done callback:', done);
    const tl = new TimelineLite();
    tl.eventCallback('onComplete', done);
    switch (status) {
      case 'entering':
        tl.from(node, 3, {opacity: 0})
        break;
      case 'exiting':
        tl.to(node, 3, {opacity: 0})
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/'>
            {({match}) => (
              <Transition appear in={!!match} unmountOnExit addEndListener={App.homeTransition}>
                <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                  </header>
                  <p className="App-body">
                    To get started, edit <code>src/App.js</code> and save to reload. <Link to='/another'>Go another route</Link>
                  </p>
                </div>
              </Transition>
            )}
          </Route>
          <Route path='/another'>
            {({match}) => (
              <Transition appear in={!!match} unmountOnExit addEndListener={App.anotherTransition}>
                <p>
                  Hi from another route. <Link to='/'>Go back</Link>
                </p>
              </Transition>
            )}
          </Route>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
