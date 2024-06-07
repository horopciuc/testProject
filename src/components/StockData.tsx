/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../api';

interface StockDataProps {
  symbol: string;
}

const StockData: React.FC<StockDataProps> = ({ symbol }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStockData(symbol)
      .then(setData)
      .catch((error) => setError(error.message));
  }, [symbol]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const timeSeries = data['Time Series (Daily)'];
  const dates = Object.keys(timeSeries);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{symbol}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Open</th>
              <th className="py-2 px-4 border-b">High</th>
              <th className="py-2 px-4 border-b">Low</th>
              <th className="py-2 px-4 border-b">Close</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date) => (
              <tr key={date}>
                <td className="py-2 px-4 border-b">{date}</td>
                <td className="py-2 px-4 border-b">{timeSeries[date]['1. open']}</td>
                <td className="py-2 px-4 border-b">{timeSeries[date]['2. high']}</td>
                <td className="py-2 px-4 border-b">{timeSeries[date]['3. low']}</td>
                <td className="py-2 px-4 border-b">{timeSeries[date]['4. close']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockData;
