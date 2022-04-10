import React from 'react';
import { Box, Button } from '@mui/material';
import PropTypes, { instanceOf } from 'prop-types';

export default function TimeFramesComponent({ onChange, timeFrames, activeTimeFrame }) {
  return (
    <Box display="flex">
      {timeFrames?.map((timeFrame) => (
        <Box key={timeFrame.label}>
          <Button
            variant={timeFrame?.label === activeTimeFrame?.label ? 'contained' : 'outlined'}
            size="small"
            onClick={() => {
              onChange(timeFrame);
            }}
          >
            {timeFrame.label}
          </Button>
        </Box>
      ))}
    </Box>
  );
}

TimeFramesComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  timeFrames: instanceOf(Array).isRequired,
  activeTimeFrame: instanceOf(Object).isRequired,
};
