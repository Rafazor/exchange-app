import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { func } from 'prop-types';
import { getExchangeSymbols } from '../../api/apiExchange';
import { mapOptions } from '../../utils/helpers';
import SelectComponent from '../../components/select/Select.component';
import TimeFramesComponent from '../../components/time-frames/TimeFrames.component';
import { timeFrames } from '../../constants/constants';

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
    <div>
      <div>
        <SelectComponent
          options={generateExchangeSymbols}
          onChange={handleBaseSymbolChange}
          label="Base currency"
          value={baseSymbol?.label}
          id="select-base"
        />
      </div>
      {!!baseSymbol && (
        <div>
          <SelectComponent
            options={generateExchangeSymbols}
            onChange={handleSecondarySymbolChange}
            label="Secondary currency"
            value={secondarySymbol?.label}
            id="select-secondary"
          />
          <TimeFramesComponent
            onChange={handleTimeFrameChange}
            timeFrames={timeFrames}
            activeTimeFrame={timeFrame}
          />
        </div>
      )}
    </div>
  );
}

SearchContainer.propTypes = {
  onSearch: func.isRequired,
};
