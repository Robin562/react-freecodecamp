import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("dog");
  const [data, setData] = useState([]);
  const URL = `https://pixabay.com/api/?key=34917344-ac18109f500d5682966534771&q=${search}&image_type=photo`;

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data.hits);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);
  return (
    <DataContext.Provider
      value={{
        data,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(DataContext);
};

export default DataProvider;
export { useGlobalContext };
