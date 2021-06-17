import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../common/test';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  test('should contain Sidebar ', () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId('Dashboard'));
  });
});
