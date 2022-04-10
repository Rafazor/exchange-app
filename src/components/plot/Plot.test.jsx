import React from 'react';
import { render, screen } from '@testing-library/react';
import PlotComponent from './Plot.component';

// Use real modules for testing.
jest.unmock('plotly.js');

describe('PlotComponent', () => {
  let plotContainer;
  beforeEach(() => {
    const { container } = render(<PlotComponent config={{
      x: [1, 2, 3],
      y: [1, 2, 3],
      yRange: [0, 10],
      color: 'red',
      title: 'Test chart',
    }}
    />);
    plotContainer = container;
  });

  test('it renders', async () => {
    const plot = await plotContainer.querySelector('.js-plotly-plot');
    expect(plot).toBeInTheDocument();
    expect(plot).toBeVisible();
  });

  test('display title', async () => {
    const bars = await screen.getByText('Test chart');
    expect(bars).toBeInTheDocument();
    expect(bars).toBeVisible();
  });
});
