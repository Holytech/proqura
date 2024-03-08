import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="md:bg-shape bg-left bg-no-repeat">
        <div className="px-5 md:px-20 py-20 md:py-40 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/smiling-man.png"
              alt="smiling man"
              className="w-full md:w-4/5"
              data-aos="fade-right"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <p
              className="text-5xl md:text-6xl text-[#111028] font-Quattrocento"
              data-aos="fade-left"
            >
              Build the best experience
            </p>
            <p
              className="mt-5 text-xl text-[#828282] font-semibold text-justify"
              data-aos="fade-left"
            >
              Our modern API works for your team and your users. Integrate
              Proqura to your team&apos;s tools or embed our user- friendly
              proqurement solution service directly to your app.
            </p>
            <div className="grid grid-cols-4 gap-y-8">
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img src="/requisition.png" alt="requisition" />
                </div>
                <p className="text-[#828282] text-sm">Requisition</p>
              </div>
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img src="/sourcing.png" alt="sourcing" />
                </div>
                <p className="text-[#828282] text-sm">Sourcing</p>
              </div>
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img src="/invoice.png" alt="invoice" />
                </div>
                <p className="text-[#828282] text-sm">Invoicing</p>
              </div>
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img src="/calculator.png" alt="calculator" />
                </div>
                <p className="text-[#828282] text-sm">Budgeting</p>
              </div>
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img src="/security.png" alt="security" />
                </div>
                <p className="text-[#828282] text-sm">Vendor portal</p>
              </div>
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img src="/statistics.png" alt="statistics" />
                </div>
                <p className="text-[#828282] text-sm">Real-time reports</p>
              </div>
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img
                    src="/multiple-users-silhouette.png"
                    alt="multiple users silhouette"
                  />
                </div>
                <p className="text-[#828282] text-sm">User roles control</p>
              </div>
              <div
                className="flex flex-col gap-5 items-center"
                data-aos="zoom-in"
              >
                <div className="w-fit h-fit p-5 rounded-full bg-[#4031B7]">
                  <img src="/timeline.png" alt="timeline" />
                </div>
                <p className="text-[#828282] text-sm">User roles control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
