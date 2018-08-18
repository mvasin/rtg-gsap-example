import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import TransitionRoute from './TransitionRoute';
import Menu from './Menu';
import Page1 from './Page1';
import Page2 from './Page2';
import { fadeInOut, displayNone } from './transitions';
import { specificTransition } from './Page2';
import Homepage from './Homepage';
import { TimelineLite } from 'gsap/all';
import uuid from 'uuid';

injectGlobal`
  html, body {
    margin: 0;
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
    this.commonTimeline = new TimelineLite({ autoRemoveChildren: false });
    window.tl = this.commonTimeline;
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
            transition={fadeInOut} // on its own timeline
          />

          <TransitionRoute
            key="/"
            path="/"
            exact
            component={Homepage}
            timeline={this.commonTimeline}
            transition={displayNone}
          />

          <TransitionRoute
            key="/page1"
            path="/page1"
            component={Page1}
            timeline={this.commonTimeline} // on common timeline
            transition={fadeInOut}
          />
          <TransitionRoute
            key="/page2"
            path="/page2"
            component={Page2}
            timeline={this.commonTimeline} // on common timeline
            transition={fadeInOut}
          />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
