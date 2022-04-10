import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTimeSeries } from '../api/apiExchange';

export default function useChartSeries(rawData) {
  const [config, setConfig] = useState({});

  const generateData = (timeSeries) => {
    const xAxis = [];
    const yAxis = [];

    Object.keys(timeSeries?.rates).forEach((key) => {
      xAxis.push(key);
      const key2 = Object.keys(timeSeries?.rates[key])[0];
      yAxis.push(timeSeries?.rates[key][key2]);
    });

    setConfig({
      x: xAxis,
      y: yAxis,
      yRange: [Math.min(...yAxis) / 1.10, Math.max(...yAxis) * 1.10],
      color: yAxis[0] > yAxis[yAxis.length - 1] ? 'rgba(182,45,45,0.62)' : 'rgba(43,155,76,0.58)',
      title: `${rawData?.base} to ${rawData?.symbols} Chart`,
    });
  };

  useQuery(['symbols', rawData], () => getTimeSeries(rawData), {
    enabled: !!rawData?.symbols && !!rawData?.base
            && !!rawData?.startDate && !!rawData?.endDate,
    onSuccess: generateData,
  });

  return { config };
}
