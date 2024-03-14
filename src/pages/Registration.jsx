import { Link, useNavigate } from "react-router-dom";
import Location from "../icons/Location";
import Globe from "../icons/Globe";
import User from "../icons/User";
import Mobile from "../icons/Mobile";
import Envelope from "../icons/Envelope";
import { useState } from "react";
import Error from "../Layout/Error";

const Registration = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [bussAddr, setBussAddr] = useState("");
  const [bussType, setBussType] = useState("");
  const [website, setWebsite] = useState("");
  const [contactPers, setContactPer] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (email !== confEmail) {
      setError("Email addresses are not the same");
    }
    if (email === confEmail) {
      navigate("/upload");
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
              Complete your registration
            </p>
            <p className="text-[#7D7D7D] font-semibold text-justify">
              We&apos;re sure you&apos;ll love the simplicity and transparency
              Proqura brings. To get started, please enter your email address
              and password.
            </p>
            <p className="text-center py-2 bg-[#f0f2fc] rounded-lg text-[#7D7D7D]">
              Note that all the fields in the below form are compulsory and must
              be filled.
            </p>
            <form
              className="w-full mt-5 flex flex-col"
              onSubmit={(e) => handleSubmit(e)}
            >
              {error ? <Error error={error} /> : ""}
              <div className="w-full flex flex-col gap-6">
                <div className="w-full">
                  <label
                    htmlFor="bussiness_address"
                    className="block mb-2 text-[#6A79DD] font-bold text-xl"
                  >
                    Business Address
                  </label>
                  <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                    <input
                      id="bussiness_address"
                      type="text"
                      placeholder="Nigerian Business Limited"
                      className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                      required
                      value={bussAddr}
                      onChange={(e) => setBussAddr(e.target.value)}
                    />
                    <Location />
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="bussiness_type"
                      className="flex mb-2 text-[#6A79DD] font-bold text-xl"
                    >
                      Business Type
                    </label>
                    <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                      <select
                        id="bussiness_type"
                        type="text"
                        placeholder="Select Business type"
                        className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                        required
                        value={bussType}
                        onChange={(e) => setBussType(e.target.value)}
                      >
                        <option value="">Select Business type</option>
                        <option value="Technology">Technology</option>
                        <option value="Finance">Finance</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="website"
                      className="block mb-2 text-[#6A79DD] font-bold text-xl"
                    >
                      Website
                    </label>
                    <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                      <input
                        id="website"
                        type="url"
                        placeholder=""
                        className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                        required
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                      <Globe />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-6 mt-20">
                <div className="w-full">
                  <label
                    htmlFor="contact_person"
                    className="block mb-2 text-[#6A79DD] font-bold text-xl"
                  >
                    Contact Person
                  </label>
                  <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                    <input
                      id="contact_person"
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                      required
                      value={contactPers}
                      onChange={(e) => setContactPer(e.target.value)}
                    />
                    <User />
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="phone_number"
                      className="block mb-2 text-[#6A79DD] font-bold text-xl"
                    >
                      Phone Number
                    </label>
                    <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                      <input
                        id="phone_number"
                        type="tel"
                        placeholder="08046543397"
                        className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <Mobile />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="role"
                      className="flex mb-2 text-[#6A79DD] font-bold text-xl"
                    >
                      Role
                    </label>
                    <div className="flex gap-2 rounded-xl py-2 px-4 items-center border-[#E4E8EA] border-2">
                      <input
                        id="role"
                        type="text"
                        placeholder="Enter Role"
                        className="w-full h-[40px] focus:outline-none text-lg bg-transparent placeholder:text-[#79828B] text-[#79828B]"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
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
                  <div className="w-full md:w-1/2">
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
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center gap-6 mt-6">
                <button className="bg-[#6A79DD] font-bold text-white rounded-xl w-1/2 h-[60px] text-xl">
                  Conitnue
                </button>
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

export default Registration;
