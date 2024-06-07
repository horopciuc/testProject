import { StockData } from "../types/stockData";

export async function fetchStockData(): Promise<StockData> {
  const response = await fetch("API_URL");
  const data: StockData = await response.json();
  return data;
}

export function processStockData(data: StockData): void {
  console.log(data["Meta Data"]["1. Information"]);
  const timeSeries = data["Time Series (Daily)"];
  Object.keys(timeSeries).forEach((date) => {
    const dailyData = timeSeries[date];
    console.log(`Date: ${date}, Open: ${dailyData["1. open"]}`);
  });
}
