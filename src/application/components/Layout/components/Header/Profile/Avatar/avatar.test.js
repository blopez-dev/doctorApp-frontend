import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '../../../../../../../common/test';
import Avatar from './Avatar';

describe('Test to show avatar image', () => {
  it('should render a Avatar image', () => {
    render(<Avatar />);
    const img = screen.getByText('Dashboard');
    expect(img).toBeTruthy();
  });
});
