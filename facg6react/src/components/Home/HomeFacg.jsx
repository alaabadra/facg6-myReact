import React from "react";
import PropTypes from "prop-types";

const HomeFacg = props => {
  const { avatar_url, html_url } = props.data;
  return (
    <div className="main">
      <img className="avatar" src={avatar_url} alt="" />
      <a href={html_url}>Go to repos.</a>
      <div className="description">
        The Code Academy is Palestine’s first full-stack coding bootcamp with a
        flagship campus in Gaza City and second campus in the West Bank city of
        Hebron. We train 16 students in a full-time, intensive course for 8
        weeks with an additional 16 weeks of project-based learning with
        real-world clients to jumpstart your professional portfolio. The
        objective is to graduate as full-stack developers who can deploy
        production-grade software online and secure high-quality jobs with
        companies or work as freelance developers.
      </div>
    </div>
  );
};
// HomeFacg.propTypes = {
//   data: PropTypes.shape({
//     avatar_url: PropTypes.string,
//     html_url: PropTypes.string
//   }).isRequired
// };
export default HomeFacg;
