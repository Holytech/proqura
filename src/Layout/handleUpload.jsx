import axios from "axios";

export const handleUpload = (e, setProgress, setVariable) => {
  setProgress(0);
  const file = e.target.files[0];

  const formdata = new FormData();
  formdata.append("file", file);

  axios
    .post("url", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (event) => {
        setProgress(Math.round(100 * event.loaded) / event.total);
      },
    })
    .then((res) => {
      setVariable(URL.createObjectURL(file));
    })
    .catch((err) => {});
  setVariable(e.target.value);
};
