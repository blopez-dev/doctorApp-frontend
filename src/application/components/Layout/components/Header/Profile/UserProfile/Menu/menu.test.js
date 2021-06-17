import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../../../../../../common/test';
import MenuOverlay from './Menu';

describe('Sidebar Component', () => {
  test('should contain Menu navgation ', () => {
    const { getByTestId } = render(<MenuOverlay />);
    expect(getByTestId('DropdownMenu'));
  });
});
