import React from 'react';
import { Route } from 'react-router-dom';
import { Transition } from 'react-spring';
import PropTypes from 'prop-types';

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

class RouteTransition extends React.Component {
  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.node.isRequired,
        exact: PropTypes.bool,
        transition: PropTypes.shape({
          from: PropTypes.object,
          enter: PropTypes.object,
          leave: PropTypes.object
        })
      })
    )
  };

  // we register all displayed components in the state to make sure we don't display
  // next route components before previous route components finished animating out
  //
  // we don't need more then two routes (current and next); if user clicks next link
  // and then the other, if in the meantime middle route didn't become current
  // (it could if components from previous "current" animated out), we won't care about
  // the middle route and will start animating in the latest only
  state = {
    current: { path: '', components: [] },
    next: { path: '', components: [] }
  };

  pathOf(index) {
    return this.props.routes[index].path;
  }

  // Called when an animated component mounts, so its index is saved to state and kept
  // an eye on until it transitions out.
  handleMount = index => {
    const { routes } = this.props;
    if (this.state.current.path === this.pathOf(index)) return;
    if (!this.state.currentPath) {
      this.setState({ currentPath: routes[index].path });
      return;
    }
    if (!this.state.nextPath) {
      this.setState({ nextPath: routes[index].path });
      return;
    }

    // if both currentPath and nextPath slots are busy, do nothing
  };

  handleUnount = index => {};

  render() {
    return this.props.routes.map((r, index) => {
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
    });
  }
}

export default RouteTransition;
