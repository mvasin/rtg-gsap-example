import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: orange;
  flex: auto;
  padding-top: 4.5rem;
`;

export default class Page3 extends React.Component {
  render() {
    return <Wrapper>Page 3. Also without transitions.</Wrapper>;
  }
}
