import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="py-20 px-5 md:px-20">
          <div className="w-full flex flex-col md:flex-row justify-evenly gap-10 md:gap-0 text-2xl md:text-xl">
            <div className="w-full md:w-1/6 flex flex-col gap-3 items-center md:items-start">
              <p className="text-[#4F4F4F] font-semibold">Company</p>
              <Link to="#" className="text-[#BDBDBD]">
                Home
              </Link>
              <Link to="#" className="text-[#BDBDBD]">
                Social
              </Link>
            </div>
            <div className="w-full md:w-1/6 flex flex-col gap-3 items-center md:items-start">
              <p className="text-[#4F4F4F] font-semibold">Resources</p>
              <Link to="#" className="text-[#BDBDBD]">
                Book a demo
              </Link>
              <Link to="#" className="text-[#BDBDBD]">
                Help Center
              </Link>
            </div>
            <div className="w-full md:w-1/6 flex flex-col gap-3 items-center md:items-start">
              <p className="text-[#4F4F4F] font-semibold">Features</p>
              <Link to="#" className="text-[#BDBDBD]">
                How it works
              </Link>
              <Link to="#" className="text-[#BDBDBD]">
                Documentatiom
              </Link>
            </div>
            <div className="w-full md:w-1/6 flex flex-col gap-3 items-center md:items-start">
              <p className="text-[#4F4F4F] font-semibold">Contact</p>
              <Link to="#" className="text-[#BDBDBD]">
                hello@proqura.com
              </Link>
              <Link to="#" className="text-[#BDBDBD]">
                +234 70 577 6753
              </Link>
            </div>
            <div className="w-full md:w-1/6 flex flex-col gap-3 items-center md:items-start">
              <img
                src="/proqura_logo_purple.png"
                alt="proqura logo purple"
                className="w-fit"
              />
            </div>
          </div>
          <p className="text-[#BDBDBD] font-semibold w-fit mx-auto md:mx-0 md:ml-auto mt-10 text-2xl md:text-xl">
            Change language <span className="text-[#4445B7]">English</span>
          </p>
          <hr className="h-px my-8 bg-[#828282] border-0"></hr>
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 text-[#BDBDBD]">
            <p className="w-fit">Proqura - All rights reserved</p>
            <div className="flex flex-col md:flex-row gap-8">
              <Link to="#">Terms of Service</Link>
              <Link to="#">Privacy</Link>
              <Link to="#">Legal Notice</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
