import { Link } from "react-router-dom";
import { useState } from "react";
import Lock from "../icons/Lock";
import Envelope from "../icons/Envelope";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <div className="w-full flex">
        <div className="w-full h-[100vh] md:w-2/3">
          <div className="px-5 md:px-28 py-5 md:py-10 flex flex-col gap-5">
            <Link to="/">
              <img
                src="/proqura_logo_purple.png"
                alt="proqura_logo_purple"
                className="w-fit"
              />
            </Link>
            <p className="font-bold text-2xl text-[#42505C]">Welcome back!</p>
            <p className="text-[#7D7D7D] font-semibold text-justify">
              Login to your secure procurement management portal with your
              username and password
            </p>
            <form className="w-full mt-10">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-[#6A79DD] font-bold text-xl"
                >
                  Email
                </label>
                <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="nene.k@quomodosystems.com"
                    className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Envelope />
                </div>
              </div>
              <div className="mt-10">
                <label
                  htmlFor="password"
                  className="block mb-2 text-[#6A79DD] font-bold text-xl"
                >
                  Password
                </label>
                <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                  <input
                    id="password"
                    type="password"
                    placeholder="***************"
                    className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                    required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <Lock />
                </div>
              </div>
              <Link className="block text-[#6A79DD] w-fit ml-auto mt-5">
                Forgot Password?
              </Link>
              <div className="w-full mt-5">
                <button className="bg-[#6A79DD] font-bold text-white rounded-xl py-5 px-20 text-xl w-5/6 md:w-4/6">
                  LOGIN
                </button>
                <p className=" font-semibold mt-5">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-[#6A79DD]">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <div className="text-[#7D7D7D] text-sm flex gap-3 mt-5">
              <Link to="#">Terms and Conditions</Link>
              <p>|</p>
              <Link to="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-block w-1/3 bg-handshake bg-no-repeat bg-cover bg-center">
          <div className="w-full h-full bg-transparentPurple"></div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
