import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../../../common/test';
import NewDoctor from './NewDoctor';

const promisify = (value) => () => new Promise((resolve) => resolve(value));

const create = () => {
  const value = { name: 'Andrea', email: 'marcos89@gmail.com', specialty: 'tesion' };
  return value;
};

jest.mock('../../../../../common/services/users', () => ({
  createUser: promisify({ data: create() })
}));
describe('Page - New Doctor', () => {
  test('should create new doctor and render all users', () => {
    // Arrange
    const { getByTestId } = render(<NewDoctor />);
    // Expect
    expect(getByTestId('NewDoctor'));
  });
});
