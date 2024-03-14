import { useState } from "react";
import Company from "../icons/Company";
import Envelope from "../icons/Envelope";
import Lock from "../icons/Lock";
import { Link, useNavigate } from "react-router-dom";
import Error from "../Layout/Error";

const SignUp = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [compName, setCompName] = useState("");
  const [cac, setCac] = useState("");
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (email !== confEmail) {
      setError("Email addresses are not the same");
    }
    if (pass !== confPass) {
      setError("Passwords are not the same");
    }
    if (pass === confPass && email === confEmail) {
      navigate("/registration");
    }
  };

  return (
    <>
      <div className="w-full flex">
        <div className="w-full md:w-2/3">
          <div className="px-5 md:px-28 py-5 md:py-10 flex flex-col gap-10">
            <Link to="/">
              <img
                src="/proqura_logo_purple.png"
                alt="proqura_logo_purple"
                className="w-fit"
              />
            </Link>
            <p className="font-bold text-2xl text-[#42505C]">
              Welcome to Proqura
            </p>
            <p className="text-[#7D7D7D] font-semibold text-justify">
              We&apos;re sure you&apos;ll love the simplicity and transparency
              Proqura brings. To get started, please enter your email address
              and password.
            </p>
            <p className="text-center py-2 bg-[#f0f2fc] rounded-lg text-[#7D7D7D]">
              Note that all the fields in the form below are compulsory and must
              be filled.
            </p>
            <form
              className="w-full mt-5 flex flex-col"
              onSubmit={(e) => handleSubmit(e)}
            >
              {error ? <Error error={error} /> : ""}
              <div className="w-full grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company_name"
                    className="block mb-2 text-[#6A79DD] font-bold text-xl"
                  >
                    Company Name
                  </label>
                  <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                    <input
                      id="company_name"
                      type="text"
                      placeholder="Nigerian Business Limited"
                      className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                      required
                      value={compName}
                      onChange={(e) => setCompName(e.target.value)}
                    />
                    <Company />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="cac"
                    className="flex mb-2 text-[#6A79DD] font-bold text-xl"
                  >
                    CAC RC No. / BN
                  </label>
                  <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                    <input
                      id="cac"
                      type="text"
                      placeholder="RC:XXXXX"
                      className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                      required
                      value={cac}
                      onChange={(e) => setCac(e.target.value)}
                    />
                  </div>
                </div>
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
                <div>
                  <label
                    htmlFor="confirm_email"
                    className="flex mb-2 text-[#6A79DD] font-bold text-xl"
                  >
                    Confirm Email
                  </label>
                  <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                    <input
                      id="confirm_email"
                      type="email"
                      placeholder="nene.k@quomodosystems.com"
                      className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                      required
                      value={confEmail}
                      onChange={(e) => setConfEmail(e.target.value)}
                    />
                    <Envelope />
                  </div>
                </div>
                <div>
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
                <div>
                  <label
                    htmlFor="confirm_password"
                    className="flex mb-2 text-[#6A79DD] font-bold text-xl"
                  >
                    Confirm Password
                  </label>
                  <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                    <input
                      id="confirm_password"
                      type="password"
                      placeholder="***************"
                      className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                      required
                      value={confPass}
                      onChange={(e) => setConfPass(e.target.value)}
                    />
                    <Lock />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center gap-6">
                <button className="bg-[#6A79DD] font-bold text-white rounded-xl py-5 px-20 text-xl">
                  Conitnue
                </button>
                <p className=" font-semibold">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#6A79DD]">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
            <div className="text-[#7D7D7D] text-sm flex gap-3">
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

export default SignUp;
