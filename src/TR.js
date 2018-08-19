import React from 'react';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import ChildComponent from './Page4';

// resets doneStatus in upper component state to false on every
// transition stage change
class TransitionWrapper extends React.Component {
  componentDidMount() {
    // if it just mounted, children didn't transition for sure. Kids will
    // tell on their own.
    this.props.setTransitionEnded(false);
  }

  componentDidUpdate(prevProps) {
    // if the transition stage just changed, the children are not done
    // transitioned and will inform upper component on their own.
    if (prevProps.in !== this.props.in) this.props.setTransitionEnded(false);
  }

  render() {
    const { setTransitionEnded, ...other } = this.props;
    return <Transition {...other} />;
  }
}

class TransitionFinishedStateHolder extends React.Component {
  state = { transitionEnded: false };

  setTransitionEnded = bool => {
    this.setState({ transitionEnded: bool });
  };

  render() {
    return (
      <Route path="/page4">
        {({ match }) => (
          <TransitionWrapper
            in={!!match}
            appear
            mountOnEnter
            unmountOnExit
            setTransitionEnded={this.setTransitionEnded}
            addEndListener={(_, done) => this.state.transitionEnded && done()}
          >
            {transitionStage => (
              <ChildComponent
                transitionStage={transitionStage}
                setTransitionEnded={this.setTransitionEnded}
              />
            )}
          </TransitionWrapper>
        )}
      </Route>
    );
  }
}

export default TransitionFinishedStateHolder;
