import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../../common/test';
import Doctors from './Doctors';

const promisify = (value) => () => new Promise((resolve) => resolve(value));

const getUsers = () => {
  const rows = [
    { id: 1, name: 'Alba' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Álvaro' }
  ];
  return { rows, count: rows.length };
};

jest.mock('../../../common/services/users', () => ({
  getAllUsers: promisify({ data: getUsers() })
}));

describe('Page - Doctors', () => {
  test('should render the initial users', async () => {
    // Arrange
    render(<Doctors />);

    const user = await screen.findByText('Alba');
    // Expect
    expect(user).toBeInTheDocument();
  });
});
