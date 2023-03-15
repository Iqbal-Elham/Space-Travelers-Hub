/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({
  id, name, type, img,
}) => (
  <div>
    <h1>{name}</h1>
    <h2>{type}</h2>
    <h2>{id}</h2>
    <img src={img} alt="Rocket" />
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
};

export default Rocket;
