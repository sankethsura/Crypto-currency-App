import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
const Table1 = (props) => {
  // console.log(props.data);
  let arr1 = [];

  if (props.data) {
    arr1 = props.data.map((row) => {
      let styles = {
        color: row.price_change_percentage_24h > 0 ? "green" : "red",
      };

      return (

        <TableRow
        // style={{backgroundColor:'#EEEEEE', color: 'white',}}
          key={row.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          className=""
          >
          <TableCell component="th" scope="row" >
            <Link to={"/detail/" + row.id}>
              <div className="flex items-center font1">
                <div className="w-[30px] ">
                  <img alt="" src={row.image} />
                </div>
                <section className="px-3">
                  <div className="text-md font-semibold ">
                    {row.symbol.toUpperCase()}
                  </div>
                  <div className="text-xs">{row.id.toUpperCase()}</div>
                </section>
              </div>
            </Link>
          </TableCell>
          <TableCell align="right">
            {props.currency === "usd" ? "$" : "₹"}
            {row.current_price}
          </TableCell>
          <TableCell align="right">
            <div style={styles}>
              {Math.floor(row.price_change_percentage_24h * 100) / 100}%
            </div>
          </TableCell>
          <TableCell align="right">
            {props.currency === "usd" ? "$" : "₹"}
            {row.market_cap}
          </TableCell>
        </TableRow>
        
          
      );
    });
  }

  return (
    <div className="w-[80vw] m-auto py-5 ">
      <TableContainer component={Paper}>
        <Table  sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor:'#EEEEEE', color: 'white',}} className="shadow2">
              <TableCell >
                <div className="text-md font-bold font1 ">COIN</div>
              </TableCell>
              <TableCell align="right">
                <div className="text-md font-bold font1">Price</div>
              </TableCell>
              <TableCell align="right">
                <div className="text-md font-bold font1">24h Change</div>
              </TableCell>
              <TableCell align="right">
                <div className="text-md font-bold font1">Market Cap</div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{props.data && arr1}</TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-center py-5">

      {/* <Pagination count={10} /> */}
      </div>
    </div>
  );
};

export default Table1;
