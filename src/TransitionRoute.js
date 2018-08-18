import React from 'react';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

export default class TransitionRoute extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string,
    transition: PropTypes.func,
    exact: PropTypes.bool
  };

  static defaultProps = {
    transition: (_node, _status, done) => done()
  };

  render() {
    const { path, exact, transition, ...other } = this.props;
    const Component = this.props.component;
    Component.displayName = this.props.component.displayName;
    return (
      <Route path={path} exact={exact}>
        {({ match }) => (
          <Transition
            appear
            mountOnEnter
            unmountOnExit
            in={!!match}
            addEndListener={(node, done) => {
              const status = !!match ? 'entering' : 'exiting';
              transition(node, status, done);
            }}
          >
            <Component {...other} />
          </Transition>
        )}
      </Route>
    );
  }
}
