import React from 'react';
import StockData from './components/StockData';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Stock Data</h1>
      <StockData symbol="IBM" />
    </div>
  );
};

export default App;
