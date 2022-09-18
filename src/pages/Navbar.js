import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "./all.css";


const Navbar = ({
  coinName,
  setCoinName,
  currency,
  setCurrency,
  data,
  setData,
  setCurrencyData,
  currencyData,
}) => {
  // getting data as all coins infos

  const nav = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [currency]);

  // getting all types Currencies to fetch coin info
  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://api.coingecko.com/api/v3/coins/categories`)
        .then((response) => response.json())
        .then((result) => {
          setCurrencyData(result);
        });
    };
    fetchData();
  }, [currency]);
  // console.log(data);

  //select any coin from drop down
  function handleChange(e) {
    setCoinName(e.target.value);
  }
  let coinId = [];

  if (data) {
    coinId = data.map((items, index) => {
      return (
        <MenuItem  key={items.id} value={items.id}>
          {items.id.toUpperCase()}
        </MenuItem>
      );
    });
  }

  function handleChangeCurrency(e) {
    setCurrency(e.target.value);
  }
  function handleClick(e) {
    if (coinName) {
      console.log(`fowarding to "${coinName}" detail page`);
      nav(`/detail/${coinName}`);
    }
  }

  return (
    <div>
      <div className=" text-[40px] font-bold py-3 pt-9 text-[#e8e4fa] font1">Krypto Currency</div>
      <div className=" text-[14px] py-3 text-[#e8e4fa] ">GET ALL THE INFORMATION OF ANY TRENDING CRYPTO COINS</div>


      <div className="w-[250px] m-auto font1">
        {/* selection of currency */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel style={{ color: 'white',}}>Currency</InputLabel>
            <Select style={{ color: 'white',}}
              value={currency}
              label="Age"
              onChange={handleChangeCurrency}
            >
              <MenuItem value={"usd"}>USD</MenuItem>
              <MenuItem value={"inr"}>INR</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="flex items-center justify-center">
          {/* selection of coins */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ color: 'white',}}>Coin</InputLabel>
              <Select style={{ color: 'white',}} value={coinName} label="Age" onChange={handleChange}>
                {coinId}
              </Select>
            </FormControl>
          </Box>
          <Button onClick={handleClick} variant="text">
            <div className="pt-4 text-[#e8e4fa] font1">search</div>
          </Button>
        </div>
      </div>

      {/* </ThemeProvider> */}
    </div>
  );
};

export default Navbar;
