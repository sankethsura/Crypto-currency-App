import { useState } from "react";
import { useEffect } from "react";
import ReactHtMlParser from "react-html-parser";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CoinDetails = ({ dataSet, id, currency }) => {
  const [dataPoint, setDataPoint] = useState(null);
  const [readMore, setReadMore] = useState(false);
  // console.log(dataSet);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => response.json())
        .then((result) => {
          setDataPoint(result);
        });
    };
    fetchData();
  }, []);

  // console.log(dataPoint);

  return (
    <div className="flex font1 items-center justify-center lg:w-[35vw] flex-col px-7 py-7  ">
      <div className="pb-5">
        <img className="max-w-[190px] " src={dataSet.image} alt="" />
        <div className="font-bold text-3xl text-slate-200">{dataSet.id&&dataSet.id.toUpperCase()}</div>
      </div>

      <div className="w-[100%] flex  py-2">
        <div className="font-bold text-lg">Rank : </div>{" "}
        <div className="px-2 pt-[3px] text-slate-50"># {dataSet.market_cap_rank}</div>
      </div>
      <div className="w-[100%] flex  py-2">
        <div className="font-bold text-lg">Current Price :</div>
        <div className="px-2 pt-[3px] text-slate-50">
          {currency === "usd" ? "$" : "₹"} {dataSet.current_price}
        </div>
      </div>
      <div className="w-[100%] flex  py-2">
        <div className="font-bold text-lg">Market Cap :</div>
        <div className="px-2 pt-[3px] text-slate-50">
          {currency === "usd" ? "$" : "₹"} {dataSet.market_cap}
        </div>
      </div>
      <div className="font-bold text-lg flex w-[100%] py-2">Description :</div>
      {!readMore ? (
        <section>
          <div className=" max-h-[197px] m-auto overflow-hidden text-start font-semibold">
            {dataPoint && ReactHtMlParser(dataPoint.description.en)}
          </div>
          <Button style={{ color: 'white',}} variant="text" className="font1 " onClick={() => setReadMore((e) => !e)}>
            Read More!
          </Button>
        </section>
      ) : (
        <section>
          <div className=" text-start font1 ">
            {dataPoint && ReactHtMlParser(dataPoint.description.en)}
          </div>
          <Button style={{ color: 'white',}} variant="text" onClick={() => setReadMore((e) => !e)}>
            Read Less
          </Button>
        </section>
      )}
    </div>
  );
};

export default CoinDetails;
