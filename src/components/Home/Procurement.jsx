import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Procurement = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-[#FBFAF9]">
        <div className="w-full px-5 md:px-20 py-20 flex flex-col gap-5">
          <div className="w-fit mx-auto" data-aos="zoom-in">
            <p className="font-Quattrocento text-center text-3xl md:text-6xl">
              Full procurement platform for business
            </p>
            <p className="text-center mt-3 md:mt-10 text-md md:text-xl text-[#828282]">
              Contains features to automate advertising, contracting, sourcing
              and more for your organization.
            </p>
          </div>
          <img
            src="/tender-board.png"
            alt="Tender Board Memo"
            className="w-full"
            data-aos="zoom-in-up"
          />
          <div className="flex flex-col md:flex-row justify-evenly gap-14">
            <div
              className="w-full md:w-1/5 text-center flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <p className=" font-Quattrocento text-xl md:text-3xl">
                Setup approval routes
              </p>
              <p className="text-md text-[#828282]">
                Set an approval order and proqura will automatically carry out
                your actions.
              </p>
            </div>
            <div
              className="w-full md:w-1/5 text-center flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <p className=" font-Quattrocento text-xl md:text-3xl">
                Collect Acknowledgement
              </p>
              <p className="text-md text-[#828282]">
                Vendors and key actors can acknoweldge reciept of important
                documentation.
              </p>
            </div>
            <div
              className="w-full md:w-1/5 text-center flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <p className=" font-Quattrocento text-xl md:text-3xl">
                Smart Archiving
              </p>
              <p className="text-md text-[#828282]">
                Generate and store a complete, time stamped file for each
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procurement;
