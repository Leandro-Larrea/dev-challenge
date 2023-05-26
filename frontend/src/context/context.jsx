import { createContext, useState } from "react";
import { useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);
  const [history, setHistory] = useState([]);

  return (
    <DataContext.Provider
      value={{ data, setData, history, setHistory, error, setError }}
    >
      {children}
    </DataContext.Provider>
  );
};
