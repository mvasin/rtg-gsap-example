import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RouteTransition from './RouteTransition';
import Menu from './Menu';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Homepage from './Homepage';
import { Spring, Transition, animated, config } from 'react-spring';

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

class MountTracker extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  componentWillUnmount() {
    this.props.onUnmount();
  }

  render() {
    return this.props.children;
  }
}

class App extends React.Component {
  // path may not be unique!
  static routes = [
    { path: '/', exact: false, component: Menu },
    { path: '/page1', exact: false, component: Page1 },
    { path: '/page2', exact: false, component: Page2 }
  ];

  state = { currentPathComponents: null, nextPathComponents: null };

  handleMount = index => {
    if (this.state.currentPath === App.routes[index].path) return;
    if (!this.state.currentPath) {
      this.setState({ currentPath: App.routes[index].path });
      return;
    }
    if (!this.state.nextPath) {
      this.setState({ nextPath: App.routes[index].path });
      return;
    }

    // if both currentPath and nextPath slots are busy, do nothing
  };

  handleUnount = index => {};

  render() {
    return (
      <Router>
        <Wrapper>
          {App.routes.map((r, index) => {
            const Component = r.component;
            return (
              <Route path={r.path}>
                {({ match }) => (
                  <Transition {...r.transition}>
                    {!!match &&
                      (styles => (
                        <MountTracker
                          onMount={() => this.handleMount(index)}
                          onUnount={() => this.handleUnount(index)}
                        >
                          <Component styles={styles} />
                        </MountTracker>
                      ))}
                  </Transition>
                )}
              </Route>
            );
          })}
        </Wrapper>
      </Router>
    );
  }
}

export default App;
