import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-01/v1/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setData(res[currency]); // e.g., res["usd"]
      })
      .catch((err) => {
        console.error("❌ Failed to fetch rates:", err.message);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
