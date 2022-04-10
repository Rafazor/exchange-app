import React from 'react';
import { screen, render } from '@testing-library/react';
import ErrorComponent from './Error.component';

describe('ErrorComponent', () => {
  test('renders correctly', () => {
    render(<ErrorComponent error />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('does`t render', () => {
    render(<ErrorComponent error={false} />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
