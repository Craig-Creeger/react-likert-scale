import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Likert from './likert';

const likertOptions = {
  question: 'What is your opinion of the President’s performance?',
  responses: [
    { value: 1, text: 'Abysmal' },
    { value: 2, text: 'Poor' },
    { value: 3, text: 'Average' },
    { value: 4, text: 'Good' },
    { value: 5, text: 'Excellent' },
  ],
  onChange: jest.fn(),
};

describe('likert', () => {
  test('renders the question', () => {
    render(<Likert {...likertOptions} />);
    expect(
      screen.getByText('What is your opinion of the President’s performance?')
    ).toBeInTheDocument();
  });

  test('clicking a radio will fire the callback and check the radio', () => {
    render(<Likert {...likertOptions} />);
    userEvent.click(screen.getByLabelText('Average'));
    expect(likertOptions.onChange).toHaveBeenCalledWith({"text": "Average", "value": 3});
    expect(screen.getByLabelText('Average')).toBeChecked();
  });

  test('the id is filled with a default value', () => {
    render(<Likert {...likertOptions} />);
    expect(screen.getByRole('group')).toHaveAttribute('id', '569860783')
  });
 
  test('an id can be passed in', () => {
    render(<Likert {...likertOptions} id='steckerlfisch' />);
    expect(screen.getByRole('group')).toHaveAttribute('id', 'steckerlfisch')
  });
 
  test('a custom class can put put on the fieldset', () => {
    render(<Likert {...likertOptions} className='steckerlfisch' />);
    expect(screen.getByRole('group')).toHaveClass('steckerlfisch')
  });
});
