import { useRef } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SliderContent1 = (props) => {
  const [width, setWidth] = useState(0);
  const carrousal = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(carrousal.current.scrollWidth, carrousal.current.offsetWidth);
      setWidth(carrousal.current.scrollWidth - carrousal.current.offsetWidth);
    }, 500);
  }, [width]);

  // console.log(props.data);

  let arr1 = [];
  if (props.data) {
    arr1 = props.data.map((item, index) => {
      let styles = {
        color: item.price_change_percentage_24h > 0 ? "green" : "red",
      };
      return (
        <div
          key={index}
          onClick={() => {
            console.log("clicked", item.id);
          }}
        >
          <motion.div className="item min-w-[10rem] m-[20px] py-3 rounded-xl pointer-events-none border-2 border-black h-[150px] flex justify-center items-center bg-gradient-to-r from-[#1d1c1c] to-[#20448d] text-[#FFF] font1 text-sm shadow1">
            <section className="flex items-center flex-col ">
              {/* <Link to={"/detail/"+item.id} > */}
              <div>
                <img className="w-[50px] z-10" alt="" src={item.image} />
              </div>
              {/* </Link> */}
              <div className="text-sm font-semibold ">
                {item.id.toUpperCase()}
              </div>
              <div>
                {props.currency === "usd" ? "$" : "₹"}
                {item.current_price}
              </div>
              <div style={styles} className="text-xs font-bold">
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </div>
            </section>
          </motion.div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className=" text-lg flex w-[80vw] m-auto font-semibold pt-5 font1 text-[#17284d] ">
        Top Trending Coins
      </div>
      <div className="w-[80vw] m-auto py-5">
        <motion.div
          ref={carrousal}
          className="carousal cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousal flex"
          >
            {arr1}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderContent1;
