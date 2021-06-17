import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../../../common/test';
import Patients from './Patient';

const promisify = (value) => () => new Promise((resolve) => resolve(value));

const getPatients = () => {
  const rows = [
    { id: 1, name: 'Alba' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Álvaro' }
  ];
  return { rows, count: rows.length };
};

jest.mock('../../../common/services/patients', () => ({
  getAllPatients: promisify({ data: getPatients() })
}));

describe('Page - Patients', () => {
  test('should render the initial users', async () => {
    // Arrange
    render(<Patients />);

    const patient = await screen.findByText('Alba');
    // Expect
    expect(patient).toBeInTheDocument();
  });
});
