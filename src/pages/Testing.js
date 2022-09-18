import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const Testing1 = ({dataSet, graphData ,id,currency ,time,setCurrency}) => {

  let selTime
 
  const data = [];
  if (graphData) {
    
    for (let i = 0; i < graphData.prices.length; i++) {
      // i=i+step
      let temp =new Date(graphData.prices[i][0])
      let time = temp.getHours().toString()
      let min = temp.getMinutes().toString()

    //   if(time){
    //     if(time===1){
    // selTime = time+":"+min
    //     }else if(time===30){
    // selTime = 
    //     }else if(time===90){
    
    //     }else if(time===365){
          
    //     }
    //   }

      data.push({
        name: time+":"+min ,
        value: graphData.prices[i][1],
      });
    }
  }

  if (dataSet) {
    console.log(dataSet.low_24h);
  }
  return (
    <div className="font1 ">
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
          
            width={500}
            height={500}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[dataSet.low_24h,dataSet.high_24h]} />
            <Tooltip />
            <Line
            
              type="monotone"
              dataKey="value"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
              // fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Testing1;
