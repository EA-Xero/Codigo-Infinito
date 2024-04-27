import PropTypes from "prop-types";
const SocialButton = ({ icon }) => {
  return (
    <>
      <i className={icon}></i>
    </>
  );
};
SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SocialButton;
