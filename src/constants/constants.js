import moment from 'moment';

export const timeFrames = [
  {
    startDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    label: '1D',
  },
  {
    startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    label: '7D',
  },
  {
    startDate: moment().subtract(30, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    label: '1M',
  },
  {
    startDate: moment().subtract(90, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    label: '3M',
  },
  {
    startDate: moment().subtract(180, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    label: '6M',
  },
  {
    startDate: moment().subtract(365, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    label: '1Y',
  },
];
