import PropTypes from "prop-types";
const Error = ({ error }) => {
  return (
    <p className="w-full text-center py-2 my-3 bg-red-500 rounded-lg text-white">{error}</p>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;