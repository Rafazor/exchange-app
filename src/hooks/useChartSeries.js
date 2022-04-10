import { useState } from 'react';
import { useQuery } from 'react-query';
import { getTimeSeries } from '../api/apiExchange';

export default function useChartSeries(rawData) {
  const [config, setConfig] = useState({});
  const [information, setInformation] = useState({});

  const generateChartConfig = (xAxis, yAxis) => {
    const yRange = [Math.min(...yAxis) / 1.10, Math.max(...yAxis) * 1.10];
    const color = yAxis[0] > yAxis[yAxis.length - 1] ? 'rgba(182,45,45,0.62)' : 'rgba(43,155,76,0.58)';

    setConfig({
      x: xAxis,
      y: yAxis,
      yRange,
      color,
    });
  };

  const generateInformation = (xAxis, yAxis) => {
    const title = `${rawData?.base} to ${rawData?.symbols} Chart`;
    const trend = yAxis[0] > yAxis[yAxis.length - 1] ? 'down' : 'up';
    const bestDay = xAxis[yAxis.indexOf(Math.max(...yAxis))];
    const worstDay = xAxis[yAxis.indexOf(Math.min(...yAxis))];
    const average = yAxis.reduce((a, b) => a + b, 0) / yAxis.length;
    const progress = ((yAxis[yAxis.length - 1] - yAxis[0]) / yAxis[0]) * 100;

    setInformation({
      title,
      trend,
      bestDay,
      worstDay,
      average,
      progress,
    });
  };

  const generateData = (timeSeries) => {
    const xAxis = [];
    const yAxis = [];

    Object.keys(timeSeries?.rates).forEach((key) => {
      xAxis.push(key);
      const key2 = Object.keys(timeSeries?.rates[key])[0];
      yAxis.push(timeSeries?.rates[key][key2]);
    });

    generateChartConfig(xAxis, yAxis);
    generateInformation(xAxis, yAxis);
  };

  const { isLoading, error } = useQuery(['symbols', rawData], () => getTimeSeries(rawData), {
    enabled: !!rawData?.symbols && !!rawData?.base
            && !!rawData?.startDate && !!rawData?.endDate,
    onSuccess: generateData,
  });

  return {
    config, information, isLoading, error,
  };
}
