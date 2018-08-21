import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: orange;
  flex: auto;
  padding-top: 4.5rem;
`;

export default class Page3 extends React.Component {
  entering = () => {
    const { tl } = this.props;
    tl.call(this.props.setDone);
    tl.play();
  };

  exiting = () => {
    const { tl } = this.props;
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
