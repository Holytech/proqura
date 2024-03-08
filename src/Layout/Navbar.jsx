import { FaPhoneAlt, FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/proqura_logo_2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="">
        <div className="w-full mx-auto px-5 md:px-20 py-4 md:py-8">
          <div className="flex justify-end gap-4 items-center text-sm md:text-md">
            <span className="flex items-center text-[#B6D2E3] gap-3">
              <FaPhoneAlt />
              +234 70 5777 6753
            </span>
            <span className="text-white">|</span>
            <a
              href="mailto:hello@proqura.ng"
              className="flex items-center text-[#B6D2E3] gap-3"
            >
              <CiMail />
              hello@proqura.ng
            </a>
          </div>
          <div className="w-full flex items-center justify-between mt-4 gap-20">
            <Link to="/">
              <img src={logo} alt="Company's logo" />
            </Link>
            <div className="hidden lg:flex items-center justify-between w-[80%]">
              <div className="text-[#B6D2E3] flex gap-10">
                <Link to="#">How it Works</Link>
                <Link to="#">Customers</Link>
                <Link to="#">FAQ</Link>
                <Link to="#">Pricing</Link>
              </div>

              <div className="flex gap-10 items-center text-[#B6D2E3]">
                <Link to="/login">Log In</Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-3 border-[1px] border-[#B6D2E3] rounded-3xl py-2 px-4"
                >
                  Sign Up
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
            <GiHamburgerMenu
              className="text-[#B6D2E3] text-3xl inline-block lg:hidden cursor-pointer"
              onClick={() => setNav(true)}
            />
          </div>
          <div
            className={
              nav
                ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white md:hidden backdrop-blur"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed w-full text-left bg-background bg-[#4031B7] left-0 top-0 bottom-0 text-white h-full p-10 py-10 ease-in duration-500"
                  : "fixed p-10 w-full left-[-100%] z-50 top-0 duration-1000 h-full ease-in"
              }
            >
              <div className="w-full flex justify-between items-center mb-[5rem]">
                <div
                  className="cursor-pointer p-0"
                  onClick={() => setNav(false)}
                >
                  <Link to="/">
                    <img src={logo} alt="Company's Logo" />
                  </Link>
                </div>
                <div className="cursor-pointer" onClick={() => setNav(false)}>
                  <FaTimes size={30} />
                </div>
              </div>
              <div className="flex flex-col gap-8 text-white justify-between h-fit mb-[100px] font-bold">
                <Link to="#">How it Works</Link>
                <Link to="#">Customers</Link>
                <Link to="#">FAQ</Link>
                <Link to="#">Pricing</Link>
              </div>
              <div className="flex flex-col gap-8 font-bold">
                <Link to="/login">Log In</Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-3 border-[1px] border-[#B6D2E3] rounded-3xl py-2 px-4 w-fit"
                >
                  Sign Up
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
