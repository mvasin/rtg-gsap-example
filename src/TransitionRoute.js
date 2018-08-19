import React from 'react';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { TimelineLite } from 'gsap/all';

export default class TransitionRoute extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string,
    transition: PropTypes.func,
    exact: PropTypes.bool
  };

  // if we didn't recieve timeline via props, we'ra gonna run on our own
  // NB this code doesn't expect timeline prop to be modified after instatiation
  timeline = this.props.timeline || new TimelineLite();
  transition =
    this.props.transition || ((_tl, _node, _status, _delayIn, done) => done());

  render() {
    const { path, exact, transition, delayIn, ...other } = this.props;
    const { component, ...cleanOther } = other;
    const Component = this.props.component;
    Component.displayName = 'InTransition';

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
              this.transition(this.timeline, node, status, delayIn, done);
            }}
          >
            <Component {...cleanOther} />
          </Transition>
        )}
      </Route>
    );
  }
}
