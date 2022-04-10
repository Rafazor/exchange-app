import Plot from 'react-plotly.js';
import React from 'react';
import { instanceOf } from 'prop-types';

export default function PlotComponent({ config }) {
  return (
    <Plot
      data={[
        {
          x: config?.x,
          y: config?.y,
          mode: 'lines',
          marker: { color: config?.color },
          fill: 'tozeroy',
        },
      ]}
      layout={{
        autosize: true,
        yaxis: {
          range: config?.yRange,
          autorange: false,
        },
      }}
    />
  );
}

PlotComponent.propTypes = {
  config: instanceOf(Object).isRequired,
};
