import { Link } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { handleUpload } from "../Layout/handleUpload";
import Error from "../Layout/Error";
// import axios from "axios";

const Upload = () => {
  const [incorp, setIncorp] = useState("");
  const [tax, setTax] = useState("");
  const [pencom, setPencom] = useState("");
  const [itf, setItf] = useState("");
  const [nsitf, setNsitf] = useState("");
  const [bpp, setBpp] = useState("");
  const [affidavit, setAffidavit] = useState("");
  const [reports, setReports] = useState("");
  const [profile, setProfile] = useState("");

  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState("");
  const [uploaded, setUploaded] = useState([]);

  const proStyle = {
    width: progress + "%",
  };

  useEffect(() => {
    if (progress === 100) {
      setUploaded([...uploaded, uploading]);
      setUploading("");
    }
  }, [progress]);

  const handleSubmit = () => {
    setError("");
    if (
      !tax ||
      !pencom ||
      !itf ||
      !nsitf ||
      !bpp ||
      !affidavit ||
      !reports ||
      !profile
    ) {
      setError("Please, do make sure to attch all documents");
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 bg-white py-5 px-5 md:px-20 h-[100vh]">
          <Link to="/">
            <img
              src="/proqura_logo_purple.png"
              alt="proqura_logo_purple"
              className="w-fit"
            />
          </Link>
          <p className="font-bold text-2xl text-[#42505C] mt-32 mb-5">
            Upload Statutory Documents
          </p>
          <p className="text-[#7D7D7D] font-semibold text-justify">
            Please upload statutory documents in order to qualify for Expression
            of Interest Bids. You can also skip this process and complete it at
            a later time, but it is pertinent to note that in the mean time you
            will not receive notifications of the following:
          </p>
          <ul className="list-inside text-[#7D7D7D] space-y-3 mt-8">
            <li className="flex items-center gap-5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#6A79DD" />
              </svg>
              Bid Notifications
            </li>
            <li className="flex items-center gap-5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#6A79DD" />
              </svg>
              EOI Evaluations
            </li>
            <li className="flex items-center gap-5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#6A79DD" />
              </svg>
              Request for Proposal
            </li>
          </ul>
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-20 gap-6 md:gap-0">
            <button
              className="bg-[#6A79DD] font-bold text-white rounded-xl py-5 px-16 text-xl"
              onClick={() => handleSubmit()}
            >
              REGISTER
            </button>
            <Link to="/login" className="text-[#42505C]">
              Skip Upload
            </Link>
          </div>
          <div className="text-[#7D7D7D] text-sm flex gap-3 mt-40">
            <Link to="#">Terms and Conditions</Link>
            <p>|</p>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>
        <div className="w-full md:w-3/5 bg-[#f0f2fc] flex flex-col items-center justify-center py-10 px-3">
          {error ? <Error error={error} /> : ""}
          <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row">
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                Certificate of Incorporation
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {incorp && uploaded.indexOf("Incorporation") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 &&
                  progress < 100 &&
                  uploading === "Incorporation" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="incorp"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="incorp"
                  value={incorp}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("Incorporation");
                    handleUpload(e, setProgress, setIncorp);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                Tax Clearance Cert. (Last 3 years)
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {tax && uploaded.indexOf("Tax") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 && progress < 100 && uploading === "Tax" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="tax"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="tax"
                  value={tax}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("Tax");
                    handleUpload(e, setProgress, setTax);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                PENCOM Compliance Cert.
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {pencom && uploaded.indexOf("PENCOM") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 && progress < 100 && uploading === "PENCOM" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="pencom"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="pencom"
                  value={pencom}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("PENCOM");
                    handleUpload(e, setProgress, setPencom);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                ITF Compliance Certificate
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {itf && uploaded.indexOf("ITF") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 && progress < 100 && uploading === "ITF" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="itf"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="itf"
                  value={itf}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("ITF");
                    handleUpload(e, setProgress, setItf);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                NSITF Compliance Certificate
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {nsitf && uploaded.indexOf("NSITF") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 && progress < 100 && uploading === "NSITF" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="nsitf"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="nsitf"
                  value={nsitf}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("NSITF");
                    handleUpload(e, setProgress, setNsitf);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                BPP / Contractors Database Registration
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {bpp && uploaded.indexOf("BPP") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 && progress < 100 && uploading === "BPP" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="bpp"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="bpp"
                  value={bpp}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("BPP");
                    handleUpload(e, setProgress, setBpp);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                Non-Criminal Affidavit
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {affidavit && uploaded.indexOf("Affidavit") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 &&
                  progress < 100 &&
                  uploading === "Affidavit" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="affidavit"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="affidavit"
                  value={affidavit}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("Affidavit");
                    handleUpload(e, setProgress, setAffidavit);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">
                Annual Audit Reports
              </p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {reports && uploaded.indexOf("Reports") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 &&
                  progress < 100 &&
                  uploading === "Reports" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="reports"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="reports"
                  value={reports}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("Reports");
                    handleUpload(e, setProgress, setReports);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="text-[#7D7D7D] font-semibold">Company Profile</p>
              <div className="w-full h-[200px] bg-white border-[#6A79DD] border-2 rounded-xl flex items-center justify-center mt-4">
                {profile && uploaded.indexOf("Profile") > -1 ? (
                  <>
                    <img src="/pdf.png" alt="" />
                  </>
                ) : progress > 0 &&
                  progress < 100 &&
                  uploading === "Profile" ? (
                  <div className="w-[80%] mx-auto rounded-full bg-[#DEDEDE]">
                    <div
                      className="bg-[#6A79DD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={proStyle}
                    >
                      {Math.floor(progress)}%
                    </div>
                  </div>
                ) : (
                  <>
                    <label
                      htmlFor="profile"
                      className="flex items-center gap-1 text-[#6A79DD] border-[#6A79DD] border-2 p-2 rounded-3xl cursor-pointer md:hover:animate-bounce"
                    >
                      <FaCloudUploadAlt />{" "}
                      <span className="text-sm">Browse</span>
                    </label>
                  </>
                )}
                <input
                  type="file"
                  id="profile"
                  value={profile}
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    setUploading("Profile");
                    handleUpload(e, setProgress, setProfile);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
