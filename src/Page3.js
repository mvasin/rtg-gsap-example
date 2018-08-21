import React from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap/all';

const Wrapper = styled.div`
  background: orange;
  flex: auto;
  padding-top: 4.5rem;
`;

export default class Page3 extends React.Component {
  tl = this.props.tl || new TimelineLite();

  entering = () => {
    const { tl } = this;
    tl.call(this.props.setDone);
    tl.play();
  };

  exiting = () => {
    const { tl } = this;
    tl.clear();
    tl.call(this.props.setDone);
    tl.play();
  };

  componentDidMount() {
    if (this.props.stage === 'entering') this.entering();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stage === this.props.stage) return;

    if (this.props.stage === 'entering') {
      this.entering();
    }

    if (this.props.stage === 'exiting') {
      this.exiting();
    }
  }

  render() {
    return <Wrapper>Page 3. Also without transitions.</Wrapper>;
  }
}
