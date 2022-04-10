import React from 'react';
import { instanceOf } from 'prop-types';
import { Box, Paper, Skeleton } from '@mui/material';
import useChartSeries from '../../hooks/useChartSeries';
import PlotComponent from '../../components/plot/Plot.component';
import styles from './Chart.module.css';
import InformationComponent from '../../components/information/Information.component';

export default function ChartContainer({ searchValue }) {
  const { config, information, isLoading } = useChartSeries(searchValue);

  if (isLoading) {
    return (
      <>
        <Box mb={2}>
          <Skeleton className={styles.skeleton} sx={{ bgcolor: 'grey.100' }} animation="wave" variant="rectangular" width="100%" height={130} />
        </Box>
        <Skeleton className={styles.skeleton} sx={{ bgcolor: 'grey.100' }} animation="wave" variant="rectangular" width="100%" height={450} />
      </>
    );
  }

  return (
    <>
      <Paper elevation={5} className={styles.paperWrapper}>
        <InformationComponent information={information} />
      </Paper>
      <Paper elevation={5} className={styles.paperWrapper}>
        <PlotComponent config={config} />
      </Paper>
    </>
  );
}

ChartContainer.propTypes = {
  searchValue: instanceOf(Object).isRequired,
};
