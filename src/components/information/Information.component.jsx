import React from 'react';
import { instanceOf } from 'prop-types';
import { Box, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FunctionsIcon from '@mui/icons-material/Functions';
import styles from './Information.module.css';

export default function InformationComponent({ information }) {
  const {
    title,
    trend,
    bestDay,
    worstDay,
    average,
    progress,
  } = information;

  return (
    <Box width="100%">
      <Box display="flex" mb={2}>
        <Box mr={1.5}>
          <Typography
            variant="h6"
            fontWeight={500}
          >
            {title}
          </Typography>
        </Box>
        <Typography
          color={trend === 'down' ? 'rgba(182,45,45)' : 'rgba(43,155,76)'}
          variant="h6"
          fontWeight={500}
        >
          {`${progress?.toFixed(2)} %`}
        </Typography>
      </Box>
      <Box display="flex">
        <Box display="flex" alignItems="center" mr={3}>
          <FunctionsIcon className={styles.icon} />
          <Typography
            variant="subtitle1"
            fontWeight={500}
          >
            {average?.toFixed(3)}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mr={3}>
          <ThumbUpIcon htmlColor="rgba(43,155,76)" className={styles.icon} />
          <Typography
            variant="subtitle1"
            fontWeight={500}
          >
            {bestDay}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mr={3}>
          <ThumbDownIcon htmlColor="rgba(182,45,45)" className={styles.icon} />
          <Typography
            variant="subtitle1"
            fontWeight={500}
          >
            {worstDay}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

InformationComponent.propTypes = {
  information: instanceOf(Object).isRequired,
};
