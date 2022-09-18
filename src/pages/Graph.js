import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

import Testing1 from "./Testing";

const Graph = ({ dataSet, id, currency, setCurrency }) => {
  const [graphData, setGraphData] = useState();
  const [time, setTime] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${time}`
      )
        .then((response) => response.json())
        .then((result) => {
          setGraphData(result);
        });
    };
    fetchData();
  }, [time, currency]);
  if (graphData) {
    // console.log(graphData.market_caps)
  }

  function handleChange(e) {
    setTime(e.target.value);
    console.log(time);
  }

  return (
    <div className="font1">
      <Box sx={{ minWidth: 120 }} style={{ color: 'white',}} >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel style={{ color: 'white',}}>Currency</InputLabel>
          <Select value={time} label="Age" style={{ color: 'white',}} onChange={handleChange}>
            <MenuItem value={1}>1 Day</MenuItem>
            <MenuItem value={30}>1 Month</MenuItem>
            <MenuItem value={90}>3 Months</MenuItem>
            <MenuItem value={365}>1 Year</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Testing1
        graphData={graphData}
        id={id}
        currency={currency}
        dataSet={dataSet}
        time={time}
        setCurrency={setCurrency}
      />
    </div>
  );
};

export default Graph;
