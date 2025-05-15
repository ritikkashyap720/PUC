import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCurrency, setCurrentCurrency] = useState("INR");
  const [currencyValue, setCurrencyValue] = useState(1);
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [globalData, setGlobalData] = useState([]);
  const currencyObject = {
    INR: "₹",
    SEK: "kr",
    USD: "$",
    EUR: "€",
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://192.168.1.19:8989/api/azure-cost-custom/b8e73211-ba0b-4545-b969-b079e74c7265",
          {
            type: "ActualCost",
            timeframe: "MonthToDate",
            dataset: {
              granularity: "Daily",
              aggregation: {
                totalCost: {
                  name: "PreTaxCost",
                  function: "Sum",
                },
              },
            },
          }
        ); // Replace with your API endpoint

        console.log("Data fetched successfully:", response.data);
        if (response) {
          setLoading(false);
          const agegregatedData = aggregatePreTaxCostByService(response?.data);
          setGlobalData(agegregatedData);
          setData(agegregatedData);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchCurrencyValue() {
      if (currentCurrency !== "INR") {
        const currencyResponse = await axios.get(
          `https://api.frankfurter.app/latest?amount=1&from=INR&to=${currentCurrency}`
        );
        if (currencyResponse.status === 200) {
          setCurrencyValue(currencyResponse.data.rates[currentCurrency]);
          console.log(typeof currencyValue);
          let newData = [];
          console.log(currencyResponse.data.rates[currentCurrency]);
          globalData.map((item) => {
            let newItem = {
              ServiceName: item?.ServiceName,
              TotalPreTaxCost:
                item?.TotalPreTaxCost *
                currencyResponse.data.rates[currentCurrency],
            };
            newData.push(newItem);
          });
          console.log(newData);
          setData(newData);
          setCurrencySymbol(currencyObject[currentCurrency]);
        }
      } else {
        setCurrencySymbol("₹");
        setCurrencyValue(1);
        setData(globalData);
      }
      console.log(currencyObject);
    }
    fetchCurrencyValue();
  }, [currentCurrency]);

  function aggregatePreTaxCostByService(data) {
    const serviceCosts = {};

    data.forEach((entry) => {
      const service = entry.ServiceName;
      const cost = parseFloat(entry.PreTaxCost);

      if (!serviceCosts[service]) {
        serviceCosts[service] = 0;
      }

      serviceCosts[service] += cost;
    });

    // Convert the result to an array of objects
    const result = Object.entries(serviceCosts).map(([service, totalCost]) => ({
      ServiceName: service,
      TotalPreTaxCost: +totalCost.toFixed(6), // rounded to 6 decimal places
    }));
    console.log(result);
    return result;
  }

  return (
    <dataContext.Provider
      value={{
        data,
        loading,
        setCurrentCurrency,
        currentCurrency,
        currencySymbol,
        setCurrencySymbol,
        currencyValue,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
