import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '../../../../../common/test';
import Header from './Header';

describe('Sidebar Component', () => {
  test('should contain Sidebar ', () => {
    const { getByTestId } = render(<Router><Header /></Router>);
    expect(getByTestId('header'));
  });
});
