import React from 'react';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';

export default class RouteTransition extends React.Component {
  state = { done: false };
  setDone = bool => this.setState({ done: bool });

  render() {
    return (
      <Route path={this.props.path} exact={this.props.exact}>
        {({ match }) => (
          // look ma, no timeout!
          // https://github.com/reactjs/react-transition-group/issues/400
          <Transition
            in={!!match}
            appear
            mountOnEnter
            unmountOnExit
            enter={!this.state.done}
            exit={!this.state.done}
          >
            {transitionStage =>
              // extra 'setDone' param passed to function as a child
              this.props.children(transitionStage, this.setDone)
            }
          </Transition>
        )}
      </Route>
    );
  }
}
