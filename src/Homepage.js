import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: pink;
  flex: auto;
  padding-top: 4.5rem;
`;

export default class Homepage extends React.Component {
  render() {
    return <Wrapper>Homepage. No transitions</Wrapper>;
  }
}
