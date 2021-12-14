import React from "react";
import "../css/Statistic.css";
import PropTypes from "prop-types";

const Statistic = (props) => {
  return (
    <div className="Stat">
      <article>Stat name: {props.name}</article>
      <article>Stat value: {props.value}</article>
    </div>
  );
};

Statistic.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  operate: PropTypes.func,
};

export default Statistic;
