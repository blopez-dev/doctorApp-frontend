import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../../common/test';
import Card from './Card';

const onClick = jest.fn();
describe('Sidebar Component', () => {
  test('should contain Sidebar ', () => {
    const { getByTestId } = render(<Card />);
    expect(getByTestId('CardDoctor'));
  });
  test('clicking to send new Message', () => {
    const Id = 83;
    const Avatar = 'http://placeimg.com/640/480/animals';
    const Name = 'Adam Parker';
    const Description = 'Neumólogo';
    const onUpdate = () => {};
    render(<Card
      id={Id}
      avatar={Avatar}
      name={Name}
      description={Description}
      onUpdate={onUpdate}
    />);

    const button = screen.getByTestId('NewMessage');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('clicking to send new Message', () => {
    const Id = 83;
    const Avatar = 'http://placeimg.com/640/480/animals';
    const Name = 'Adam Parker';
    const Description = 'Neumólogo';
    const onUpdate = () => {};
    render(<Card
      id={Id}
      avatar={Avatar}
      name={Name}
      description={Description}
      onUpdate={onUpdate}
    />);
    const button = screen.getByTestId('view-profile');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
