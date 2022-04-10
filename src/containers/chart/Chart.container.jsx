import React from 'react';
import { instanceOf } from 'prop-types';
import { Paper } from '@mui/material';
import useChartSeries from '../../hooks/useChartSeries';
import PlotComponent from '../../components/plot/Plot.component';
import styles from './Chart.module.css';

export default function ChartContainer({ searchValue }) {
  const { config } = useChartSeries(searchValue);

  return (
    <Paper elevation={5} className={styles.paperWrapper}>
      <PlotComponent config={config} />
    </Paper>
  );
}

ChartContainer.propTypes = {
  searchValue: instanceOf(Object).isRequired,
};
