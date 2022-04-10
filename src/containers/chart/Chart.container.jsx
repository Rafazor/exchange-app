import React from 'react';
import { instanceOf } from 'prop-types';
import useChartSeries from '../../hooks/useChartSeries';
import PlotComponent from '../../components/plot/Plot.component';

export default function ChartContainer({ searchValue }) {
  const { config } = useChartSeries(searchValue);

  return (
    <div>
      <PlotComponent config={config} />
    </div>
  );
}

ChartContainer.propTypes = {
  searchValue: instanceOf(Object).isRequired,
};
