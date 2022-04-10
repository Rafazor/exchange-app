import React, { useState } from 'react';
import SearchContainer from '../search/Search.container';

export default function ExchangeContainer() {
  const [searchValue, setSearchValue] = useState({
    base: '',
    symbols: '',
    startDate: '2022-01-01',
    endDate: '2022-04-09',
  });

  const handleSearch = (baseSymbol, secondarySymbol) => {
    setSearchValue((prevState) => ({
      ...prevState,
      base: baseSymbol,
      symbols: secondarySymbol,
    }));
  };

  return (
    <div>
      <SearchContainer onSearch={handleSearch} />
    </div>
  );
}
