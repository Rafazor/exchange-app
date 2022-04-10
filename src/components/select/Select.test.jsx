import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectComponent from './Select.component';

describe('SelectComponent', () => {
  beforeEach(() => {
    render(<SelectComponent
      label="Test"
      options={[
        { id: '1', label: 'Test 1' },
        { id: '2', label: 'Test 2' },
      ]}
      onChange={() => jest.fn()}
      id="test-id"
    />);
  });

  test('should render correctly', () => {
    const selectElement = screen.getByLabelText('Test');
    expect(selectElement).toBeInTheDocument();
  });

  test('it renders options', async () => {
    expect(screen.queryByText('Test 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Test 2')).not.toBeInTheDocument();

    const selectElement = screen.getByRole('button');

    userEvent.click(selectElement);

    const option1 = await screen.findByText('Test 1');
    const option2 = await screen.findByText('Test 2');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  test('it changes autocomplete input', () => {
    const input = screen.getByRole('combobox');
    userEvent.type(input, 'Test 1');
    expect(input).toHaveValue('Test 1');

    const option = screen.getByText('Test 1');
    expect(option).toBeInTheDocument();
  });

  test('it select option', () => {
    const selectElement = screen.getByRole('button');
    userEvent.click(selectElement);

    const option = screen.getByText('Test 1');
    userEvent.click(option);

    const input = screen.getByRole('combobox');
    expect(input).toHaveValue('Test 1');
  });
});
