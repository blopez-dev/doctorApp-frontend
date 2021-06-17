/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../common/test';
import Layout from './Layout';

describe('Layout Component', () => {
  test('should contain Header ', () => {
    const { getByTestId } = render(<Router><Layout /></Router>);
    console.log(getByTestId);
    expect(getByTestId('header'));
  });
});
