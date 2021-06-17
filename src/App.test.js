import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from './common/test';
import Application from './application/application';

describe('Test App', () => {
  it('renders a themed timeclock', () => {
    const { getByTestId } = render(<Application />);
    expect(getByTestId('Application'));
  });
});
