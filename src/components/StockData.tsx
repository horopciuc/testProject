import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../api';
import { StockData as StockDataType } from '../types/stockData';
import StockTable from './StockTable';

interface StockDataProps {
  symbol: string;
}

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

const StockData: React.FC<StockDataProps> = ({ symbol }) => {
  const [data, setData] = useState<StockDataType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: StockDataType = await fetchStockData(symbol);
        setData(data);
      } catch (error) {
        setError(getErrorMessage(error));
      }
    };

    fetchData();
  }, [symbol]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{symbol}</h2>
      <StockTable data={data} />
    </div>
  );
};

export default StockData;
