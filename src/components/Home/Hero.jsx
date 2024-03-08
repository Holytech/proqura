import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="w-full bg-[#4031B7] md:bg-artboard bg-no-repeat bg-right">
        <Navbar />
        <div className="w-full flex flex-col md:flex-row items-center px-5 md:pl-20 md:pr-0 py-20 justify-between gap-10">
          <div className="flex flex-col gap-10 w-full md:w-1/2" data-aos="zoom-in-right">
            <p className="text-[#FFF8F8] text-5xl md:text-7xl font-Quattrocento">
              The simpler way to manage{" "}
              <span className="text-[#8cfff1]">procurement</span>
            </p>
            <p className="text-[#B6D2E3] text-xl md:text-3xl">
              Proqura is a robust procure-to-pay system for your business.
              Automated purchasing, simple sourcing and spend analytics — all in
              one easy-to-use platform
            </p>
            <div className="flex flex-col md:flex-row justify-start md:items-center gap-5 md:gap-10">
              <Link
                className="text-white bg-[#60CBBE] px-4 py-2 w-fit rounded-3xl"
                to="#"
              >
                Book Demo
              </Link>
              <Link className="flex gap-4 items-center text-white">
                Questions? Talk to our team <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3" data-aos="zoom-in-left">
            <img
              src="/livestream.png"
              alt="livestream"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
