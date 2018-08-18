import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'hidden' })`
  background: pink;
  flex: auto;
  padding-top: 4.5rem;
`;

export default () => <Wrapper>Homepage. No transitions</Wrapper>;
