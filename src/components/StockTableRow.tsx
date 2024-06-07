import React from 'react';

interface StockTableRowProps {
  date: string;
  data: {
    '1. open': string;
    '2. high': string;
    '3. low': string;
    '4. close': string;
  };
}

const StockTableRow: React.FC<StockTableRowProps> = ({ date, data }) => (
  <tr>
    <td className="py-2 px-4 border-b">{date}</td>
    <td className="py-2 px-4 border-b">{data['1. open']}</td>
    <td className="py-2 px-4 border-b">{data['2. high']}</td>
    <td className="py-2 px-4 border-b">{data['3. low']}</td>
    <td className="py-2 px-4 border-b">{data['4. close']}</td>
  </tr>
);

export default StockTableRow;
