import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SearchContainer from '../search/Search.container';
import ChartContainer from '../chart/Chart.container';
import styles from './Exchange.module.css';

export default function ExchangeContainer() {
  const [searchValue, setSearchValue] = useState({
    base: '',
    symbols: '',
    startDate: '',
    endDate: '',
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
    <>
      <Box py={5} mb={5} className={styles.titleWrapper} display="flex" justifyContent="center" alignItems="center">
        <AccountBalanceIcon fontSize="large" htmlColor="white" />
        <Typography textAlign="center" variant="h5" component="h1" color="white">
          Foreign Exchange Rates
        </Typography>
      </Box>
      <Container maxWidth="md">
        <SearchContainer onSearch={handleSearch} />
        {!!searchValue?.symbols && (
          <ChartContainer searchValue={searchValue} />
        )}
      </Container>
    </>
  );
}
