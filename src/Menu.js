import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import src from './logo.svg';
import { Trail, config, animated } from 'react-spring';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: khaki;
`;

const Logo = styled.img.attrs({ src })`
  height: 2rem;
`;

const links = [
  { to: '/', children: <Logo /> },
  { to: '/page1', children: 'Page 1' },
  { to: '/page2', children: 'Page 2' },
  { to: '/page3', children: 'Page 3 (no transition)' },
  { to: '/page4', children: 'Page 4 (complex transition)' }
];

const Link = animated(RouterLink);

export default class Menu extends React.Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <Trail
          from={{ opacity: 0, offset: -30 }}
          to={{ opacity: 1, offset: 0 }}
          keys={links.map((_, i) => i)}
          config={config.slow}
        >
          {links.map(link => ({ offset, opacity }) => (
            <Link
              {...link}
              style={{ opacity, transform: `translateY(${offset}%)` }}
            />
          ))}
        </Trail>
      </Wrapper>
    );
  }
}
