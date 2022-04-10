import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { func } from 'prop-types';
import { Box, Paper } from '@mui/material';
import { getExchangeSymbols } from '../../api/apiExchange';
import { mapOptions } from '../../utils/helpers';
import SelectComponent from '../../components/select/Select.component';
import TimeFramesComponent from '../../components/time-frames/TimeFrames.component';
import { timeFrames } from '../../constants/constants';
import styles from './Search.module.css';

export default function SearchContainer({ onSearch }) {
  const {
    data: exchangeSymbols,
  } = useQuery('symbols', getExchangeSymbols);
  const [baseSymbol, setBaseSymbol] = useState();
  const [secondarySymbol, setSecondarySymbol] = useState();
  const [timeFrame, setTimeFrame] = useState(timeFrames[2]);

  const handleBaseSymbolChange = (selectedOption) => {
    setBaseSymbol(selectedOption);
  };

  const handleSecondarySymbolChange = (selectedOption) => {
    setSecondarySymbol(selectedOption);
  };

  const handleTimeFrameChange = (selectedOption) => {
    setTimeFrame(selectedOption);
  };

  const generateExchangeSymbols = useMemo(
    () => mapOptions(exchangeSymbols?.symbols),
    [exchangeSymbols?.symbols],
  );

  useEffect(() => {
    if (baseSymbol?.id && secondarySymbol?.id && timeFrame?.startDate && timeFrame?.endDate) {
      onSearch(baseSymbol.id, secondarySymbol.id, timeFrame.startDate, timeFrame.endDate);
    }
  }, [baseSymbol, secondarySymbol, timeFrame]);

  return (
    <Paper elevation={5} className={styles.paperWrapper}>
      <Box display="flex" justifyContent="space-evenly" alignItems="center" mb={3} width="100%" height="100%">
        <SelectComponent
          options={generateExchangeSymbols}
          onChange={handleBaseSymbolChange}
          label="Base currency"
          value={baseSymbol?.label}
          id="select-base"
        />
        {!!baseSymbol && (
        <div>
          <SelectComponent
            options={generateExchangeSymbols}
            onChange={handleSecondarySymbolChange}
            label="Secondary currency"
            value={secondarySymbol?.label}
            id="select-secondary"
          />

        </div>
        )}
      </Box>
      {!!baseSymbol && (
      <Box display="flex" justifyContent="center">
        <TimeFramesComponent
          onChange={handleTimeFrameChange}
          timeFrames={timeFrames}
          activeTimeFrame={timeFrame}
        />
      </Box>
      )}
    </Paper>
  );
}

SearchContainer.propTypes = {
  onSearch: func.isRequired,
};
