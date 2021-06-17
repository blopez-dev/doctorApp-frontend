import React from 'react';
import Logo from './Logo/Logo';
import Profile from './Profile';

import Header from './styles';

const Head = () => (
  <Header data-testid="header">
    <Logo />
    <Profile />
  </Header>
);

export default Head;
