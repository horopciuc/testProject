import React from 'react';

const StockTableHeader: React.FC = () => (
  <thead>
    <tr>
      <th className="py-2 px-4 border-b">Date</th>
      <th className="py-2 px-4 border-b">Open</th>
      <th className="py-2 px-4 border-b">High</th>
      <th className="py-2 px-4 border-b">Low</th>
      <th className="py-2 px-4 border-b">Close</th>
    </tr>
  </thead>
);

export default StockTableHeader;
