import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Purchasing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="w-full bg-white px-5 md:px-20 py-20 md:py-40">
        <div
          className="w-full md:max-w-[1200px] mx-auto flex flex-col"
          data-aos="zoom-in"
        >
          <div className="w-fit mx-auto">
            <p className="font-Quattrocento text-center text-3xl md:text-6xl">
              Have a complete purchasing solution
            </p>
            <p className="text-center mt-3 md:mt-10 text-md md:text-xl text-[#828282]">
              Advertise, Approve and Manage projects for your business.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-16">
          <div
            className="flex flex-col gap-3 items-center justify-center"
            data-aos="flip-up"
          >
            <div className="w-[180px] p-10 rounded-full bg-[#4031B7] mx-auto">
              <img src="/seller.png" alt="seller" />
            </div>
            <p className=" font-Quattrocento text-xl md:text-2xl">
              Vendor Agreements
            </p>
            <p className="text-md md:text-xl text-[#828282]">
              Manage vendor agreements with ease
            </p>
          </div>
          <div
            className="flex flex-col gap-3 items-center justify-center"
            data-aos="flip-down"
          >
            <div className="w-[180px] p-10 rounded-full bg-[#4031B7] mx-auto">
              <img src="/role.png" alt="role" />
            </div>
            <p className=" font-Quattrocento text-xl md:text-2xl">
              User Management
            </p>
            <p className="text-md md:text-xl text-[#828282]">
              Onboard and fulfill user roles effectively
            </p>
          </div>
          <div
            className="flex flex-col gap-3 items-center justify-center"
            data-aos="flip-up"
          >
            <div className="w-[180px] p-10 rounded-full bg-[#4031B7] mx-auto">
              <img src="/clipboard.png" alt="clipboard" />
            </div>
            <p className=" font-Quattrocento text-xl md:text-2xl">
              Checks & Balances
            </p>
            <p className="text-md md:text-xl text-[#828282]">
              Never miss a process with our workflows
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchasing;
