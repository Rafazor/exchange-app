import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { func } from 'prop-types';
import { getExchangeSymbols } from '../../api/apiExchange';
import { mapOptions } from '../../utils/helpers';
import SelectComponent from '../../components/select/Select.component';

export default function SearchContainer({ onSearch }) {
  const {
    data: exchangeSymbols,
  } = useQuery('symbols', getExchangeSymbols);
  const [baseSymbol, setBaseSymbol] = useState();
  const [secondarySymbol, setSecondarySymbol] = useState();

  const handleBaseSymbolChange = (selectedOption) => {
    setBaseSymbol(selectedOption);
  };

  const handleSecondarySymbolChange = (selectedOption) => {
    setSecondarySymbol(selectedOption);
  };

  const generateExchangeSymbols = useMemo(
    () => mapOptions(exchangeSymbols?.symbols),
    [exchangeSymbols?.symbols],
  );

  useEffect(() => {
    if (baseSymbol?.id && secondarySymbol?.id) {
      onSearch(baseSymbol.id, secondarySymbol.id);
    }
  }, [baseSymbol, secondarySymbol]);

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
        </div>
      )}
    </div>
  );
}

SearchContainer.propTypes = {
  onSearch: func.isRequired,
};
