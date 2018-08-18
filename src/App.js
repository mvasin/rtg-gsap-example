import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import TransitionRoute from './TransitionRoute';
import Menu from './Menu';
import Page1 from './Page1';
// import Page2 from './Page2';
import { fadeInOut } from './transitions';
import { specificTransition } from './Page2';
import Homepage from './Homepage';
import { TimelineLite } from 'gsap/all';

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
  // for for all route transitions that want to be not ahead of the other
  commonTimeline = new TimelineLite();
  fadeInOutOnCT = fadeInOut.bind(null, this.commonTimeline);
  specificTransitionCT = specificTransition.bind(null, this.commonTimeline);
  fadeInOutOnSeparateTimeline = fadeInOut.bind(null, new TimelineLite());

  render() {
    return (
      <Router>
        <Wrapper>
          <TransitionRoute
            key="menu"
            path="/"
            component={Menu}
            transition={this.fadeInOutOnSeparateTimeline}
          />
          <TransitionRoute key="/" path="/" exact component={Homepage} />
          <TransitionRoute
            key="/page1"
            path="/page1"
            component={Page1}
            transition={this.fadeInOutOnCT}
          />
          {/* <TransitionRoute
            key="/page2"
            path="/page2"
            component={Page2}
            transition={this.specificTransitionCT}
          /> */}
        </Wrapper>
      </Router>
    );
  }
}

export default App;
