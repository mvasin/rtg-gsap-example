import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { TimelineLite } from 'gsap/TweenMax';
import logo from './logo.svg';
import './App.css';

/* eslint-disable default-case */
class Page1 extends Component {
  componentDidMount() {
    this.props.tl
      .from(this.body, 2, { x: '-100%' })
      .from(this.header, 2, { opacity: 0 }, '-=2');
  }

  componentWillUnmount() {
    this.props.tl.clear();
  }

  render() {
    return (
      <div className="App">
        <header ref={x => (this.header = x)} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Homepage transition status: {this.props.status}
          </h1>
        </header>
        <p className="App-body" ref={x => (this.body = x)}>
          This is an animated home page.{' '}
          <Link to="/another">Go another route</Link>
        </p>
      </div>
    );
  }
}

const Page2 = () => (
  <p>
    Hi from another route. <Link to="/">Go back</Link>
  </p>
);

class App extends React.Component {
  constructor() {
    super();
    this.tl = new TimelineLite({ paused: true });
    window.tl = this.tl;
    this.homeTransition = this.homeTransition.bind(this);
  }

  homeTransition(_, status, done) {
    console.log('homeTransition');
    this.tl.eventCallback('onComplete', done);
    this.tl.eventCallback('onReverseComplete', done);
    switch (status) {
      case 'entering':
        this.tl.play();
        break;
      case 'exiting':
        this.tl.reverse();
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/">
            {({ match }) => (
              <Transition
                appear
                in={!!match}
                mountOnEnter
                unmountOnExit
                addEndListener={this.homeTransition}
              >
                {status => <Page1 status={status} tl={this.tl} />}
              </Transition>
            )}
          </Route>
          <Route path="/another" component={Page2} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
