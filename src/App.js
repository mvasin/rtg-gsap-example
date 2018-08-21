import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TransitionRoute from './TransitionRoute';
import RouteTransition from './RouteTransition';
import Menu from './Menu';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import { fadeInOut, instant, downUp } from './transitions';
// import { specificTransition } from './Page2';
import Homepage from './Homepage';
import { TimelineLite } from 'gsap/all';
import { Transition } from 'react-transition-group';

injectGlobal`
  html, body {
    margin: 0;
  }

  .hidden {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
`;

class App extends React.Component {
  // commonTimeline = new TimelineLite();

  render() {
    return (
      <Router>
        <Wrapper>
          <RouteTransition key="menu" path="/">
            {(stage, setDone) => <Menu stage={stage} setDone={setDone} />}
          </RouteTransition>

          <RouteTransition key="/" path="/" exact>
            {(stage, setDone) => <Homepage stage={stage} setDone={setDone} />}
          </RouteTransition>

          <RouteTransition key="/page1" path="/page1">
            {(stage, setDone) => <Page1 stage={stage} setDone={setDone} />}
          </RouteTransition>

          <RouteTransition key="/page2" path="/page2">
            {(stage, setDone) => (
              // add tl={this.commonTimeline} to pass the common timeline
              <Page2 stage={stage} setDone={setDone} />
            )}
          </RouteTransition>

          <RouteTransition key="/page3" path="/page3" exact>
            {(stage, setDone) => <Page3 stage={stage} setDone={setDone} />}
          </RouteTransition>

          <RouteTransition key="/page4" path="/page4">
            {(stage, setDone) => <Page4 stage={stage} setDone={setDone} />}
          </RouteTransition>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
