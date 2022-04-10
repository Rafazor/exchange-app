import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TimeFramesComponent from './TimeFrames.component';
import { timeFrames } from '../../constants/constants';

describe('TimeFramesComponent', () => {
  test('renders all buttons', () => {
    render(<TimeFramesComponent
      timeFrames={timeFrames}
      onChange={jest.fn}
      activeTimeFrame={timeFrames[2]}
    />);
    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(timeFrames.length);
  });

  test('renders active button', () => {
    render(<TimeFramesComponent
      timeFrames={timeFrames}
      onChange={jest.fn}
      activeTimeFrame={timeFrames[2]}
    />);
    const activeButton = screen.getByRole('button', { name: timeFrames[2].label });

    expect(activeButton).toBeInTheDocument();
    expect(activeButton).toHaveClass('MuiButton-contained');
  });

  test('onChange returns correct value', () => {
    const callback = jest.fn();
    render(<TimeFramesComponent
      timeFrames={timeFrames}
      onChange={callback}
      activeTimeFrame={timeFrames[2]}
    />);
    const button = screen.getByRole('button', { name: timeFrames[1].label });

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass('MuiButton-contained');

    userEvent.click(button);

    expect(callback).toHaveBeenCalledWith(timeFrames[1]);
  });
});
