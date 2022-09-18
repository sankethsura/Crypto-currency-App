import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CoinDetails from "./CoinDetails";
import Graph from "./Graph";

const Details = ({data,currency,setCurrency}) => {

    const [dataSet,setDataSet] = useState({})
    const {id} = useParams()
    // const dataset = null
    // console.log(dataset,id)
    useEffect(()=>{

        for(let i=0;i<data.length;i++){
            if(id===data[i].id){
                setDataSet(data[i])
                // break
            }
        }
    },[])
    // console.log(dataSet,id)
    return ( 
        <div className="lg:flex ">
            <div className="bg-gradient-to-r from-[#dbc9ba] to-[#3b4353] -z-10 w-[100vw] h-[100vh] fixed"></div>
            <div className="lg:w-[35vw] mx-auto pt-10 "><CoinDetails dataSet={dataSet} id={id} currency={currency}/></div>
            <div className="lg:w-[65vw] mx-auto mt-10"><Graph dataSet={dataSet} id={id} currency={currency} setCurrency={setCurrency}/></div>
        </div>
     );
}
 
export default Details;