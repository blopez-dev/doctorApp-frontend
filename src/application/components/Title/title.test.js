import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import CreateTitle from './Title';

describe('Sidebar Component', () => {
  test('should return a title', () => {
    const TypeHead = 1;
    const Content = 'This is a text';
    const result = CreateTitle({ TypeHead, Content });
    expect(result).toBeTruthy();
  });
});
