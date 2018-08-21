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

// you must bind first arg to transition function, giving it either
// a common timelime or individual timeline
class App extends React.Component {
  constructor() {
    super();
    this.commonTimeline = new TimelineLite();
  }

  // if timeline is not passed, private timeline will be created and played
  // (without queuing into global)
  render() {
    return (
      <Router>
        <Wrapper>
          <TransitionRoute
            key="menu"
            path="/"
            component={Menu}
            transition={downUp} // on its own timeline
            delayIn={1}
          />

          <TransitionRoute
            key="/"
            path="/"
            exact
            component={Homepage}
            timeline={this.commonTimeline}
            transition={instant}
          />

          <TransitionRoute
            key="/page1"
            path="/page1"
            component={Page1}
            timeline={this.commonTimeline} // on common timeline
            transition={fadeInOut}
          />
          <RouteTransition
            key="/page2"
            path="/page2"
            timeline={this.commonTimeline} // on common timeline
            transition={fadeInOut}
          >
            {(stage, setDone) => (
              <Page2 stage={stage} setDone={setDone} tl={this.commonTimeline} />
            )}
          </RouteTransition>

          <RouteTransition key="/page3" path="/page3" exact>
            {(stage, setDone) => (
              <Page3 stage={stage} setDone={setDone} tl={this.commonTimeline} />
            )}
          </RouteTransition>

          <RouteTransition key="/page4" path="/page4">
            {(stage, setDone) => (
              <Page4 stage={stage} setDone={setDone} tl={this.commonTimeline} />
            )}
          </RouteTransition>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
