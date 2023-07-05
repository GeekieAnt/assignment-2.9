import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Table from "./Table";

const App = () => {
  const [data, setData] = useState({
    timestamp: "",
    PSI: {},
  });

  const apiGet = async () => {
    try {
      const response = await axios.get(
        `https://api.data.gov.sg/v1/environment/pm25`
      );

      setData((prevData) => ({
        ...prevData,
        timestamp: new Date(),
        PSI: response.data.items[0].readings.pm25_one_hourly,
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="App">
      <h1>PM 25 Reading</h1>
      <h2>{data.timestamp.toString()}</h2>
      <button onClick={() => apiGet()}>Reload</button>
      <Table data={data} />
    </div>
  );
};

export default App;
