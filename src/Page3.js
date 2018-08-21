import React from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap/all';

const Wrapper = styled.div.attrs({ className: 'hidden' })`
  background: orange;
  flex: auto;
  padding-top: 4.5rem;
`;

export default class Page3 extends React.Component {
  entering = () => {
    const tl = this.props.timeline || new TimelineLite();
    tl.call(this.props.done);
  };

  exiting = () => {
    const tl = this.props.timeline || new TimelineLite();
    tl.call(this.props.done);
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
