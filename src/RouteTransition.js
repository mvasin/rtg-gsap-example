import React from 'react';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';

export default class RouteTransition extends React.Component {
  render() {
    return (
      <Route path={this.props.path} exact={this.props.exact}>
        {({ match }) => (
          <Transition
            in={!!match}
            appear
            mountOnEnter
            unmountOnExit
            timeout={1000000}
          >
            {(transitionStage, _, done) =>
              this.props.children(transitionStage, done)
            }
          </Transition>
        )}
      </Route>
    );
  }
}
