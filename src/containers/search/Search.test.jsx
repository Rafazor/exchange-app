import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchContainer from './Search.container';

jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    error: {},
    data: {
      success: true,
      symbols: {
        AED: 'United Arab Emirates Dirham',
        AFN: 'Afghan Afghani',
        ALL: 'Albanian Lek',
        AMD: 'Armenian Dram',
      },
    },
  }),
}));

describe('Search', () => {
  test('should render only one select', () => {
    render(<SearchContainer onSearch={() => jest.fn()} />);

    const selectBaseCurrencyElement = screen.getByLabelText('Base currency');
    expect(selectBaseCurrencyElement).toBeInTheDocument();

    const selectSecondaryCurrencyElement = screen.queryByLabelText('Secondary currency');
    expect(selectSecondaryCurrencyElement).not.toBeInTheDocument();
  });

  test('should render all selects', async () => {
    render(
      <SearchContainer onSearch={() => jest.fn()} />,
    );

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    await waitFor(() => screen.getByText('AED - United Arab Emirates Dirham'));

    const option = await screen.findByText('AED - United Arab Emirates Dirham');
    userEvent.click(option);

    const selectSecondaryCurrencyElement = screen.queryByLabelText('Secondary currency');
    expect(selectSecondaryCurrencyElement).toBeInTheDocument();
  });

  test('component calls onSearch function', async () => {
    const onSearch = jest.fn();
    render(<SearchContainer onSearch={onSearch} />);

    const baseButtonElement = screen.getAllByRole('button')[0];
    userEvent.click(baseButtonElement);

    await waitFor(() => screen.getByText('AED - United Arab Emirates Dirham'));

    const baseOption = await screen.findByText('AED - United Arab Emirates Dirham');
    userEvent.click(baseOption);

    const selectSecondaryCurrencyElement = screen.queryByLabelText('Secondary currency');
    expect(selectSecondaryCurrencyElement).toBeInTheDocument();

    const secondaryButtonElement = screen.getAllByRole('button')[1];
    userEvent.click(secondaryButtonElement);

    const secondaryOption = await screen.findByText('ALL - Albanian Lek');
    userEvent.click(secondaryOption);

    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
