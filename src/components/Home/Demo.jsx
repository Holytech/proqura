import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Demo = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-demo bg-no-repeat bg-cover" data-aos="fade-up">
        <div className="w-full py-20 md:py-28 px-5 md:px-20 flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-Quattrocento text-[#F2F2F2]">
              Sign here
            </p>
            <p className="text-white font-semibold">
              Book a demo and start your 14 day free trial:
            </p>
          </div>
          <Link
            className="text-white bg-[#60CBBE] px-4 py-2 w-fit rounded-3xl"
            to="#"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </>
  );
};

export default Demo;
