const API_KEY = "RIBXT3XYLI69PC0Q";
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchStockData = async (symbol: string) => {
  const response = await fetch(
    `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
