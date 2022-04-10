import { EXCHANGE_SYMBOLS_API_ENDPOINT, EXCHANGE_TIME_SERIES_API_ENDPOINT } from './apiEndpoints';
import { replacePathParams } from '../utils/helpers';

async function getExchangeSymbols() {
  const response = await fetch(EXCHANGE_SYMBOLS_API_ENDPOINT);
  return response.json();
}

async function getTimeSeries(params) {
  const response = await fetch(
    replacePathParams(EXCHANGE_TIME_SERIES_API_ENDPOINT, params),
  );
  return response.json();
}

export {
  getExchangeSymbols,
  getTimeSeries,
};
