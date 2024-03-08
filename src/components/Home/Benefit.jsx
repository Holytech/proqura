import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Benefit = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white md:bg-artboard bg-right bg-no-repeat">
        <div className="py-20 md:py-40 px-5 md:px-20 flex flex-col md:flex-row justify-between gap-10">
          <div className="w-full md:w-1/3">
            <p
              className="text-5xl text-[#111028] font-Quattrocento"
              data-aos="fade-right"
            >
              Manage work with confidence
            </p>
            <p
              className="mt-5 text-xl text-[#828282] font-semibold"
              data-aos="fade-right"
            >
              User-friendly with enterprise grade security
            </p>
            <div className="flex flex-col mt-10 gap-10">
              <div className="flex flex-row gap-5" data-aos="fade-right">
                <div className="bg-[#4031B7] rounded-full p-5 h-fit w-fit">
                  <img src="/padlock.png" alt="Seecure" />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-Quattrocento text-3xl text-[#17162D]">
                    Secure
                  </p>
                  <p className="text-[#828282] font-semibold">
                    Safeguard your agreements.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5" data-aos="fade-right">
                <div className="bg-[#4031B7] rounded-full p-5 h-fit w-fit">
                  <img src="/transparency.png" alt="transparency" />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-Quattrocento text-3xl text-[#17162D]">
                    Competely Honest
                  </p>
                  <p className="text-[#828282] font-semibold">
                    Protection against data fraud.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5" data-aos="fade-right">
                <div className="bg-[#4031B7] rounded-full p-5 h-fit w-fit">
                  <img src="/server.png" alt="server" />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-Quattrocento text-3xl text-[#17162D]">
                    Hosted on your servers
                  </p>
                  <p className="text-[#828282] font-semibold">
                    You control your data with no interferance
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/working-man.png"
            alt="working man"
            className="w-full md:w-2/5"
            data-aos="fade-up"
          />
        </div>
      </div>
    </>
  );
};

export default Benefit;
