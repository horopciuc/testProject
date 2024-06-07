import React from 'react';
import StockTableHeader from './StockTableHeader';
import StockTableRow from './StockTableRow';
import { StockData as StockDataType } from '../types/stockData';

interface StockTableProps {
  data: StockDataType;
}

const StockTable: React.FC<StockTableProps> = ({ data }) => {
  const timeSeries = data?.['Time Series (Daily)'] || {};
  const dates = Object.keys(timeSeries);

  if (dates.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <StockTableHeader />
        <tbody>
          {dates.map((date) => (
            <StockTableRow key={date} date={date} data={timeSeries[date]} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
