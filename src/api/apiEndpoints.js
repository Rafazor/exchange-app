const EXCHANGE_SYMBOLS_API_ENDPOINT = `http://api.exchangeratesapi.io/v1/symbols?access_key=${process.env.REACT_APP_EXCHANGE_API_KEY}`;
const EXCHANGE_TIME_SERIES_API_ENDPOINT = `http://api.exchangeratesapi.io/v1/timeseries?access_key=${process.env.REACT_APP_EXCHANGE_API_KEY}&start_date=[startDate]&end_date=[endDate]&base=[base]&symbols=[symbols]`;

export {
  EXCHANGE_SYMBOLS_API_ENDPOINT,
  EXCHANGE_TIME_SERIES_API_ENDPOINT,
};
