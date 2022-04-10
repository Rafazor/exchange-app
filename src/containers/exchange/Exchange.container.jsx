import React, { useState } from 'react';
import SearchContainer from '../search/Search.container';
import ChartContainer from '../chart/Chart.container';

export default function ExchangeContainer() {
  const [searchValue, setSearchValue] = useState({
    base: '',
    symbols: '',
    startDate: '2022-01-01',
    endDate: '2022-04-09',
  });

  const handleSearch = (baseSymbol, secondarySymbol, startDate, endDate) => {
    setSearchValue((prevState) => ({
      ...prevState,
      base: baseSymbol,
      symbols: secondarySymbol,
      startDate,
      endDate,
    }));
  };

  return (
    <div>
      <SearchContainer onSearch={handleSearch} />
      {!!searchValue?.symbols && (
      <ChartContainer searchValue={searchValue} />
      )}
    </div>
  );
}
