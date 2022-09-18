import Navbar from "./Navbar";
import SliderContent1 from "./SliderContent1";
import Table1 from "./Table1";
import { useState } from "react";
import * as React from "react";


const HomePage = ({data,setData,currency,setCurrency}) => {
    const [coinName, setCoinName] = React.useState("");
  // const [currency, setCurrency] = useState("inr");
  // const [data, setData] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);
    return ( <div className="bg-gradient-to-r from-[#dbc9ba] to-[#1A3263] pt-7">
        
      
      <Navbar
        coinName={coinName}
        setCoinName={setCoinName}
        currency={currency}
        setCurrency={setCurrency}
        data={data}
        setData={setData}
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
        />
      <SliderContent1 
      data={data} 
      currency={currency}/>
      <Table1 data={data} currency={currency}/>
    </div> );
}
 
export default HomePage;