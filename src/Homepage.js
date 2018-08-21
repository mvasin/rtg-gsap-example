import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: pink;
  flex: auto;
  padding-top: 4.5rem;
`;

export default class Homepage extends React.Component {
  // minimum what's needed for a page without transitions to work
  componentDidUpdate(prevProps) {
    if (prevProps.stage === this.props.stage) return;
    if (['entering', 'exiting'].includes(this.props.stage)) {
      this.props.setDone();
    }
  }

  render() {
    return <Wrapper>Homepage. No transitions</Wrapper>;
  }
}
